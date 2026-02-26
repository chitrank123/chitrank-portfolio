import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Acuvisor Insurance Brokers",
      date: "Sep 2023 - Present",
      location: "Jaipur, Rajasthan",
      highlights: [
        "GenAI Leadership: Spearheaded the development of a proprietary POC chatbot using Lang Chain and open-source models.",
        "API Architecture: Redesigned core API integrations, automating workflows that reduced manual processing time by 40%.",
        "Infrastructure Optimization: Led AWS cost management initiatives, achieving a significant reduction in monthly cloud expenses.",
        "Internal Tools: Engineered a process automation tool using Streamlit and Pandas, increasing productivity tracking efficiency by 50%."
      ]
    },
    {
      role: "Software Developer Trainee",
      company: "Acuvisor Insurance Brokers",
      date: "Jan 2023 - Aug 2023",
      location: "Jaipur, Rajasthan",
      highlights: [
        "Partner Integration: Accelerated the onboarding speed of new insurance partners by 35% through reusable API integration patterns in Django.",
        "Real-Time Systems: Integrated WebSocket principles (Socket.io) to enable real-time dashboard updates for field agents.",
        "Production Support: Collaborated directly with stakeholders, maintaining a 90% resolution rate within strict SLA timelines."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Acuvisor Insurance Brokers",
      date: "Jul 2022 - Jan 2023",
      location: "Jaipur, Rajasthan",
      highlights: [
        "Codebase Refactoring: Evaluated and optimized existing source code for better modularity and functionality.",
        "Database Management: Handled core database operations and schema designs using MySQL and MongoDB."
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Experience</h1>
        <p className="text-slate-600 mb-12 text-lg">My professional journey and career progression.</p>
        
        <div className="relative border-l border-slate-200 ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-10"
            >
              <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-slate-50 border border-slate-200">
                <Briefcase size={14} className="text-blue-600" />
              </span>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  {exp.date}
                </span>
              </div>
              
              <h4 className="text-md font-medium text-slate-700 mb-4">
                {exp.company} <span className="text-slate-400 font-normal">| {exp.location}</span>
              </h4>
              
              <ul className="space-y-3">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-slate-300 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;