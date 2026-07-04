import { Github, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#111] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-white tracking-widest">ADEL_KEDIR</span>
          <span className="font-mono text-[10px] text-[#333]">—</span>
          <span className="font-mono text-[10px] text-[#444] tracking-widest">ADEL KEDIR</span>
        </div>

        <span className="font-mono text-[11px] text-[#333]">
          &copy; {year} All rights reserved
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/adel-kd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:adelkedir971@gmail.com"
            className="text-[#555] hover:text-[#e85d04] transition-colors"
          >
            <Mail size={16} />
          </a>
             <a
            href="https://www.linkedin.com/in/adel-kedir971/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#e85d04] transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
