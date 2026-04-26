import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800/60 pb-12">
          
          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-3xl font-extrabold tracking-tighter text-white mb-4">
              CT<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-sm md:text-base">
              Full-Stack AI Solutions Engineer specializing in Agentic workflows, RAG pipelines, and highly scalable cloud infrastructure.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 w-fit px-3 py-1.5 rounded-full border border-emerald-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to new opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wide">Navigation</h3>
            <ul className="space-y-3 font-medium text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1 group">Home <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1 group">About & Skills <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
              <li><Link to="/experience" className="hover:text-blue-400 transition-colors flex items-center gap-1 group">Experience <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors flex items-center gap-1 group">Projects <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wide">Connect</h3>
            <ul className="space-y-3 font-medium text-sm">
              <li>
                <a href="https://github.com/chitrank123" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-slate-700 transition-colors"><Github size={16} /></div> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/chitrank-tak" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                  <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-blue-900/50 group-hover:text-blue-400 transition-colors"><Linkedin size={16} /></div> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:cttak365@gmail.com" className="flex items-center gap-3 hover:text-red-400 transition-colors group">
                  <div className="p-1.5 rounded-md bg-slate-800 group-hover:bg-red-900/50 group-hover:text-red-400 transition-colors"><Mail size={16} /></div> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-medium text-slate-500">
          <p>© {currentYear} Chitrank Tak. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React & <span className="text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">Agentic Precision</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;