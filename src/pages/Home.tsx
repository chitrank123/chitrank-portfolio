import { motion } from 'framer-motion';
import { Terminal, ArrowRight, BrainCircuit, Server, Zap, Github, Linkedin, Mail, Cpu } from 'lucide-react';
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
      {/* 1. HERO SECTION (Upgraded) */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 text-blue-600 font-mono text-sm uppercase tracking-widest bg-blue-50 w-fit px-4 py-2 rounded-full border border-blue-100">
            <Terminal size={16} />
            <span>Chitrank Tak • Software Engineer</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Agentic AI</span> & <br />
            Scalable Architectures.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            I am a Full-Stack AI Engineer specializing in orchestrating Multi-Agent workflows, optimizing RAG pipelines, and deploying high-performance microservices. 
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link to="/projects" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all hover:gap-3">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link to="/experience" className="flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-colors">
              Read My Resume
            </Link>
          </motion.div>

          {/* Social Links Sub-bar */}
          <motion.div variants={itemVariants} className="flex gap-6 mt-12 pt-8 border-t border-slate-200">
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

      {/* 2. IMPACT STATS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center md:text-left px-4">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">3.5+</h3>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">Years Experience</p>
            </div>
            <div className="text-center md:text-left px-4">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">40%</h3>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">Cloud Cost Reduction</p>
            </div>
            <div className="text-center md:text-left px-4">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">&lt;1s</h3>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">LLM Inference Latency</p>
            </div>
            <div className="text-center md:text-left px-4">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">2</h3>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">Production AI Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE EXPERTISE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Engineering Focus</h2>
          <p className="text-slate-600 text-lg max-w-2xl">Bridging the gap between bleeding-edge AI models and robust, production-ready backend systems.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
            <BrainCircuit className="text-blue-600 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Agentic AI & RAG</h3>
            <p className="text-slate-600 leading-relaxed">
              Designing multi-agent workflows using LangGraph, dynamic context injection, and structured LLM outputs to solve complex reasoning tasks.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-colors">
            <Server className="text-indigo-600 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Backend Architecture</h3>
            <p className="text-slate-600 leading-relaxed">
              Building low-latency, containerized microservices with FastAPI and Django, orchestrated via Docker and backed by PostgreSQL and MongoDB.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-colors">
            <Zap className="text-emerald-600 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Optimization</h3>
            <p className="text-slate-600 leading-relaxed">
              Deploying on AWS (EC2, Lambda, S3) with a focus on resource auditing, right-sizing, and cost-effective scaling strategies.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECT SPOTLIGHT (Dark Mode Section) */}
      <section className="bg-slate-900 py-24 px-6 text-white my-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 text-blue-400 font-mono text-sm uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Featured Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Interviewer.io</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                A full-stack SaaS platform featuring a full-duplex voice pipeline and Retrieval-Augmented Generation (RAG) to conduct dynamic, real-time technical mock interviews based entirely on the user's uploaded PDF resume.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {['Next.js', 'FastAPI', 'OpenAI Whisper', 'Edge TTS', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <Link to="/projects" className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
                View Architecture Deep-Dive <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Mockup / Abstract Visual Representation */}
            <div className="flex-1 w-full bg-slate-800/50 rounded-2xl border border-slate-700 p-8 aspect-video flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="text-slate-500 font-mono text-center z-10">
                 <Cpu size={48} className="mx-auto mb-4 opacity-50" />
                 <p className="text-sm">Real-Time Voice Pipeline Architecture</p>
                 <p className="text-xs mt-2 text-slate-600">Dynamic Docker Session Management</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;