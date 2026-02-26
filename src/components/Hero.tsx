import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 px-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4 text-blue-600 font-mono">
            <Terminal size={20} />
            <span>Hello World, I am</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Chitrank Tak.
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-slate-600 font-medium mb-8">
            Full-Stack AI Engineer & Agentic Architect.
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
            I specialize in building high-performance backend systems and orchestrating Multi-Agent workflows. 
            From optimizing RAG pipelines to deploying scalable microservices on AWS, I turn complex data into seamless user experiences.
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/chitrank123" target="_blank" rel="noreferrer" 
               className="p-3 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chitrank-tak" target="_blank" rel="noreferrer"
               className="p-3 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cttak365@gmail.com" 
               className="p-3 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;