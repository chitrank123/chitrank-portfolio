import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AgenticChat from './components/AgenticChat';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-900 md:cursor-none">
        {/* Custom cursor stays, but the heavy scrolling is gone */}
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
        <AgenticChat />
      </div>
    </Router>
  );
}

export default App;