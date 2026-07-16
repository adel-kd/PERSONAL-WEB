const primary = [
  { name: 'React.js', level: 95 },
  { name: 'Node.js', level: 90 },
  { name: 'Express', level: 88 },
  { name: 'MongoDB', level: 85 },
  { name: 'JavaScript ES6+', level: 92 },
  { name: 'Tailwind CSS', level: 90 },
];

const secondary = [
  'Redux Toolkit', 'JWT / RBAC', 'REST APIs', 'MySQL',
  'Docker', 'Git / CI/CD', 'MuleSoft (Anypoint)', 'Gemini AI',
  'TypeScript', 'DevOps', 'Mongoose', 'WebSockets',
];

export default function Stack() {
  return (
    <section id="stack" className="py-28 bg-[#080808] border-y border-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="section-number mb-3">// 02 — TECHNICAL SKILLS</div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            TECHNICAL<br />
            <span className="text-[#e85d04]">PROFICIENCY</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Primary stack with bars */}
          <div>
            <h3 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-8">
              PRIMARY_STACK
            </h3>
            <div className="space-y-6">
              {primary.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-mono text-sm text-white">{skill.name}</span>
                    <span className="font-mono text-xs text-[#e85d04]">{skill.level}%</span>
                  </div>
                  <div className="h-px bg-[#1a1a1a] relative overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#e85d04] to-[#f48c06] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary + categories */}
          <div>
            <h3 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-8">
              SECONDARY_TOOLS
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-12">
              {secondary.map((s) => (
                <span
                  key={s}
                  className="skill-tag font-mono text-xs px-3 py-1.5 border border-[#222] text-[#666] tracking-wider cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Architecture callouts */}
            <div className="space-y-4">
              {[
                { label: 'Architecture', value: 'MVC, RESTful, Microservices' },
                { label: 'Security', value: 'JWT, RBAC, bcrypt' },
                { label: 'Database', value: 'MongoDB, MySQL' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 border-b border-[#111] pb-4">
                  <span className="font-mono text-[10px] text-[#e85d04] w-24 shrink-0 tracking-widest uppercase">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-[#777]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
