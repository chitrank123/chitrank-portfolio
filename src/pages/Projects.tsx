import { motion } from 'framer-motion';
import { ExternalLink, Github, BrainCircuit, Mic, LayoutDashboard, LineChart, Code2, ScanFace } from 'lucide-react';

const Projects = () => {
  // Your massive, architecture-heavy flagship projects
  const featuredProjects = [
    {
      title: "Interviewer.io – Real-Time AI Mock Interview Platform",
      role: "Full-Stack AI Engineer",
      icon: <Mic className="text-blue-500" size={28} />,
      description: "A B2C SaaS platform offering real-time, voice-based mock interviews tailored to a user's actual resume using full-duplex voice pipelines and RAG.",
      achievements: [
        "Low-Latency Voice Interactions: Engineered a voice interface using OpenAI Whisper for accurate tech-jargon transcription and Edge TTS for realistic AI audio.",
        "Contextual AI (RAG): Implemented Retrieval-Augmented Generation to parse PDF resumes, allowing the LLM to ask highly personalized questions.",
        "Containerized Session Management: Built a FastAPI backend that dynamically spawns isolated Docker containers for each interview session to prevent memory leaks.",
        "Structured AI Evaluations: Created an async grading engine using FastAPI Background Tasks and Pydantic to force the LLM into returning a strict JSON schema for scorecards."
      ],
      tech: ["Next.js", "FastAPI", "MongoDB", "Docker", "OpenAI Whisper", "Edge TTS"],
      link: "#",
      github: "#"
    },
    {
      title: "TubeMind Pro - Agentic AI Video Analysis",
      role: "AI Architect",
      icon: <BrainCircuit className="text-purple-500" size={28} />,
      description: "Built a stateful decision-making engine using LangGraph, allowing the system to intelligently switch between full-video summarization and timestamp-specific retrieval.",
      achievements: [
        "Cloud Infrastructure: Deployed containerized microservices using Docker Compose on AWS EC2 with CloudFront integration.",
        "Robust Data Pipeline: Developed a fail-safe transcript extraction system using YouTube Transcript API with automated yt-dlp fallback.",
        "High-Performance Stack: Integrated Groq API (LPU) for sub-second LLM inference and pgvector for hybrid search."
      ],
      tech: ["FastAPI", "LangGraph", "AWS EC2", "Docker", "Groq API", "PostgreSQL"],
      link: "https://tubemind-pro.web.app",
      github: "#"
    }
  ];

  // The projects I found on your GitHub to bulk up the portfolio!
  const otherProjects = [
    {
      title: "AWS Operational Dashboard",
      description: "A comprehensive dashboard to monitor AWS costs, EC2 instances, S3 buckets, and IAM metrics in real-time.",
      icon: <LayoutDashboard className="text-orange-500" size={24} />,
      tech: ["Python", "AWS SDK", "Boto3", "CloudWatch"],
      github: "https://github.com/chitrank123/aws-operational-dashboard"
    },
    {
      title: "Personal Finance Dashboard",
      description: "A Streamlit data application to track finances, featuring income/expense tracking, trend analysis, and investment management.",
      icon: <LineChart className="text-emerald-500" size={24} />,
      tech: ["Python", "Streamlit", "Pandas", "Data Visualization"],
      github: "https://github.com/chitrank123/personal-finance-dashboard"
    },
    {
      title: "AI Code Reviewer",
      description: "An automated code review tool leveraging LLMs to analyze pull requests, suggest optimizations, and catch bugs.",
      icon: <Code2 className="text-blue-500" size={24} />,
      tech: ["JavaScript", "LLM APIs", "LangChain", "Git"],
      github: "https://github.com/chitrank123/code-reviewer-ai"
    },
    {
      title: "Face Recognition Attendance",
      description: "A computer vision system that automates attendance tracking using facial recognition algorithms.",
      icon: <ScanFace className="text-indigo-500" size={24} />,
      tech: ["Python", "OpenCV", "Machine Learning", "HTML"],
      github: "https://github.com/chitrank123/FACE-RECOGNITION-ATTENDENCE"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Featured Architecture</h1>
          <p className="text-slate-600 text-lg max-w-2xl">Deep dives into my production-grade SaaS platforms, AI systems, and multi-agent workflows.</p>
        </div>
        
        {/* Featured Projects Stack */}
        <div className="flex flex-col gap-12 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    {project.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{project.title}</h2>
                    <h3 className="text-md font-semibold text-blue-600 uppercase tracking-wider">{project.role}</h3>
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a href={project.github} className="p-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 transition-colors"><Github size={20} /></a>
                  )}
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 transition-colors"><ExternalLink size={20} /></a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-700 text-lg mb-8 leading-relaxed max-w-4xl">{project.description}</p>
              
              <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Architectural Achievements</h4>
                <ul className="space-y-3">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="text-slate-700 flex items-start gap-3">
                      <span className="text-blue-500 mt-1">✦</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-4 py-1.5 bg-slate-900 text-slate-50 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Notable Work Grid */}
        <div className="border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Open Source & Utilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  {project.icon}
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 group-hover:text-slate-900 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Projects;