import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Acuvisor Insurance Brokers",
      date: "Sep 2023 - Present",
      location: "Jaipur, Rajasthan",
      tech: ["LangGraph", "FastAPI", "React", "AWS EC2", "Nginx", "Express.js", "Django", "LLMs"],
      highlights: [
        "Agentic AI Architecture (MMV Agent): Engineered a self-correcting LangGraph state machine using Groq (Llama-3) to intelligently match external government vehicle APIs (FLA) with internal legacy MySQL databases, fully automating the insurance quoting pipeline.",
        "GenAI Leadership & Chatbots: Spearheaded the development of a proprietary Proof-of-Concept (POC) chatbot using LangChain and open-source models, enabling instant, natural-language querying of complex insurance policies for internal teams.",
        "End-to-End API Ownership: Managed and architected comprehensive API integration projects for multiple major insurers. Took full ownership from initial backend architecture to development, ensuring successful and strictly on-time production delivery.",
        "Technical Partner Management: Acted as the primary technical point of contact, independently handling all technical communications and architecture alignments with external insurance partners to rapidly resolve integration blockers.",
        "Full-Stack Migration & DevOps: Modernized an internal Timesheet Management System by migrating from a legacy Streamlit architecture to a high-performance React and FastAPI stack. Independently managed the DevOps lifecycle, including custom domain deployment and configuring Nginx reverse proxies.",
        "Cloud Infrastructure & Security: Handled the provisioning and maintenance of AWS EC2 instances, managed secure SSH configurations, and led rigorous cloud auditing that achieved a 40% reduction in monthly AWS expenses.",
        "Enterprise Dashboard Development: Architected and delivered a comprehensive Sales Admin Dashboard from the ground up, designing the complete backend infrastructure in Express.js alongside a scalable frontend interface to streamline internal reporting."
      ]
    },
    {
      role: "Software Developer Trainee",
      company: "Acuvisor Insurance Brokers",
      date: "Jan 2023 - Aug 2023",
      location: "Jaipur, Rajasthan",
      tech: ["Django", "Python", "Socket.io", "REST APIs"],
      highlights: [
        "Partner Integration: Accelerated the onboarding speed of new insurance partners by 35% through the implementation of streamlined, reusable API integration patterns in Django.",
        "Real-Time Systems: Integrated WebSocket principles (Socket.io) to enable real-time dashboard updates for field agents, successfully reducing data synchronization lags by 40%.",
        "Production Support: Collaborated directly with business stakeholders to resolve critical technical integration issues, maintaining a 90% resolution rate within strict SLA timelines."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Acuvisor Insurance Brokers",
      date: "Jul 2022 - Jan 2023",
      location: "Jaipur, Rajasthan",
      tech: ["MySQL", "MongoDB", "Backend Architecture"],
      highlights: [
        "Codebase Refactoring: Evaluated and optimized existing legacy source code for better modularity and functionality, significantly reducing technical debt for future feature rollouts.",
        "Database Management: Handled core database operations and schema designs using MySQL and MongoDB, ensuring data consistency during critical migration phases."
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Professional Experience</h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            My career trajectory, highlighting my transition from core database management to leading enterprise AI architecture, full-stack migrations, and technical partner integrations.
          </p>
        </div>
        
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16 ml-8 md:ml-12 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full -left-[52px] md:-left-[68px] ring-4 ring-white border border-blue-200 shadow-sm top-0">
                <Briefcase size={18} className="text-blue-600" />
              </span>
              
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                      <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                        <Calendar size={14} /> {exp.date}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-900 text-slate-50 text-xs font-bold rounded-md tracking-wide">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => {
                    const splitText = item.split(':');
                    const hasPrefix = splitText.length > 1;

                    return (
                      <li key={i} className="text-slate-700 text-base leading-relaxed flex items-start gap-3">
                        <span className="text-blue-500 mt-1 flex-shrink-0">✦</span>
                        <span>
                          {hasPrefix ? (
                            <>
                              <strong className="text-slate-900">{splitText[0]}:</strong>
                              {splitText.slice(1).join(':')}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;