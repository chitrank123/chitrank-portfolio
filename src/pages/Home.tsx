import { motion } from 'framer-motion';
import { Terminal, ArrowRight, BrainCircuit, Server, Zap, Github, Linkedin, Mail, Cpu, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation variants for smooth staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Mobile Optimized) */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 text-blue-600 font-mono text-xs md:text-sm uppercase tracking-widest bg-blue-50 w-fit px-3 md:px-4 py-2 rounded-full border border-blue-100">
            <Terminal size={14} className="md:w-4 md:h-4" />
            <span>Chitrank Tak • Software Engineer</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Agentic AI</span> & <br />
            Scalable Architectures.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            I am a Full-Stack AI Engineer specializing in orchestrating Multi-Agent workflows, optimizing RAG pipelines, and deploying high-performance microservices. 
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link to="/projects" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all hover:gap-3">
              View My Work <ArrowRight size={18} />
            </Link>
            {/* Download Resume Button */}
            <a href="/resume.pdf" download="Chitrank_Tak_Resume.pdf" className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-colors">
              <Download size={18} className="text-blue-600" /> Download Resume
            </a>
          </motion.div>

          {/* Social Links Sub-bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 mt-12 pt-8 border-t border-slate-200">
            <a href="https://github.com/chitrank123" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-medium">
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/chitrank-tak" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-medium">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:cttak365@gmail.com" className="text-slate-500 hover:text-red-500 transition-colors flex items-center gap-2 text-sm font-medium">
              <Mail size={20} /> Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. IMPACT STATS (Mobile Optimized Grid) */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-slate-100">
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">3.5+</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-medium">Years Experience</p>
            </div>
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">40%</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-medium">Cloud Cost Reduction</p>
            </div>
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">&lt;1s</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-medium">LLM Inference Latency</p>
            </div>
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">2</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-medium">Production AI Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE EXPERTISE */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Engineering Focus</h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto md:mx-0">Bridging the gap between bleeding-edge AI models and robust, production-ready backend systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
            <BrainCircuit className="text-blue-600 mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">Agentic AI & RAG</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Designing multi-agent workflows using LangGraph, dynamic context injection, and structured LLM outputs to solve complex reasoning tasks.
            </p>
          </div>
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-colors">
            <Server className="text-indigo-600 mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">Backend Architecture</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Building low-latency, containerized microservices with FastAPI and Django, orchestrated via Docker and backed by PostgreSQL and MongoDB.
            </p>
          </div>
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-colors">
            <Zap className="text-emerald-600 mb-4 md:mb-6 w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">Cloud Optimization</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Deploying on AWS (EC2, Lambda, S3) with a focus on resource auditing, right-sizing, and cost-effective scaling strategies.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECT SPOTLIGHT (Dark Mode Section) */}
      <section className="bg-slate-900 py-16 md:py-24 px-6 text-white my-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="flex-1 w-full text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-blue-400 font-mono text-sm uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Interviewer.io</h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                A full-stack SaaS platform featuring a full-duplex voice pipeline and Retrieval-Augmented Generation (RAG) to conduct dynamic, real-time technical mock interviews based entirely on the user's uploaded PDF resume.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-8">
                {['Next.js', 'FastAPI', 'OpenAI Whisper', 'Edge TTS', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 text-xs md:text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <Link to="/projects" className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
                View Architecture Deep-Dive <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Mockup / Abstract Visual Representation */}
            <div className="flex-1 w-full bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8 aspect-square md:aspect-video flex items-center justify-center relative overflow-hidden group mt-8 md:mt-0">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="text-slate-500 font-mono text-center z-10">
                 <Cpu size={40} className="md:w-12 md:h-12 mx-auto mb-4 opacity-50" />
                 <p className="text-xs md:text-sm">Real-Time Voice Pipeline Architecture</p>
                 <p className="text-[10px] md:text-xs mt-2 text-slate-600">Dynamic Docker Session Management</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;