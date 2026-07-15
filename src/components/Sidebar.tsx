import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';

const NAV = [
  { n: '01', name: 'Home', path: '/' },
  { n: '02', name: 'About', path: '/about' },
  { n: '03', name: 'Experience', path: '/experience' },
  { n: '04', name: 'Projects', path: '/projects' },
];

const TICKER_LINES = [
  'building: voice-by-concretio/aria-summarize.ts',
  'review: healthcare-mcp/appeal-service.cls',
  'status: 4+ yrs, shipping since 2022',
];

const SidebarInner = ({ onNavigate }: { onNavigate?: () => void }) => {
  const location = useLocation();

  return (
    <>
      <div>
        <h1 className="font-serif font-semibold text-[38px] leading-[1.05] mb-2.5 text-panel-text text-balance">Chitrank Tak</h1>
        <p className="text-sm font-bold text-accent uppercase tracking-wide mb-1">Senior AI Solutions Engineer</p>
        <p className="text-[13px] text-panel-dim mb-7">Concretio &middot; Jaipur, India</p>
      </div>

      <div className="h-10 overflow-hidden relative mb-8">
        {TICKER_LINES.map((line, i) => (
          <div
            key={i}
            className="ticker-line absolute inset-0 font-mono text-[11px] leading-snug text-panel-dim flex items-start gap-2 opacity-0"
          >
            <span className="w-[5px] h-[5px] mt-1 rounded-full bg-accent shadow-[0_0_0_3px_rgba(184,134,63,0.25)] shrink-0" />
            <span>{line}</span>
          </div>
        ))}
      </div>

      <nav className="flex flex-col gap-0.5 mb-auto">
        {NAV.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className={`flex items-center gap-3 py-2.5 text-sm font-bold transition-colors ${
                active ? 'text-panel-text' : 'text-panel-dim hover:text-panel-text'
              }`}
            >
              <span className={`font-mono text-[11px] ${active ? 'text-accent' : 'text-panel-line'}`}>{item.n}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-7 font-mono">
        <div className="flex justify-between text-[10px] text-panel-dim py-1.5 border-t border-panel-line">
          <span>route</span><em className="text-accent not-italic">groq/llama-70b</em>
        </div>
        <div className="flex justify-between text-[10px] text-panel-dim py-1.5 border-t border-panel-line">
          <span>latency</span><em className="text-accent not-italic">312ms</em>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-5 mt-5 border-t border-panel-line">
        <a href="https://github.com/chitrank123" target="_blank" rel="noreferrer" className="text-panel-dim hover:text-accent transition-colors"><Github size={16} /></a>
        <a href="https://linkedin.com/in/chitrank-tak" target="_blank" rel="noreferrer" className="text-panel-dim hover:text-accent transition-colors"><Linkedin size={16} /></a>
        <a href="mailto:cttak365@gmail.com" className="text-panel-dim hover:text-accent transition-colors"><Mail size={16} /></a>
        <a
          href="/resume.pdf"
          download="Chitrank_Tak_Resume.pdf"
          className="ml-auto flex items-center gap-1.5 text-[11px] font-mono font-semibold text-panel-dim hover:text-accent transition-colors"
        >
          <Download size={13} /> Resume
        </a>
      </div>
    </>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:flex sticky top-0 h-screen w-full flex-col bg-panel px-11 py-14 overflow-y-auto">
        <SidebarInner />
      </aside>

      {/* Mobile/tablet: top bar with expandable menu */}
      <div className="lg:hidden bg-panel px-6 py-5 relative z-50">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif font-semibold text-2xl text-panel-text">Chitrank Tak</Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-panel-text p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 flex flex-col">
                <SidebarInner onNavigate={() => setIsOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Sidebar;
