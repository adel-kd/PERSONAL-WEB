import { GraduationCap, Award, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc. in Information Technology',
    institution: 'Wolkite University',
    period: '2024 — 2028 (Candidate)',
    icon: GraduationCap,
  },
  {
    degree: 'MERN Stack Development',
    institution: 'Evangadi Network (Scholar)',
    period: 'Completed 04.14.2025',
    icon: Award,
  },
  {
    degree: 'Programming Fundamentals',
    institution: 'Udacity',
    period: 'Completed',
    icon: Award,
  },
  {
    degree: 'M-Academy Training: Gig-101, Business, Legal & Finance',
    institution: 'Mesirat Program — Mastercard Foundation',
    period: '12/12/2024',
    icon: Award,
  },
];

const awards = [
  {
    title: 'Devpost & Github Achievement ',
    desc: 'X Hackathons — Level 1, Generalist, YOLO , Pull Shark',
    icon: Trophy,
  },
  {
    title: 'Certificate of Appreciation',
    desc: 'Recognition for role as Master of Ceremonies (MC) during the Born to Win Club WKU launching event.',
    icon: Award,
  },
];

export default function Education() {
  return (
    <section className="py-28 bg-[#080808] border-y border-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="section-number mb-3">// 04 — CREDENTIALS</div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            EDUCATION &<br />
            <span className="text-[#e85d04]">CERTIFICATIONS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education & Certs */}
          <div>
            <h3 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-8">
              ACADEMIC_CREDENTIALS
            </h3>
            <div className="space-y-6">
              {education.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.degree}
                    className="flex gap-4 pb-6 border-b border-[#111] last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 border border-[#e85d04]/30 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#e85d04]" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold leading-snug">{item.degree}</div>
                      <div className="text-[#666] text-xs mt-0.5">{item.institution}</div>
                      <div className="font-mono text-[10px] text-[#e85d04] mt-1 tracking-wide">{item.period}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certificate images + Awards */}
          <div className="space-y-8">
            {/* Evangadi Certificate */}
            <div>
              <h3 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">
                FEATURED_CERTIFICATE
              </h3>
              <div className="border border-[#1a1a1a] overflow-hidden group">
                <img
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Evangadi MERN Certificate"
                  className="w-full h-40 object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                />
                <div className="p-5 bg-[#0d0d0d]">
                  <div className="font-mono text-xs text-[#e85d04] tracking-widest mb-1">EVANGADI NETWORK</div>
                  <div className="text-white text-sm font-semibold">Full Stack Web Development (MERN) Program</div>
                  <div className="text-[#555] text-xs mt-1">Issued to Adel Kedir — 04.14.2025</div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">
                AWARDS
              </h3>
              <div className="space-y-4">
                {awards.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.title} className="flex gap-3 border border-[#1a1a1a] p-4 bg-[#0d0d0d] hover:border-[#2a2a2a] transition-colors">
                      <Icon size={14} className="text-[#e85d04] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-semibold">{a.title}</div>
                        <div className="text-[#666] text-xs mt-0.5 leading-relaxed">{a.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
