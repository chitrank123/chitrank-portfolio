import { motion } from 'framer-motion';
import { BrainCircuit, Server, Database, Cloud, Code, GraduationCap, Award, MapPin, Terminal, Users } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: "AI Architecture",
      icon: <BrainCircuit className="text-purple-500" size={24} />,
      skills: ["LangGraph", "Multi-Agent Systems", "RAG Pipelines", "Groq API", "LangChain"]
    },
    {
      title: "Backend Engineering",
      icon: <Server className="text-blue-500" size={24} />,
      skills: ["Python (Async/Await)", "FastAPI", "Django", "Express.js", "WebSockets"]
    },
    {
      title: "Databases",
      icon: <Database className="text-emerald-500" size={24} />,
      skills: ["PostgreSQL (pgvector)", "MongoDB", "Supabase", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-sky-500" size={24} />,
      skills: ["AWS (EC2, CloudFront, Lambda)", "Docker", "Linux", "CI/CD"]
    },
    {
      title: "Frontend",
      icon: <Code className="text-orange-500" size={24} />,
      skills: ["React.js", "React Native", "Streamlit", "TypeScript"]
    }
  ];

  // Your actual events updated from LinkedIn!
  const recentEvents = [
    {
      title: "DevFest Jaipur 2025 (GDG)",
      date: "2025",
      description: "Spent a full day at the Rajasthan International Center celebrating the local developer ecosystem. A major highlight was deep-diving into the Gemini CLI and seeing how AI is reshaping command-line workflows in real-time. Connected with amazing devs and shared ideas on the future of AI.",
      icon: <Terminal className="text-indigo-500" size={20} />
    },
    {
      title: "Active Open Source Contributor",
      date: "Ongoing",
      description: "Constantly exploring and contributing to the AI ecosystem, focusing on LangChain, multi-agent frameworks, and building scalable cloud architectures. Always open to connecting over new tech and hackathons.",
      icon: <Users className="text-emerald-500" size={20} />
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        {/* PERSONAL STORY & PHOTO SECTION */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-center md:items-start">
          
          {/* Profile Picture Placeholder */}
          <div className="w-64 h-64 shrink-0 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-200 relative">
            {/* REPLACE this src with your actual image path, e.g., "/profile.jpg" after putting it in your public folder */}
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQHOYMcdtoSwZg/profile-displayphoto-crop_800_800/B56ZtgyfvZHsAI-/0/1766855410280?e=1773878400&v=beta&t=kAC8Uovqy5cBnOL7QlNJphM2utImC9vX-__j3UvPSc8" 
              alt="Chitrank Tak" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Biography */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">The Engineer Behind the Code.</h1>
            <div className="flex items-center gap-2 text-slate-500 font-medium mb-6 bg-slate-100 w-fit px-3 py-1.5 rounded-full text-sm">
              <MapPin size={16} className="text-blue-500" />
              Based in Jaipur, Rajasthan
            </div>
            
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                I am a results-oriented Software Engineer specializing in building high-performance systems and orchestrating Multi-Agent workflows. My journey started at Rajasthan Technical University, and over the past 3.5 years, I've evolved from handling core database migrations to leading GenAI architectures.
              </p>
              <p>
                Beyond the terminal, I am deeply passionate about the tech community. I actively participate in local tech events, Google Developer Groups (GDG), and open-source discussions. Whether I am optimizing AWS infrastructure to cut costs by 40% or building real-time voice AI platforms, my goal is always to bridge the gap between complex data and seamless human experiences.
              </p>
            </div>
          </div>
        </div>

        {/* EVENTS & COMMUNITY SECTION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Community & Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recentEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    {event.icon}
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECHNICAL ARSENAL */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-200 text-sm font-medium rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-200 pt-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-slate-700" size={28} />
              <h2 className="text-2xl font-bold text-slate-900">Education</h2>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Bachelors of Technology</h3>
              <p className="text-lg text-blue-600 font-medium mb-2">Rajasthan Technical University</p>
              <div className="flex justify-between text-slate-600 text-sm">
                <span>Aggregate GPA: 8.5</span>
                <span>2019 - 2023</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-500" size={28} />
              <h2 className="text-2xl font-bold text-slate-900">Certifications</h2>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Agile Project Management (Atlassian)
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Docker Foundations
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Python for Data Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default About;