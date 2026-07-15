import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AgenticChat from './components/AgenticChat';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-paper min-h-screen font-sans text-paper-ink md:cursor-none">
        <CustomCursor />

        <div className="lg:grid lg:grid-cols-[360px_1fr] min-h-screen">
          <Sidebar />

          <div className="flex flex-col min-w-0">
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
        </div>

        <AgenticChat />
      </div>
    </Router>
  );
}

export default App;
