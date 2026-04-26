import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, ArrowRight, BrainCircuit, Server, Github, 
  Linkedin, Mail, Cpu, Download, Code, Database, Cloud, LayoutTemplate
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // ── Rotating Text Logic ──
  const [titleIndex, setTitleIndex] = useState(0);
  const heroTitles = [
    "Agentic AI.",
    "Data Pipelines.",
    "Cloud Infrastructure.",
    "RAG Systems.",
    "Backend Microservices."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroTitles.length);
    }, 3000); // Rotates every 3 seconds
    return () => clearInterval(interval);
  }, [heroTitles.length]);

  // ── Animation Variants ──
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // State for Interactive Skills Dashboard
  const [activeCategory, setActiveCategory] = useState('ai');

  // Categorized Skills Data
  const skillsData = {
    'ai': {
      title: 'AI / LLM / ML',
      icon: <BrainCircuit size={24} className="text-purple-400" />,
      stats: '12 technologies · 8 expert-level',
      skills: [
        { name: 'LangGraph', level: 95 },
        { name: 'RAG Pipelines', level: 92 },
        { name: 'Groq API (Llama-3)', level: 90 },
        { name: 'LangChain', level: 88 },
        { name: 'Multi-Agent Systems', level: 85 },
        { name: 'OpenAI Whisper (STT)', level: 85 },
        { name: 'Edge TTS', level: 82 },
        { name: 'Vector Embeddings', level: 80 }
      ]
    },
    'backend': {
      title: 'Backend Engineering',
      icon: <Server size={24} className="text-blue-400" />,
      stats: '10 technologies · 7 expert-level',
      skills: [
        { name: 'Python (Async/Await)', level: 95 },
        { name: 'FastAPI', level: 92 },
        { name: 'Django', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'WebSockets (Socket.io)', level: 82 },
        { name: 'Microservices', level: 80 }
      ]
    },
    'data': {
      title: 'Databases & Data',
      icon: <Database size={24} className="text-emerald-400" />,
      stats: '8 technologies · 5 expert-level',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'pgvector (Hybrid Search)', level: 88 },
        { name: 'MongoDB (Beanie ODM)', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'Sequelize ORM', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Pandas', level: 75 },
        { name: 'Data Normalization', level: 90 }
      ]
    },
    'cloud': {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} className="text-sky-400" />,
      stats: '9 technologies · 6 expert-level',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 88 },
        { name: 'Docker / Docker Compose', level: 90 },
        { name: 'Nginx & Reverse Proxies', level: 85 },
        { name: 'Linux / SSH Configs', level: 85 },
        { name: 'CloudFront CDN', level: 80 },
        { name: 'AWS Cost Optimization', level: 90 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'Firebase Hosting', level: 80 }
      ]
    },
    'frontend': {
      title: 'Frontend & Mobile',
      icon: <LayoutTemplate size={24} className="text-pink-400" />,
      stats: '8 technologies · 5 expert-level',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'Streamlit', level: 88 },
        { name: 'React Native', level: 75 },
        { name: 'Framer Motion', level: 70 },
        { name: 'Clerk Auth', level: 85 }
      ]
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl relative z-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 text-blue-600 font-mono text-xs md:text-sm uppercase tracking-widest bg-blue-50/80 backdrop-blur-sm w-fit px-3 md:px-4 py-2 rounded-full border border-blue-200 shadow-sm">
            <Terminal size={14} className="md:w-4 md:h-4" />
            <span>Chitrank Tak • Senior AI Engineer</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            Building Scalable <br className="hidden sm:block" />
            Architectures & <br />
            {/* The absolute positioning here prevents layout shifts completely */}
            <span className="relative block h-[1.3em] w-full overflow-hidden mt-1">
              <AnimatePresence>
                <motion.span
                  key={titleIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 whitespace-nowrap pb-2"
                >
                  {heroTitles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 md:mb-10 leading-relaxed font-medium">
            I specialize in orchestrating Multi-Agent workflows, optimizing RAG pipelines, and deploying high-performance microservices for enterprise environments. 
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link to="/projects" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all hover:gap-3 shadow-lg hover:shadow-blue-500/30">
              Explore My Work <ArrowRight size={18} />
            </Link>
            <a href="/ChitrankTakCvUpdated.pdf" download="Chitrank_Tak_Resume.pdf" className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm">
              <Download size={18} /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 mt-12 pt-8 border-t border-slate-200/60">
            <a href="https://github.com/chitrank123" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-bold"><Github size={20} /> GitHub</a>
            <a href="https://linkedin.com/in/chitrank-tak" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-bold"><Linkedin size={20} /> LinkedIn</a>
            <a href="mailto:cttak365@gmail.com" className="text-slate-500 hover:text-red-500 transition-colors flex items-center gap-2 text-sm font-bold"><Mail size={20} /> Contact</a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. IMPACT STATS */}
      <section className="border-y border-slate-200 bg-white relative z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-slate-100">
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">3.5+</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-bold">Years Experience</p>
            </div>
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">40%</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-bold">Cloud Cost Reduction</p>
            </div>
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">&lt;1s</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-bold">LLM Inference Latency</p>
            </div>
            <div className="text-center md:text-left md:px-4 py-4 md:py-0">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">2</h3>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-wider font-bold">Production AI Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK BIO */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-indigo-600 font-mono text-sm uppercase tracking-widest font-bold mb-4">
          <Code size={18} /> Behind the Code
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
          Bridging academic theory with enterprise-grade engineering.
        </h2>
        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
          <p>
            My approach to software engineering goes beyond writing functional code; it's about building resilient, cost-effective architectures. While currently advancing my theoretical foundation by pursuing an M.Tech in Computer Science, I spend my days engineering real-world solutions.
          </p>
          <p>
            Whether I am saving enterprise cloud costs on AWS, leading partner API integrations, or designing complex LangGraph state machines that process external government data, my goal is always to deliver systems that scale efficiently and solve actual business problems.
          </p>
        </div>
      </section>

      {/* 4. INTERACTIVE SKILLS DASHBOARD (THE CYBERPUNK UPGRADE) */}
      <section className="py-20 px-4 md:px-6 bg-[#0B0F19] border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
            <p className="text-slate-400 text-base md:text-lg">Interactive breakdown of my core competencies and toolchains.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Left Sidebar: Categories */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {Object.entries(skillsData).map(([key, data]) => {
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border ${
                      isActive 
                        ? 'bg-[#131B2F] border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.15)]' 
                        : 'bg-[#111827] border-slate-800 hover:border-slate-600 hover:bg-[#151e32]'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-purple-500/10' : 'bg-slate-800'}`}>
                      {data.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>{data.title}</h3>
                      <p className="text-xs text-slate-500 font-mono mt-1">{data.skills.length} core skills</p>
                    </div>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(147,51,234,0.8)]"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Panel: Skills Display */}
            <div className="w-full lg:w-2/3 bg-[#111827] border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-6">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      {skillsData[activeCategory as keyof typeof skillsData].icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-wide">
                        {skillsData[activeCategory as keyof typeof skillsData].title}
                      </h2>
                      <p className="text-sm text-slate-400 font-mono mt-1">
                        {skillsData[activeCategory as keyof typeof skillsData].stats}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                    {skillsData[activeCategory as keyof typeof skillsData].skills.map((skill, index) => (
                      <div key={index} className="w-full">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-sm font-semibold text-slate-300 font-mono">{skill.name}</span>
                          <span className="text-xs font-bold text-purple-400">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Track */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          {/* Animated Progress Fill */}
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)] relative"
                          >
                            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECT SPOTLIGHT (Dark Mode Section) */}
      <section className="bg-slate-900 py-20 md:py-32 px-6 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 w-full text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-blue-400 font-mono text-sm uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#60a5fa]"></span>
                Featured Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Interviewer.io</h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                A full-stack SaaS platform featuring a full-duplex voice pipeline and Retrieval-Augmented Generation (RAG) to conduct dynamic, real-time technical mock interviews based entirely on the user's uploaded PDF resume.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-10">
                {['Next.js', 'FastAPI', 'OpenAI Whisper', 'Edge TTS', 'Docker'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-slate-800 text-slate-200 border border-slate-700 text-xs md:text-sm font-bold rounded-full shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/25">
                View Architecture Deep-Dive <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex-1 w-full bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-2xl aspect-square md:aspect-video flex items-center justify-center relative overflow-hidden group mt-8 md:mt-0">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="text-slate-400 font-mono text-center z-10 relative">
                 <Cpu size={48} className="md:w-16 md:h-16 mx-auto mb-6 text-blue-400" />
                 <p className="text-sm md:text-base font-bold text-white mb-2">Real-Time Voice Pipeline</p>
                 <p className="text-xs md:text-sm mt-2 text-slate-500">Dynamic Docker Session Isolation</p>
               </div>
               <div className="absolute left-0 top-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
               <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Let's build something scalable.</h2>
          <p className="text-xl text-slate-600 mb-10">Currently open to discussions regarding AI Architecture, Data Integration, and Full-Stack engineering roles.</p>
          <a href="mailto:cttak365@gmail.com" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl hover:shadow-blue-500/30">
            <Mail size={22} /> Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;