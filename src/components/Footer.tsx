import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white mb-4">
              CT<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              Full-Stack AI Engineer specializing in Agentic workflows, RAG pipelines, and highly scalable cloud infrastructures.
            </p>
            <div className="flex items-center gap-2 text-sm font-mono text-slate-500">
              <Terminal size={16} /> Open to new opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About & Skills</Link></li>
              <li><Link to="/experience" className="hover:text-blue-400 transition-colors">Experience</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/chitrank123" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Github size={18} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/chitrank-tak" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:cttak365@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={18} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Chitrank Tak. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind & <span className="text-blue-500">Agentic Precision</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;