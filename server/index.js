const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Check if required environment variables are set
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERROR: Missing required environment variables (EMAIL_USER, EMAIL_PASS)');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for 587 (uses STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// verify transporter without exposing secrets
transporter.verify((err) => {
  if (err) {
    console.error('Mail transporter verify failed:', err.message);
  } else {
    console.log('Mail transporter ready');
  }
});

app.get('/', (req, res) => {
  console.log('Health check received');
  res.send('OK');
});

app.post('/contact', async (req, res) => {
  console.log('Contact form submission received:', { name: req.body.name, email: req.body.email });
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    console.log('Missing fields validation failed');
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    console.log('Email sent successfully');
    return res.json({ ok: true });
  } catch (err) {
    console.error('Send mail error:', err && err.message ? err.message : err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
