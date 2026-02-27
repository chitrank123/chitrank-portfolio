import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  // Close menu when route changes
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-50/90 backdrop-blur-md z-[100] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={handleLinkClick} className="text-xl font-bold tracking-tighter text-slate-900 z-50">
          CT<span className="text-blue-600">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline"
                  className="h-0.5 bg-blue-600 w-full absolute -bottom-[20px]" 
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-50 p-2 -mr-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden flex flex-col py-4 px-6 gap-4"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={handleLinkClick}
                className={`text-lg font-semibold py-2 border-b border-slate-50 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;