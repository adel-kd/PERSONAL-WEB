import { useEffect, useState } from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const roles = [
  'MERN Stack Developer',
  'Full-Stack Engineer',
  'React Specialist',
  'Node.js Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center noise-bg overflow-hidden"
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orange accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#e85d04]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Profile pic */}
        <div className="absolute right-10 top-36 hidden sm:block w-36 h-36  overflow-hidden opacity-90 hover:opacity-100 transition-all duration-500 transform hover:scale-105">
          <img
            src="/adel-profile.png"
            alt="Adel Kedir"
            className="w-full h-full object-cover  border-[#1a1a1a] shadow-md"
          />
        </div>

        {/* System init line */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-1 h-4 bg-[#e85d04]" />
          <span className="font-mono text-xs text-[#e85d04] tracking-widest uppercase">
            SYSTEM.INITIALIZE("MERN_STACK")
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            MERN STACK
            <br />
            <span className="text-[#555]">DEVELOPER /</span>
            <br />
            BUILDING SCALABLE
            <br />
            WEB APPLICATIONS.
          </h1>
        </div>

        {/* Typing role */}
        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-[#e85d04] text-sm">$</span>
          <span className="font-mono text-[#aaa] text-sm">
            {displayed}
            <span className="cursor-blink text-[#e85d04]">_</span>
          </span>
        </div>

        {/* Sub text */}
        <p className="text-[#666] text-base max-w-lg mb-10 leading-relaxed">
          Performance-driven engineer specializing in React.js, Node.js & Express —
          crafting production-ready platforms from Welkite, Ethiopia.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 border border-white text-white text-sm font-mono tracking-wider hover:bg-white hover:text-black transition-all duration-200"
          >
            VIEW PROJECTS
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://drive.google.com/file/d/1o3vV_ydQ9ribQii44b5mhU0EoM4M9wyz/view?usp=sharing"
            className="flex items-center gap-2 px-6 py-3 border border-[#333] text-[#888] text-sm font-mono tracking-wider hover:border-[#e85d04] hover:text-[#e85d04] transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW CV
            <Download size={14} />
          </a>

          <a
            href="https://drive.google.com/file/d/1eFH8Ji091nICYTVzN1nK5KSUAIm9OHOO/view?usp=sharing"
            className="flex items-center gap-2 px-6 py-3 border border-[#333] text-[#888] text-sm font-mono tracking-wider hover:border-[#e85d04] hover:text-[#e85d04] transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            CERTIFICATE
          </a>

          <a
            href="https://github.com/adel-kd"
            className="flex items-center gap-2 px-6 py-3 border border-[#333] text-[#888] text-sm font-mono tracking-wider hover:border-[#e85d04] hover:text-[#e85d04] transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-sm">
          {[
            { num: '15+', label: 'Projects Shipped' },
            { num: '2+', label: 'Years Building' },
            { num: '3', label: 'Active Roles' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-mono text-2xl font-bold text-white">{s.num}</div>
              <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] tracking-widest text-[#666] uppercase">Scroll</span>
        <ChevronDown size={16} className="text-[#666] animate-bounce" />
      </div>
    </section>
  );
}
