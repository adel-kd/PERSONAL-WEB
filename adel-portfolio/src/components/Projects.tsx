import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: 'HABICAR',
    subtitle: 'Car Rental System',
    description:
      'Comprehensive car rental platform with JWT authentication, MySQL database, and modern booking UX. Features admin dashboard, payment integration, and user booking history.',
    tags: ['MERN', 'JWT', 'MySQL', 'React'],
    live: 'https://car-rental-ah.vercel.app/',
    github: null,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#e85d04',
  },
  {
    id: '02',
    name: 'PROGRAMMING FORUM',
    subtitle: 'Q&A Platform',
    description:
      'Specialized Q&A platform for programming students with AI agent assistance, like/voting system, and school UI integration. Supports real-time community engagement.',
    tags: ['React', 'Node.js', 'MySQL', 'AI'],
    live: 'https://adlevangadiforum.netlify.app/',
    github: 'https://github.com/adel-kd/forumFront',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#2563eb',
  },
  {
    id: '03',
    name: 'AGRICA',
    subtitle: 'AI-Powered Agriculture',
    description:
      'AI-driven agricultural platform connecting African farmers and buyers with voice, web, and mobile tech. Works online and offline, powered by Gemini 3 API with RBAC.',
    tags: ['MERN', 'Gemini AI', 'RBAC', 'Mobile'],
    live: 'https://agrica-project.vercel.app/',
    github: 'https://github.com/adel-kd/agrica-project',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#16a34a',
  },
  {
    id: '04',
    name: 'ASC',
    subtitle: 'AI Study Companion',
    description:
      'Intelligent learning assistant that helps students study smarter with AI-powered summaries, quizzes, and personalized learning support using Gemini.',
    tags: ['React', 'Gemini AI', 'Education', 'UX'],
    live: 'https://asc-gemini.vercel.app/',
    github: 'https://github.com/habibi-code/ASC',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#0891b2',
  },
  {
    id: '05',
    name: 'ADU FOOD',
    subtitle: 'Food Delivery Platform',
    description:
      'Full-stack delivery ecosystem with real-time rating & comments, flexible ordering, personal profiles, admin analytics dashboards, and integrated rating systems.',
    tags: ['MERN', 'Real-time', 'Dashboard', 'Full-Stack'],
    live: 'https://adu-food.vercel.app/',
    github: null,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#dc2626',
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

      {/* Featured project (first, large) */}
      <div className="mb-8">
        <ProjectCardLarge project={projects[0]} />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(1).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCardLarge({ project }: { project: typeof projects[0] }) {
  return (
    <div className="project-card group relative overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] rounded-sm">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent lg:hidden" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-[#e85d04] tracking-widest">{project.id}</span>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-1">{project.name}</h3>
            <p className="font-mono text-xs text-[#666] mb-4 tracking-wide">{project.subtitle}</p>
            <p className="text-[#888] text-sm leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((t) => (
                <span key={t} className="skill-tag font-mono text-[10px] px-2 py-1 border border-[#2a2a2a] text-[#666] tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white border border-white px-4 py-2 text-xs font-mono tracking-wider hover:bg-white hover:text-black transition-all"
            >
              LIVE DEMO <ExternalLink size={12} />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-xs font-mono tracking-wider"
              >
                <Github size={14} /> SOURCE
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="project-card group relative overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] rounded-sm flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />

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
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#e85d04] text-xs font-mono tracking-wider hover:underline"
          >
            VIEW LIVE <ExternalLink size={11} />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#555] hover:text-white text-xs font-mono tracking-wider transition-colors"
            >
              <Github size={12} /> GITHUB
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
