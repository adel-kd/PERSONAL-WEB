import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, Loader2, CheckCircle, Linkedin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'adelkedir971@gmail.com', href: 'mailto:adelkedir971@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+251 921 806 620', href: 'tel:+251921806620' },
  { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: null },
  { icon: Github, label: 'GitHub', value: 'github.com/adel-kd', href: 'https://github.com/adel-kd' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/adel-kedir971', href: 'https://www.linkedin.com/in/adel-kedir971' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="mb-16">
        <div className="section-number mb-3">// 05 — GET IN TOUCH</div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          LET&apos;S<br />
          <span className="text-[#e85d04]">CONNECT</span>
        </h2>
        <p className="text-[#555] text-sm mt-3 max-w-md leading-relaxed">
          Open to freelance opportunities, collaborations, and full-time roles.
          Drop a message and I'll respond promptly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact info */}
        <div>
          <div className="space-y-5 mb-12">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 pb-5 border-b border-[#111]">
                  <div className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#e85d04]" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-[#e85d04] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-white">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Availability status */}
          <div className="border border-[#1a1a1a] bg-[#0d0d0d] p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="font-mono text-xs text-[#16a34a] tracking-widest">AVAILABLE_FOR_HIRE</span>
            </div>
            <p className="text-[#666] text-xs leading-relaxed">
              Currently open to frontend internship extensions, freelance projects,
              and full-time MERN stack positions.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          {status === 'sent' ? (
            <div className="border border-[#16a34a]/30 bg-[#0d0d0d] p-8 flex flex-col items-center text-center gap-4">
              <CheckCircle size={36} className="text-[#16a34a]" />
              <div>
                <div className="text-white font-semibold text-lg">Message Sent!</div>
                <div className="text-[#666] text-sm mt-1">I'll get back to you shortly.</div>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="font-mono text-xs text-[#e85d04] tracking-wider hover:underline"
              >
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] text-[#555] tracking-widest uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-4 py-3 font-mono placeholder-[#333] focus:outline-none focus:border-[#e85d04] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#555] tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-4 py-3 font-mono placeholder-[#333] focus:outline-none focus:border-[#e85d04] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] text-[#555] tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-white text-sm px-4 py-3 font-mono placeholder-[#333] focus:outline-none focus:border-[#e85d04] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 border border-white text-white text-sm font-mono tracking-wider py-3 hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
