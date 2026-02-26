import { motion } from 'framer-motion';
import { BrainCircuit, Server, Database, Cloud, Code, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: "AI Architecture & GenAI",
      icon: <BrainCircuit className="text-purple-500" size={24} />,
      skills: ["LangGraph", "Multi-Agent Systems", "RAG Pipelines", "yt-dlp", "Groq API", "LangChain", "HuggingFace", "OpenAI"]
    },
    {
      title: "Backend Engineering",
      icon: <Server className="text-blue-500" size={24} />,
      skills: ["Python (Async/Await)", "FastAPI", "Django", "Express.js", "WebSockets"]
    },
    {
      title: "Databases",
      icon: <Database className="text-emerald-500" size={24} />,
      skills: ["PostgreSQL (pgvector, Asyncpg)", "MongoDB", "Supabase", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-sky-500" size={24} />,
      skills: ["AWS (EC2, CloudFront, Lambda, S3)", "Docker Compose", "Linux", "CI/CD"]
    },
    {
      title: "Frontend",
      icon: <Code className="text-orange-500" size={24} />,
      skills: ["React.js", "React Native", "Streamlit", "JavaScript (ES6+)"]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">About & Skills</h1>
        <p className="text-slate-600 mb-12 text-lg">My technical stack, education, and certifications.</p>
        
        {/* Skills Grid */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
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

          {/* Certifications */}
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