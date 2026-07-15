import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, BrainCircuit, Server, Mail, Database, Cloud, LayoutTemplate, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const skillsData = {
    ai: {
      title: 'AI / LLM / ML',
      icon: <BrainCircuit size={20} />,
      stats: '13 technologies, 9 expert-level',
      skills: [
        { name: 'LangGraph', level: 95 },
        { name: 'OpenAI Realtime API', level: 93 },
        { name: 'RAG Pipelines', level: 92 },
        { name: 'Groq API (Llama-3)', level: 90 },
        { name: 'LangChain', level: 88 },
        { name: 'Vertex AI (Gemini)', level: 86 },
        { name: 'Multi-Agent Systems', level: 85 },
        { name: 'OpenAI Whisper (STT)', level: 85 },
        { name: 'Edge TTS', level: 82 },
      ],
    },
    backend: {
      title: 'Backend Engineering',
      icon: <Server size={20} />,
      stats: '11 technologies, 8 expert-level',
      skills: [
        { name: 'Python (Async/Await)', level: 95 },
        { name: 'FastAPI', level: 92 },
        { name: 'Salesforce Apex + MCP', level: 85 },
        { name: 'Django', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'WebSockets (Socket.io)', level: 82 },
        { name: 'Microservices', level: 80 },
      ],
    },
    data: {
      title: 'Databases & Data',
      icon: <Database size={20} />,
      stats: '8 technologies, 5 expert-level',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'pgvector (Hybrid Search)', level: 88 },
        { name: 'MongoDB (Beanie ODM)', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'Sequelize ORM', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Pandas', level: 75 },
        { name: 'Data Normalization', level: 90 },
      ],
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: <Cloud size={20} />,
      stats: '10 technologies, 7 expert-level',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 88 },
        { name: 'Google Cloud Run / Functions', level: 85 },
        { name: 'Docker / Docker Compose', level: 90 },
        { name: 'Nginx & Reverse Proxies', level: 85 },
        { name: 'Linux / SSH Configs', level: 85 },
        { name: 'CloudFront CDN', level: 80 },
        { name: 'AWS Cost Optimization', level: 90 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'Firebase Hosting', level: 80 },
      ],
    },
    frontend: {
      title: 'Frontend & Mobile',
      icon: <LayoutTemplate size={20} />,
      stats: '8 technologies, 5 expert-level',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'Streamlit', level: 88 },
        { name: 'React Native', level: 75 },
        { name: 'Framer Motion', level: 70 },
        { name: 'Clerk Auth', level: 85 },
      ],
    },
  };

  const projects = [
    { when: 'Concretio', title: 'Voice by Concretio', desc: "Real-time speech-to-speech AI voice agent platform via OpenAI's Realtime API: an HR screening agent synced to Zoho Recruit, plus 'Aria,' a Google Meet bot that summarizes calls to Google Chat.", stack: ['OpenAI Realtime', 'FastAPI', 'Heroku'] },
    { when: 'Concretio', title: 'Task Review Tool', desc: 'AI code review platform for Concretio, with multi-provider LLM routing (Claude/GPT-4o/Gemini), OAuth role access, and webhook-triggered PR review automation.', stack: ['FastAPI', 'OAuth', 'Webhooks'] },
    { when: 'Acuvisor', title: 'MMV Agent', desc: 'Self-correcting LangGraph state machine matching external government vehicle data to internal insurer databases, automating quoting.', stack: ['LangGraph', 'Groq API', 'MySQL'] },
    { when: 'Personal', title: 'Interviewer.io', desc: 'Real-time AI mock interview platform. Full-duplex voice via Whisper + Edge TTS, RAG over resumes, isolated Docker sessions per candidate.', stack: ['Whisper', 'Docker', 'RAG'] },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="px-8 md:px-16 pt-16 md:pt-20 pb-4">
        <h1 className="font-serif font-light text-[clamp(36px,6vw,72px)] leading-[0.98] mb-6 text-paper-ink text-balance max-w-3xl">
          Building the voice AI that stops sounding like a robot.
        </h1>
        <p className="text-lg text-paper-dim leading-relaxed max-w-2xl mb-8">
          Four years orchestrating <b className="text-paper-ink font-bold">agentic workflows</b> and{' '}
          <b className="text-paper-ink font-bold">real-time voice AI</b> in production, most recently leading the
          voice agent platform at Concretio.
        </p>

        <div className="border-t border-paper-ink max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-paper-rule">
            <div className="py-4 sm:pr-6">
              <b className="block font-mono text-2xl font-semibold text-accent">4+</b>
              <span className="text-xs text-paper-dim">years in production AI</span>
            </div>
            <div className="py-4 sm:px-6">
              <b className="block font-mono text-2xl font-semibold text-accent">40%</b>
              <span className="text-xs text-paper-dim">cloud cost reduced</span>
            </div>
            <div className="py-4 sm:pl-6">
              <b className="block font-mono text-2xl font-semibold text-accent">8+</b>
              <span className="text-xs text-paper-dim">systems shipped</span>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="px-8 md:px-16 py-14 border-t border-paper-rule mt-10">
        <div className="flex items-baseline gap-3.5 mb-7">
          <span className="font-mono text-accent text-sm">03</span>
          <h2 className="font-serif text-sm uppercase tracking-[0.1em] text-paper-dim">Selected Projects</h2>
          <span className="flex-1 h-px bg-paper-rule" />
          <Link to="/projects" className="font-mono text-xs font-semibold text-accent hover:underline shrink-0">view all &rarr;</Link>
        </div>
        {projects.map((p, i) => (
          <div key={p.title} className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5 py-6 ${i === 0 ? '' : 'border-t border-paper-rule'}`}>
            <div className="font-mono text-xs text-paper-dim pt-1">{p.when}</div>
            <div>
              <h3 className="font-serif font-semibold text-xl mb-2 text-paper-ink">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-paper-body max-w-[60ch] mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] uppercase px-2.5 py-1 border border-paper-ink rounded-full text-paper-ink">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="px-8 md:px-16 py-14 border-t border-paper-rule">
        <div className="flex items-baseline gap-3.5 mb-7">
          <span className="font-mono text-accent text-sm">02</span>
          <h2 className="font-serif text-sm uppercase tracking-[0.1em] text-paper-dim">Experience</h2>
          <span className="flex-1 h-px bg-paper-rule" />
          <Link to="/experience" className="font-mono text-xs font-semibold text-accent hover:underline shrink-0">full history &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5">
          <div className="font-mono text-xs text-accent font-semibold pt-1">May 2026-Now</div>
          <div className="flex gap-3">
            <Briefcase size={18} className="text-accent shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-xl mb-1 text-paper-ink">Senior AI Solutions Engineer, Concretio</h3>
              <p className="text-[15px] text-paper-body leading-relaxed max-w-[60ch]">
                Leads Voice by Concretio, an AI voice agent platform on OpenAI's Realtime API; serves as technical lead on standy-bot and Compass AI; reviews architecture and deployment for an enterprise healthcare client integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL ARSENAL */}
      <section className="px-8 md:px-16 py-14 border-t border-paper-rule">
        <div className="mb-8">
          <div className="flex items-baseline gap-3.5 mb-4">
            <span className="font-mono text-accent text-sm">&bull;</span>
            <h2 className="font-serif text-sm uppercase tracking-[0.1em] text-paper-dim">Technical Arsenal</h2>
            <span className="flex-1 h-px bg-paper-rule" />
          </div>
          <p className="font-serif text-xl text-paper-ink">Interactive breakdown of core competencies.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-7">
          {Object.entries(skillsData).map(([key, data]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full transition-all duration-300 border font-mono text-xs ${
                  isActive ? 'bg-accent/10 border-accent text-paper-ink' : 'bg-transparent border-paper-rule text-paper-dim hover:border-paper-ink'
                }`}
              >
                <span className={isActive ? 'text-accent' : 'text-paper-dim'}>{data.icon}</span>
                {data.title}
                <span className="text-paper-dim">{data.skills.length}</span>
              </button>
            );
          })}
        </div>

        <div className="border border-paper-rule rounded-sm p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-7 border-b border-paper-rule pb-5">
                <div className="text-accent">{skillsData[activeCategory as keyof typeof skillsData].icon}</div>
                <div>
                  <h2 className="font-serif font-semibold text-xl text-paper-ink">{skillsData[activeCategory as keyof typeof skillsData].title}</h2>
                  <p className="text-xs text-paper-dim font-mono mt-1">{skillsData[activeCategory as keyof typeof skillsData].stats}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {skillsData[activeCategory as keyof typeof skillsData].skills.map((skill, index) => {
                  const filled = Math.round(skill.level / 10);
                  return (
                    <div key={index} className="w-full">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-medium text-paper-ink font-mono">{skill.name}</span>
                        <span className="text-xs font-bold text-accent font-mono">{skill.level}%</span>
                      </div>
                      <div className="flex gap-[3px]">
                        {Array.from({ length: 10 }).map((_, seg) => (
                          <motion.span
                            key={seg}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.02 * index + seg * 0.02 }}
                            className="h-4 flex-1 rounded-[2px]"
                            style={{ background: seg < filled ? '#b8863f' : '#ded2c2' }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-16 md:py-20 border-t border-paper-rule">
        <h2 className="font-serif text-3xl md:text-4xl text-paper-ink mb-4 text-balance">Let's build something that ships.</h2>
        <p className="text-paper-dim text-base md:text-lg mb-8 max-w-xl">Open to discussions on AI architecture, agentic systems, and full-stack engineering roles.</p>
        <a href="mailto:cttak365@gmail.com" className="inline-flex items-center gap-2 bg-paper-ink text-paper px-7 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wide hover:bg-accent transition-colors">
          <Mail size={16} /> Get In Touch <ArrowRight size={14} />
        </a>
      </section>
    </div>
  );
};

export default Home;
