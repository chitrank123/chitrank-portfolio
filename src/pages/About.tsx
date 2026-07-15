import { motion, type Variants } from 'framer-motion';
import {
  MapPin, GraduationCap, Award, Lightbulb, Server,
  ShieldCheck, Cpu, Code2, Car, Film,
  Gamepad2, Plane, Mic, BrainCircuit, Database
} from 'lucide-react';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  const engineeringPrinciples = [
    {
      title: "AI as a Utility, Not a Gimmick",
      description: "I don't just wrap LLM APIs. I build deterministic, stateful systems (like LangGraph state machines) that constrain AI to solve specific, highly-regulated business problems.",
      icon: <Lightbulb size={22} />
    },
    {
      title: "Cost-Aware Architecture",
      description: "Writing functional code is the baseline; writing cost-effective code is the goal. I rigorously audit AWS infrastructure and optimize database queries to ensure scale doesn't break the bank.",
      icon: <Server size={22} />
    },
    {
      title: "Decoupled & Resilient",
      description: "Whether it's isolating concurrent AI voice sessions in dynamic Docker containers or setting up reverse proxies with Nginx, I design systems where localized failures never cascade.",
      icon: <ShieldCheck size={22} />
    }
  ];

  const journey = [
    { when: 'Jul 2022', title: 'The Deep End', text: "I joined my first company as an intern while still completing my B.Tech. Initially, I struggled. The massive production codebases and complex business logic were overwhelming. But instead of backing down, I put my head down and coded. I spent hours analyzing systems until the architecture finally clicked." },
    { when: '2023', title: 'Full-Stack Ownership', text: "Hard work paid off. I transitioned into a true full-stack role, developing a deep understanding of the company's core systems. I started taking ownership of projects, exploring cloud infrastructure (AWS/Linux), and independently managing API integrations." },
    { when: 'Now', title: 'The AI Frontier', text: "When the AI boom hit, I saw the paradigm shift. I dove headfirst into understanding LLMs, building side projects to test RAG pipelines and agentic workflows, then brought that knowledge back to the enterprise, leading production-ready AI systems." },
  ];

  return (
    <div className="px-8 md:px-16 py-16 md:py-20 max-w-3xl">

      {/* HERO & BIO */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-16">
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <motion.div variants={itemVariants} className="w-40 h-52 shrink-0 overflow-hidden border border-paper-rule">
            <img
              src="/profile-pic.jpg"
              alt="Chitrank Tak"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1">
            <h1 className="font-serif font-light text-4xl md:text-5xl text-paper-ink mb-4 leading-tight text-balance">
              Architecting intelligence. Building scale.
            </h1>
            <div className="flex items-center gap-2 text-paper-dim font-mono text-xs mb-2">
              <MapPin size={13} className="text-accent" />
              Based in Jaipur, Rajasthan
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="space-y-5 text-[17px] text-paper-body leading-relaxed mt-8">
          <p>
            I am a Senior AI Solutions Engineer specializing in high-performance backend infrastructure and intelligent multi-agent workflows. Over the past 4 years, my trajectory has taken me from optimizing core legacy database migrations to architecting and deploying end-to-end generative AI enterprise solutions.
          </p>
          <p>
            My engineering philosophy is rooted in resilience and scale. I don't just write functional code; I build robust, cost-aware systems. Whether that means constructing self-correcting LangGraph state machines that automate complex insurance pipelines, or securing and rightsizing AWS cloud environments, my focus is always on delivering measurable business impact.
          </p>
          <p>
            Currently, I am pursuing my M.Tech in Computer Science, diving deep into the bleeding edge of voice AI and real-time autonomous agents. This intersection of academic research and enterprise engineering lets me bring theoretical innovations directly into production.
          </p>
        </motion.div>
      </motion.div>

      {/* CURRENT FOCUS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 border-y border-paper-rule py-10"
      >
        <div className="flex gap-6 items-start">
          <Mic className="text-accent w-9 h-9 shrink-0 mt-1" />
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest font-bold mb-3">
              <BrainCircuit size={14} /> Current Research Focus
            </div>
            <h2 className="font-serif font-semibold text-2xl text-paper-ink mb-3">Voice AI &amp; Autonomous Agents</h2>
            <p className="text-paper-body text-base leading-relaxed">
              As part of my M.Tech thesis, I am researching full-duplex voice AI pipelines and autonomous agents, aiming to eliminate the latency and robotic nature of current AI interactions, pushing what I built with <span className="text-accent font-semibold">Interviewer.io</span> into more generalized, empathetic, real-time systems.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ORIGIN STORY */}
      <div className="mb-16">
        <div className="flex items-baseline gap-3.5 mb-8">
          <span className="font-mono text-accent text-sm">&bull;</span>
          <h2 className="font-serif text-sm uppercase tracking-[0.1em] text-paper-dim flex items-center gap-2"><Code2 size={14} /> The Journey</h2>
          <span className="flex-1 h-px bg-paper-rule" />
        </div>

        {journey.map((j, i) => (
          <motion.div
            key={j.when}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-4 py-6 ${i === 0 ? '' : 'border-t border-paper-rule'}`}
          >
            <div className={`font-mono text-xs pt-1 ${j.when === 'Now' ? 'text-accent font-semibold' : 'text-paper-dim'}`}>{j.when}</div>
            <div>
              <h3 className="font-serif font-semibold text-xl text-paper-ink mb-2">{j.title}</h3>
              <p className="text-[15px] text-paper-body leading-relaxed max-w-[60ch]">{j.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ENGINEERING PRINCIPLES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-baseline gap-3.5 mb-8">
          <span className="font-mono text-accent text-sm">&bull;</span>
          <h2 className="font-serif text-sm uppercase tracking-[0.1em] text-paper-dim flex items-center gap-2"><Cpu size={14} /> Philosophy</h2>
          <span className="flex-1 h-px bg-paper-rule" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {engineeringPrinciples.map((principle, index) => (
            <div key={index} className={index > 0 ? 'sm:border-l sm:border-paper-rule sm:pl-8' : ''}>
              <div className="text-accent mb-4">{principle.icon}</div>
              <h3 className="font-serif font-semibold text-lg text-paper-ink mb-2">{principle.title}</h3>
              <p className="text-paper-dim leading-relaxed text-sm">{principle.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* BEYOND THE TERMINAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 border-y border-paper-rule py-10"
      >
        <h2 className="font-serif font-semibold text-xl text-paper-ink mb-1">Beyond the Terminal</h2>
        <p className="text-paper-dim text-sm mb-7">Because you can't write good code if you never leave the IDE.</p>

        <div className="flex flex-wrap gap-x-10 gap-y-5">
          <div className="flex items-center gap-2.5"><Car size={18} className="text-accent" /><span className="font-medium text-paper-ink text-sm">Driving</span></div>
          <div className="flex items-center gap-2.5"><Plane size={18} className="text-accent" /><span className="font-medium text-paper-ink text-sm">Traveling</span></div>
          <div className="flex items-center gap-2.5"><Film size={18} className="text-accent" /><span className="font-medium text-paper-ink text-sm">Movies</span></div>
          <div className="flex items-center gap-2.5"><Gamepad2 size={18} className="text-accent" /><span className="font-medium text-paper-ink text-sm">Cricket</span></div>
        </div>
      </motion.div>

      {/* EDUCATION & CERTIFICATIONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="font-serif font-semibold text-xl text-paper-ink mb-6 flex items-center gap-2"><GraduationCap size={20} className="text-accent" /> Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-5">
              <h3 className="font-semibold text-paper-ink text-[15px]">Masters of Technology (Computer Science)</h3>
              <p className="text-accent text-sm mb-1.5">Swami Keshvanand Institute of Technology (SKIT)</p>
              <span className="font-mono text-xs text-paper-dim">2nd Semester (Ongoing)</span>
            </div>
            <div className="border-l-2 border-paper-rule pl-5">
              <h3 className="font-semibold text-paper-ink text-[15px]">Bachelors of Technology</h3>
              <p className="text-paper-dim text-sm mb-1.5">Rajasthan Technical University</p>
              <div className="flex gap-4 font-mono text-xs text-paper-dim">
                <span>GPA: 8.5</span>
                <span>2019-2023</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif font-semibold text-xl text-paper-ink mb-6 flex items-center gap-2"><Award size={20} className="text-accent" /> Certifications</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-paper-ink font-medium text-[15px]">
              <Award size={16} className="text-accent shrink-0" /> Agile Project Management (Atlassian)
            </li>
            <li className="flex items-center gap-3 text-paper-ink font-medium text-[15px]">
              <Server size={16} className="text-accent shrink-0" /> Docker Foundations
            </li>
            <li className="flex items-center gap-3 text-paper-ink font-medium text-[15px]">
              <Database size={16} className="text-accent shrink-0" /> Python for Data Analysis
            </li>
          </ul>
        </div>
      </motion.div>

    </div>
  );
};

export default About;
