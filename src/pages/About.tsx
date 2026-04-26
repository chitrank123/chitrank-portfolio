import { motion, type Variants } from 'framer-motion';
import { 
  MapPin, GraduationCap, Award, Lightbulb, Server, 
  ShieldCheck, Cpu, Code2, Rocket, Car, Film, 
  Gamepad2, Plane, Mic, BrainCircuit, Database
} from 'lucide-react';

const About = () => {
  // Animation variants correctly typed for TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    }
  };

  const timelineVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const engineeringPrinciples = [
    {
      title: "AI as a Utility, Not a Gimmick",
      description: "I don't just wrap LLM APIs. I build deterministic, stateful systems (like LangGraph state machines) that constrain AI to solve specific, highly-regulated business problems.",
      icon: <Lightbulb className="text-blue-500" size={24} />
    },
    {
      title: "Cost-Aware Architecture",
      description: "Writing functional code is the baseline; writing cost-effective code is the goal. I rigorously audit AWS infrastructure and optimize database queries to ensure scale doesn't break the bank.",
      icon: <Server className="text-emerald-500" size={24} />
    },
    {
      title: "Decoupled & Resilient",
      description: "Whether it's isolating concurrent AI voice sessions in dynamic Docker containers or setting up reverse proxies with Nginx, I design systems where localized failures never cascade.",
      icon: <ShieldCheck className="text-purple-500" size={24} />
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* ── 1. HERO & BIO ── */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-32">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start">
          
          {/* Profile Picture with Hover Effect */}
          <motion.div variants={itemVariants} className="w-72 h-[24rem] md:w-80 md:h-[28rem] lg:w-[26rem] lg:h-[32rem] shrink-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-200 relative group z-10">
            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="/profile-pic.jpg" 
              alt="Chitrank Tak" 
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Decorative background blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400 blur-[80px] opacity-30"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Architecting Intelligence. <br/> Building Scale.
            </h1>
            <div className="flex items-center gap-2 text-slate-700 font-bold mb-8 bg-blue-50 border border-blue-100 w-fit px-4 py-2 rounded-full text-sm shadow-sm">
              <MapPin size={16} className="text-blue-600" />
              Based in Jaipur, Rajasthan
            </div>
            
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                I am a Full-Stack AI Solutions Engineer specializing in high-performance backend infrastructure and intelligent Multi-Agent workflows. Over the past 3.5 years, my trajectory has taken me from optimizing core legacy database migrations to architecting and deploying end-to-end Generative AI enterprise solutions.
              </p>
              <p>
                My engineering philosophy is rooted in resilience and scale. I don't just write functional code; I build robust, cost-aware systems. Whether that means constructing self-correcting LangGraph state machines that automate complex insurance pipelines, or securing and rightsizing AWS cloud environments, my focus is always on delivering measurable business impact.
              </p>
              <p>
                Currently, I am pursuing my M.Tech in Computer Science, where I am diving deep into the bleeding edge of Voice AI and real-time autonomous agents. This unique intersection of academic research and rigorous enterprise engineering allows me to bring theoretical innovations directly into production environments.
              </p>
              <p>
                Ultimately, I am driven by the belief that AI should be a utility, not a gimmick. I thrive on solving hard architectural problems, mentoring peers, and continuously pushing the boundaries of what resilient cloud engineering and AI can achieve together.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── 2. CURRENT FOCUS (M.Tech Research) ── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="bg-gradient-to-br from-slate-900 to-[#0B0F19] rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-800 relative overflow-hidden group">
          {/* Animated glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="p-6 bg-slate-800/50 rounded-full border border-slate-700 shrink-0">
              <Mic className="text-purple-400 w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-purple-400 font-mono text-sm uppercase tracking-widest font-bold mb-3">
                <BrainCircuit size={16} /> Current Research Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Voice AI & Autonomous Agents</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                As part of my M.Tech thesis, I am deeply researching full-duplex voice AI pipelines and autonomous agents. My goal is to eliminate the latency and robotic nature of current AI interactions, pushing the boundaries of what I've built with <span className="text-purple-300 font-bold">Interviewer.io</span> into more generalized, empathetic, real-time agentic systems.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 3. THE ORIGIN STORY (Timeline) ── */}
      <div className="mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-mono text-sm uppercase tracking-widest font-bold mb-2">
            <Code2 size={18} /> The Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">From Intern to Architect</h2>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-12">
          
          <motion.div variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative ml-8 md:ml-12">
            <span className="absolute w-6 h-6 bg-blue-100 rounded-full -left-[45px] md:-left-[61px] border-4 border-white shadow-sm flex items-center justify-center top-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">July 2022: The Deep End</h3>
            <p className="text-slate-600 text-lg leading-relaxed bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              I joined my first company as an intern while still completing my B.Tech. Initially, I struggled. The massive production codebases and complex business logic were overwhelming. But instead of backing down, I put my head down and coded. I spent hours analyzing systems until the architecture finally clicked.
            </p>
          </motion.div>

          <motion.div variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative ml-8 md:ml-12">
            <span className="absolute w-6 h-6 bg-blue-100 rounded-full -left-[45px] md:-left-[61px] border-4 border-white shadow-sm flex items-center justify-center top-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">2023: Full-Stack Ownership</h3>
            <p className="text-slate-600 text-lg leading-relaxed bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              Hard work paid off. I transitioned into a true full-stack role, developing a deep understanding of the company's core systems. I started taking ownership of projects, exploring cloud infrastructure (AWS/Linux), and independently managing API integrations. My ideas and technical resolutions started driving actual business outcomes.
            </p>
          </motion.div>

          <motion.div variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative ml-8 md:ml-12">
            <span className="absolute w-6 h-6 bg-purple-100 rounded-full -left-[45px] md:-left-[61px] border-4 border-white shadow-sm flex items-center justify-center top-1">
              <Rocket size={12} className="text-purple-600" />
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Present: The AI Frontier</h3>
            <p className="text-slate-600 text-lg leading-relaxed bg-white p-6 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-purple-500">
              When the AI boom hit over the last 1.5 years, I saw the paradigm shift. I dove headfirst into understanding LLMs, building side projects to test RAG pipelines and Agentic workflows. I successfully brought this knowledge back to the enterprise, leading the integration of production-ready AI systems that automate complex legacy workflows.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── 4. ENGINEERING PRINCIPLES ── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-600 font-mono text-sm uppercase tracking-widest font-bold mb-2">
            <Cpu size={18} /> Philosophy
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Core Engineering Principles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {engineeringPrinciples.map((principle, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 group">
              <div className="p-4 bg-slate-50 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{principle.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 5. BEYOND THE TERMINAL ── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-32 bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-200"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Beyond the Terminal</h2>
          <p className="text-slate-600 text-lg">Because you can't write good code if you never leave the IDE.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center justify-center gap-3">
            <Car className="text-blue-500 w-10 h-10" />
            <span className="font-bold text-slate-800">Driving</span>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center justify-center gap-3">
            <Plane className="text-emerald-500 w-10 h-10" />
            <span className="font-bold text-slate-800">Traveling</span>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center justify-center gap-3">
            <Film className="text-purple-500 w-10 h-10" />
            <span className="font-bold text-slate-800">Movies</span>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center justify-center gap-3">
            <Gamepad2 className="text-orange-500 w-10 h-10" />
            <span className="font-bold text-slate-800">Cricket</span>
          </div>
        </div>
      </motion.div>

      {/* ── 6. EDUCATION & CERTIFICATIONS ── */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 border-t border-slate-200 pt-16"
      >
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 rounded-lg">
              <GraduationCap className="text-slate-700" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:w-2 transition-all"></div>
              <h3 className="text-lg font-bold text-slate-900">Masters of Technology (Computer Science)</h3>
              <p className="text-blue-600 font-semibold mb-2 text-sm mt-1">Swami Keshvanand Institute of Technology (SKIT)</p>
              <div className="flex justify-between text-slate-500 text-sm font-medium mt-4">
                <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">2nd Semester (Ongoing)</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-bold text-slate-900">Bachelors of Technology</h3>
              <p className="text-slate-600 font-semibold mb-2 text-sm mt-1">Rajasthan Technical University</p>
              <div className="flex justify-between text-slate-500 text-sm font-medium mt-4">
                <span>Aggregate GPA: 8.5</span>
                <span>2019 - 2023</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 rounded-lg">
              <Award className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Certifications</h2>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-[calc(100%-4rem)]">
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-700 font-semibold group">
                <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Award size={18} />
                </span>
                Agile Project Management (Atlassian)
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-semibold group">
                <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Server size={18} />
                </span>
                Docker Foundations
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-semibold group">
                <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Database size={18} />
                </span>
                Python for Data Analysis
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default About;