import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  // Close menu when route changes
  const handleLinkClick = () => setIsOpen(false);

  // Add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-[100] px-4 sm:px-6 pt-4 pointer-events-none">
      <nav 
        className={`max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-full pointer-events-auto transition-all duration-300 ${
          scrolled ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3' : 'shadow-sm py-4'
        }`}
      >
        <div className="px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="text-xl font-extrabold tracking-tighter text-slate-900 z-50 flex items-center">
            CT<span className="text-blue-600">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative text-sm font-bold transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="h-1 bg-blue-600 w-1/2 mx-auto absolute -bottom-[6px] left-0 right-0 rounded-t-full" 
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a 
              href="/ChitrankTakCvUpdated.pdf" 
              download="Chitrank_Tak_Resume.pdf"
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-500/25 group"
            >
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" /> 
              Resume
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden z-50 p-1 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl md:hidden flex flex-col p-6 gap-2 pointer-events-auto"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={handleLinkClick}
                className={`text-lg font-bold py-3 px-4 rounded-xl transition-colors ${
                  location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a 
                href="/ChitrankTakCvUpdated.pdf" 
                download="Chitrank_Tak_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;