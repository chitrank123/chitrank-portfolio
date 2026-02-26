import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

function App() {
  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Controls the smoothness/speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-900 cursor-none md:cursor-auto">
        {/* We inject the custom cursor here */}
        <CustomCursor /> 
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;