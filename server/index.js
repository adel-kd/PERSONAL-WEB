const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465,
  secure: process.env.SMTP_PORT ? process.env.SMTP_PORT === '465' : true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// verify transporter without exposing secrets
transporter.verify((err) => {
  if (err) console.warn('Mail transporter verify failed:', err.message);
  else console.log('Mail transporter ready');
});

app.get('/', (req, res) => res.send('OK'));

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Send mail error:', err && err.message ? err.message : err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
