import { Briefcase, Users, Star } from 'lucide-react';

const experience = [
  {
    title: 'Frontend Developer Intern',
    company: 'Infnova Technologies',
    period: 'Mar 2026 — Present',
    type: 'Internship',
    icon: Briefcase,
    color: '#e85d04',
    points: [
      'Architecting responsive, high-performance UI components using React.js and Tailwind CSS.',
      'Optimized frontend scalability via modular design patterns, reducing redundant code by 20%.',
      'Collaborating with cross-functional teams to translate UI/UX wireframes into enterprise-grade code.',
    ],
  },
  {
    title: 'Director of Tech & Innovation',
    company: 'BORN TO WIN — WKU University Club',
    period: 'Jan 2026 — Present',
    type: 'Leadership',
    icon: Star,
    color: '#2563eb',
    points: [
      'Spearheading a centralized web portal to digitize resources for 700+ students.',
      'Facilitating high-impact technical workshops on modern development workflows and AI-driven coding.',
    ],
  },
  {
    title: 'Vice President & Event Coordinator',
    company: 'GMJ — Religious Club',
    period: 'Previous Term',
    type: 'Volunteer',
    icon: Users,
    color: '#16a34a',
    points: [
      'Directed internal operations and end-to-end logistics for large-scale student summits.',
      'Coordinated technical teams to ensure seamless event execution and digital outreach.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="mb-16">
        <div className="section-number mb-3">// 03 — CAREER</div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          WORK<br />
          <span className="text-[#e85d04]">EXPERIENCE</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {experience.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="relative pl-8 pb-12 border-l border-[#1a1a1a] timeline-item"
            >
              {/* Dot */}
              <div
                className="absolute -left-2.5 top-0 w-5 h-5 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <Icon size={10} className="text-white" />
              </div>

              {/* Card */}
              <div className="ml-4 border border-[#1a1a1a] bg-[#0d0d0d] p-6 hover:border-[#2a2a2a] transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-[#666] text-sm mt-0.5">{item.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="font-mono text-xs text-[#e85d04]">{item.period}</span>
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 border tracking-widest"
                      style={{ borderColor: `${item.color}40`, color: item.color }}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[#777] text-sm leading-relaxed">
                      <span className="text-[#e85d04] mt-1.5 shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
