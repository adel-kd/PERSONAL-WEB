import { ArrowLeft, ExternalLink, Github, CheckCircle, Code, Database, CreditCard, Users, BarChart3, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetailAdufood() {
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
            <span className="font-mono text-[10px] text-[#dc2626] tracking-widest">// PROJECT_02</span>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-2">ADU FOOD</h1>
          <p className="font-mono text-sm text-[#666] tracking-wide">Food Delivery Platform for Ethiopia</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Video Section */}
        <div className="mb-16">
          <div className="relative rounded-sm overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="aspect-video">
              <video
                controls
                poster="https://res.cloudinary.com/ddntf1cdt/image/upload/v1783194691/Screenshot_from_2026-07-04_22-44-15_jp1xs9.png"
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/ddntf1cdt/video/upload/v1783115897/Screencast_from_2026-07-03_16-34-57_m6ogrp.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://adu-food.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white border border-white px-6 py-3 text-sm font-mono tracking-wider hover:bg-white hover:text-black transition-all"
            >
              LIVE DEMO <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/adel-kd/AduFood"
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
              A full-stack MERN food delivery platform built for the Ethiopian market, featuring secure authentication, food ordering, favorites, cart management, address handling, admin controls, and Chapa payment integration.
            </p>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm mt-8">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Smartphone size={18} className="text-[#dc2626]" />
                Target Market
              </h3>
              <p className="text-[#888]">
                Built specifically for Ethiopian food delivery businesses and local restaurant ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// FEATURES</h2>
          
          {/* User Features */}
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm mb-6">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Users size={20} className="text-[#dc2626]" />
              User Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> User registration and login (JWT authentication)</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Browse food listings</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Search and filter foods</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Add/remove favorites</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Add/update cart items</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Save multiple delivery addresses</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Checkout with secure payment via Chapa</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> View order history</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Ratings and reviews</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Promo code support</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Responsive mobile-friendly UI</div>
            </div>
          </div>

          {/* Admin Features */}
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm mb-6">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <BarChart3 size={20} className="text-[#dc2626]" />
              Admin Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Add new food items</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Edit food details</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Delete foods</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Manage orders</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> View analytics dashboard</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Track revenue and top-selling foods</div>
            </div>
          </div>

          {/* Payment System */}
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <CreditCard size={20} className="text-[#dc2626]" />
              Payment System
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Chapa payment gateway integration</div>
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Transaction verification</div>
              <div className="bg-[#dc2626]/10 border border-[#dc2626]/30 p-4 rounded-sm mt-6">
                <p className="text-[#dc2626] text-sm font-mono">Secure Ethiopian payment integration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Flow */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// PAYMENT FLOW</h2>
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm">
            <ol className="space-y-4 text-[#888]">
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">01.</span>
                <span>User selects delivery address</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">02.</span>
                <span>User proceeds to checkout</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">03.</span>
                <span>Backend calculates total securely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">04.</span>
                <span>Payment initializes via Chapa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">05.</span>
                <span>User completes payment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">06.</span>
                <span>Chapa redirects back with transaction reference</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">07.</span>
                <span>Payment gets verified</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">08.</span>
                <span>Order is created</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#dc2626] font-mono text-sm">09.</span>
                <span>Cart is cleared</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// TECH STACK</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Code size={18} className="text-[#dc2626]" />
                Frontend
              </h3>
              <ul className="space-y-2 text-[#888]">
                <li>• React</li>
                <li>• Vite</li>
                <li>• Tailwind CSS</li>
                <li>• Axios</li>
                <li>• React Router</li>
              </ul>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Database size={18} className="text-[#dc2626]" />
                Backend
              </h3>
              <ul className="space-y-2 text-[#888]">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB</li>
                <li>• Mongoose</li>
                <li>• JWT Authentication</li>
              </ul>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <CreditCard size={18} className="text-[#dc2626]" />
                Payment
              </h3>
              <ul className="space-y-2 text-[#888]">
                <li>• Chapa API</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Structure */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// PROJECT STRUCTURE</h2>
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
            <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
              <code>AduFood/<br />├── client/<br />│   ├── src/<br />│   │   ├── api/<br />│   │   ├── components/<br />│   │   ├── contexts/<br />│   │   ├── pages/<br />├── server/<br />│   ├── controllers/<br />│   ├── middleware/<br />│   ├── models/<br />│   ├── routes/<br />│   ├── services/<br />│   └── server.js</code>
            </pre>
          </div>
        </div>

        {/* Installation */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// INSTALLATION</h2>
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
            <h3 className="text-white font-semibold mb-4">Clone repository</h3>
            <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
              <code>git clone https://github.com/adel-kd/AduFood.git<br />cd AduFood</code>
            </pre>
            
            <h3 className="text-white font-semibold mb-4 mt-6">Install dependencies</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#666] font-mono text-xs mb-2">Frontend:</p>
                <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
                  <code>cd client<br />npm install</code>
                </pre>
              </div>
              <div>
                <p className="text-[#666] font-mono text-xs mb-2">Backend:</p>
                <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
                  <code>cd server<br />npm install</code>
                </pre>
              </div>
            </div>

            <h3 className="text-white font-semibold mb-4 mt-6">Environment Variables</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#666] font-mono text-xs mb-2">Backend (.env):</p>
                <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
                  <code>PORT=5000<br />MONGO_URI=your_mongodb_connection<br />JWT_SECRET=your_secret<br />CHAPA_SECRET_KEY=your_chapa_secret</code>
                </pre>
              </div>
              <div>
                <p className="text-[#666] font-mono text-xs mb-2">Frontend (.env):</p>
                <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
                  <code>VITE_API_URL=http://localhost:5000</code>
                </pre>
              </div>
            </div>

            <h3 className="text-white font-semibold mb-4 mt-6">Running the Project</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#666] font-mono text-xs mb-2">Backend:</p>
                <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
                  <code>cd server<br />npm run dev</code>
                </pre>
              </div>
              <div>
                <p className="text-[#666] font-mono text-xs mb-2">Frontend:</p>
                <pre className="bg-[#1a1a1a] p-4 rounded-sm overflow-x-auto text-sm text-[#888] font-mono">
                  <code>cd client<br />npm run dev</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// SECURITY</h2>
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 rounded-sm">
            <ul className="space-y-3 text-[#888]">
              <li className="flex items-center gap-2"><Shield size={16} className="text-[#dc2626]" /> JWT protected routes</li>
              <li className="flex items-center gap-2"><Shield size={16} className="text-[#dc2626]" /> Admin-only middleware</li>
              <li className="flex items-center gap-2"><Shield size={16} className="text-[#dc2626]" /> Server-side payment verification</li>
              <li className="flex items-center gap-2"><Shield size={16} className="text-[#dc2626]" /> Secure transaction tracking</li>
            </ul>
          </div>
        </div>

        {/* Future Improvements */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// FUTURE IMPROVEMENTS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Real-time order tracking</div>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Driver management</div>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Push notifications</div>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> AI food recommendations</div>
            </div>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-6 rounded-sm">
              <div className="flex items-center gap-2 text-[#888]"><CheckCircle size={14} className="text-[#dc2626]" /> Multi-vendor support</div>
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-[#555] tracking-widest uppercase mb-6">// AUTHOR</h2>
          <div className="bg-gradient-to-r from-[#dc2626]/10 to-transparent border-l-4 border-[#dc2626] p-8 rounded-sm">
            <p className="text-white text-xl font-semibold mb-4">Adel Kedir</p>
            <div className="flex items-center gap-6 text-[#888]">
              <a href="https://github.com/adel-kd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Github size={16} /> github.com/adel-kd
              </a>
              <a href="https://www.linkedin.com/in/adel-kedir971/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                linkedin.com/in/adel-kedir971
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
