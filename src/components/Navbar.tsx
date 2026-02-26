import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }, // Added this line
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-50/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900">
          CT<span className="text-blue-600">.</span>
        </Link>
        
        <div className="flex gap-6">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline"
                  className="h-0.5 bg-blue-600 w-full absolute bottom-[-4px]" 
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;