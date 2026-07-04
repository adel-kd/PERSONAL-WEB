import { Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '01',
    name: 'AGRICA',
    subtitle: 'AI-Powered Agriculture',
    description:
      'AI-driven agricultural platform connecting African farmers and buyers with voice, web, and mobile tech. Works online and offline, powered by Gemini 3 API with RBAC.',
    tags: ['MERN', 'Gemini AI', 'RBAC', 'Mobile'],
    live: 'https://agricaeth.netlify.app/',
    github: 'https://github.com/adel-kd/agri-project',
    image: 'https://res.cloudinary.com/ddntf1cdt/image/upload/v1783194680/Screenshot_from_2026-07-04_22-43-53_jvkytp.png',
    accent: '#16a34a',
    detailPath: '/project/agrica',
  },
  {
    id: '02',
    name: 'ADU FOOD',
    subtitle: 'Food Delivery Platform',
    description:
      'Full-stack delivery ecosystem with real-time rating & comments, flexible ordering, personal profiles, admin analytics dashboards, and integrated rating systems.',
    tags: ['MERN', 'Real-time', 'Dashboard', 'Full-Stack'],
    live: 'https://adu-food.netlify.app/',
    github: 'https://github.com/adel-kd/AduFood',
    image: 'https://res.cloudinary.com/ddntf1cdt/image/upload/v1783194691/Screenshot_from_2026-07-04_22-44-15_jp1xs9.png',
    accent: '#dc2626',
    detailPath: '/project/adufood',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <div className="mb-16">
        <div className="section-number mb-3">// 01 — SELECTED WORK</div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          ARCHIVE<span className="text-[#e85d04]">_00</span>
        </h2>
        <p className="text-[#555] text-sm mt-2 max-w-md">
          A curated collection of projects spanning full-stack web applications, AI integration, and platform engineering.
        </p>
      </div>

      {/* 3 cards in row */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
        <GitHubCard />
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Link to={project.detailPath} className="project-card group relative overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] rounded-sm flex flex-col hover:border-[#e85d04]/50 transition-colors">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />

        {/* ID badge */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-[#e85d04] tracking-widest">
          {project.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-extrabold text-white mb-1">{project.name}</h3>
        <p className="font-mono text-[11px] text-[#555] mb-3 tracking-wide">{project.subtitle}</p>
        <p className="text-[#777] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((t) => (
            <span key={t} className="skill-tag font-mono text-[10px] px-2 py-1 border border-[#222] text-[#555] tracking-wider">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <span className="flex items-center gap-1.5 text-[#e85d04] text-xs font-mono tracking-wider">
            VIEW DETAILS <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function GitHubCard() {
  return (
    <a
      href="https://github.com/adel-kd"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden border border-[#1a1a1a] bg-white rounded-sm flex flex-col hover:border-[#e85d04]/50 transition-colors"
    >
      {/* Content */}
      <div className="p-6 flex flex-col flex-1 h-full justify-center items-center text-center">
        <Github size={48} className="text-black mb-4" />
        <h3 className="text-lg font-extrabold text-black mb-2">Explore More</h3>
        <p className="text-[#666] text-sm mb-4">View all projects on GitHub</p>
        <div className="flex items-center gap-2 text-black text-xs font-mono tracking-wider">
          github.com/adel-kd <ArrowRight size={14} />
        </div>
      </div>
    </a>
  );
}
