import { ArrowLeft, ExternalLink, Github, Play, CheckCircle, Code, Database, Cpu, Smartphone, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetailAgrica() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <div className="border-b border-[#111] py-6">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#666] hover:text-white transition-colors font-mono text-xs tracking-wider mb-6"
          >
            <ArrowLeft size={14} /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] text-[#16a34a] tracking-widest">// PROJECT_01</span>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-2">AGRICA</h1>
          <p className="font-mono text-sm text-[#666] tracking-wide">AI-Powered Agriculture for Africa</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Video Section */}
        <div className="mb-16">
          <div className="relative rounded-sm overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/80sBQy6GRno"
                title="AGRICA Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://agricaethio.netlify.app/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white border border-white px-6 py-3 text-sm font-mono tracking-wider hover:bg-white hover:text-black transition-all"
            >
              LIVE DEMO <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/adel-kd/agrica-project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-sm font-mono tracking-wider"
            >
              <Github size={16} /> SOURCE CODE
            </a>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// OVERVIEW</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-[#888] text-lg leading-relaxed mb-6">
              AGRICA is an AI-driven agricultural platform connecting farmers and buyers while providing agronomy support through web, mobile, and future offline voice systems.
            </p>
            <p className="text-[#888] text-lg leading-relaxed mb-6">
              This version is a <span className="text-[#16a34a] font-semibold">demo for AGRICA Ethiopia</span>, built with Amharic support, and designed as the foundation for expansion across Africa.
            </p>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm mt-8">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Globe size={18} className="text-[#16a34a]" />
                Future Vision
              </h3>
              <ul className="space-y-2 text-[#888]">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> AGRICA Ethiopia</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> AGRICA Kenya</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> AGRICA Tanzania</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> AGRICA Nigeria</li>
              </ul>
              <p className="text-[#666] text-sm mt-4">Each localized for language, crops, and market systems.</p>
            </div>
          </div>
        </div>

        {/* Inspiration */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// INSPIRATION</h2>
          <p className="text-[#888] text-lg leading-relaxed mb-6">
            Millions of African farmers lack access to professional agronomists, fair marketplaces, reliable crop diagnosis, and modern agricultural tools. Most agri-tech platforms assume internet and smartphones.
          </p>
          <p className="text-white text-xl font-semibold">
            AGRICA is built to change that.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// CURRENT FEATURES</h2>
          
          {/* AI Agronomist */}
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm mb-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Cpu size={20} className="text-[#16a34a]" />
              AI Agronomist
            </h3>
            <p className="text-[#888] mb-4">Farmers can interact with an AI agronomist through:</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-[#666]"><CheckCircle size={14} className="text-[#16a34a]" /> Text</div>
              <div className="flex items-center gap-2 text-[#666]"><CheckCircle size={14} className="text-[#16a34a]" /> Voice</div>
            </div>
            <p className="text-[#888] mb-4">It helps with:</p>
            <ul className="space-y-2 text-[#666] mb-6">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Crop disease detection</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Soil issues</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Farming advice</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Best practices</li>
            </ul>
            <div className="bg-[#16a34a]/10 border border-[#16a34a]/30 p-4 rounded-sm">
              <p className="text-[#16a34a] text-sm font-mono">Current demo supports Ethiopian farmers with Amharic language, powered by Google Gemini API.</p>
            </div>
          </div>

          {/* Marketplace */}
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm mb-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Globe size={20} className="text-[#16a34a]" />
              Marketplace
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#666] font-mono text-xs mb-3">FARMERS CAN:</h4>
                <ul className="space-y-2 text-[#888]">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Create crop listings</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Add crop images</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Set price and quantity</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Manage listings</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#666] font-mono text-xs mb-3">BUYERS CAN:</h4>
                <ul className="space-y-2 text-[#888]">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Browse crops</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> View listings</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Contact farmers directly</li>
                </ul>
              </div>
            </div>
            <p className="text-[#16a34a] mt-6 font-semibold">This reduces middlemen and creates fairer trade.</p>
          </div>

          {/* Verified Crop Badge */}
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Shield size={20} className="text-[#16a34a]" />
              Verified Crop Badge
            </h3>
            <p className="text-[#888] mb-4">Farmers can optionally upload up to <span className="text-white font-semibold">3 crop images</span> when listing.</p>
            <p className="text-[#888] mb-4">AGRICA uses AI to review:</p>
            <ul className="space-y-2 text-[#666] mb-6">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Crop authenticity</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Crop quality</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#16a34a]" /> Listing accuracy</li>
            </ul>
            <div className="bg-[#16a34a]/10 border border-[#16a34a]/30 p-4 rounded-sm">
              <p className="text-[#16a34a] font-semibold mb-2">If approved, listing gets a Verified Badge</p>
              <ul className="space-y-1 text-[#888] text-sm">
                <li>• Builds buyer trust</li>
                <li>• Highlights quality produce</li>
                <li>• Reduces fake listings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Features */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// FUTURE FEATURES</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Smartphone size={18} className="text-[#16a34a]" />
                Offline IVR Agronomist
              </h3>
              <p className="text-[#888] text-sm">Farmers will call AGRICA using basic phones and get farming advice in local languages.</p>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Play size={18} className="text-[#16a34a]" />
                Voice-Based Crop Selling
              </h3>
              <p className="text-[#888] text-sm">Farmers will create listings entirely through voice calls without internet.</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// TECH STACK</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Code size={18} className="text-[#16a34a]" />
                Frontend
              </h3>
              <ul className="space-y-2 text-[#888]">
                <li>• React</li>
                <li>• Axios</li>
              </ul>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Database size={18} className="text-[#16a34a]" />
                Backend
              </h3>
              <ul className="space-y-2 text-[#888]">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB</li>
              </ul>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-[#16a34a]" />
                AI
              </h3>
              <ul className="space-y-2 text-[#888]">
                <li>• Google Gemini API</li>
                <li>• Speech-to-Text</li>
                <li>• Text-to-Speech</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// INSTALLATION</h2>
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
            <h3 className="text-white font-semibold mb-4">Clone repository</h3>
            <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
              <code>git clone https://github.com/adel-kd/agri-project.git<br />cd AGRICA</code>
            </pre>
            
            <h3 className="text-white font-semibold mb-4 mt-6">Backend</h3>
            <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
              <code>cd backend<br />npm install<br />npm start</code>
            </pre>
            
            <h3 className="text-white font-semibold mb-4 mt-6">Frontend</h3>
            <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
              <code>cd frontend<br />npm install<br />npm run dev</code>
            </pre>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// VISION</h2>
          <div className="bg-gradient-to-r from-[#16a34a]/10 to-transparent border-l-4 border-[#16a34a] p-8 rounded-sm">
            <p className="text-white text-xl font-semibold mb-4">
              To build Africa's agricultural intelligence infrastructure.
            </p>
            <p className="text-[#888] text-lg leading-relaxed">
              Starting with Ethiopia. Expanding across Africa. Making farming smarter, fairer, and accessible for every farmer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
