import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Senior AI Solutions Engineer",
      company: "Concretio",
      date: "May 2026-Now",
      location: "Jaipur, Rajasthan",
      current: true,
      tech: ["LangGraph", "OpenAI Realtime API", "FastAPI", "React", "Vertex AI", "Gemini", "Salesforce", "Claude/MCP"],
      highlights: [
        "Voice by Concretio: Built and now leads the team on an AI voice agent platform using OpenAI's Realtime API, including an HR candidate-screening agent synced to Zoho Recruit and 'Aria,' an AI meeting bot that joins Google Meet and posts summaries to Google Chat.",
        "Task Review Tool: Built an AI-powered code review platform for Concretio with multi-provider LLM routing (Claude, GPT-4o, Gemini), OAuth role-based access, and webhook-triggered review automation.",
        "Technical Leadership: Serves as technical lead on standy-bot (an internal Google Chat assistant for standups and Zoho-integrated queries) and Compass AI (an internal RFP-generation platform), reviewing and approving team output on both.",
        "Enterprise Client Support: Reviews architecture and led the Azure Container Apps deployment for a Salesforce and Claude/MCP integration built for a healthcare billing client."
      ]
    },
    {
      role: "Software Engineer",
      company: "Acuvisor Insurance Brokers",
      date: "Sep 2023-May 2026",
      location: "Jaipur, Rajasthan",
      current: false,
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
      date: "Jan 2023-Aug 2023",
      location: "Jaipur, Rajasthan",
      current: false,
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
      date: "Jul 2022-Jan 2023",
      location: "Jaipur, Rajasthan",
      current: false,
      tech: ["MySQL", "MongoDB", "Backend Architecture"],
      highlights: [
        "Codebase Refactoring: Evaluated and optimized existing legacy source code for better modularity and functionality, significantly reducing technical debt for future feature rollouts.",
        "Database Management: Handled core database operations and schema designs using MySQL and MongoDB, ensuring data consistency during critical migration phases."
      ]
    }
  ];

  return (
    <div className="px-8 md:px-16 py-16 md:py-20 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-paper-dim font-semibold mb-3">Track Record</div>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-paper-ink mb-4 text-balance">Professional Experience</h1>
          <p className="text-paper-dim text-base md:text-lg max-w-2xl">
            My career trajectory, from core database management to leading enterprise AI architecture, full-stack migrations, and technical partner integrations.
          </p>
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 py-9 ${index === 0 ? '' : 'border-t border-paper-rule'}`}
          >
            <div>
              <div className={`font-mono text-xs pt-1 ${exp.current ? 'text-accent font-semibold' : 'text-paper-dim'}`}>{exp.date}</div>
              {exp.current && (
                <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-widest text-accent border border-accent px-2 py-0.5 rounded-full">Active</span>
              )}
            </div>

            <div>
              <h3 className="font-serif font-semibold text-2xl text-paper-ink mb-1">{exp.role}</h3>
              <div className="text-accent text-sm font-semibold mb-1">{exp.company}</div>
              <div className="font-mono text-xs text-paper-dim mb-5">{exp.location}</div>

              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tech.map((item, i) => (
                  <span key={i} className="font-mono text-[10px] uppercase px-2.5 py-1 border border-paper-ink rounded-full text-paper-ink">
                    {item}
                  </span>
                ))}
              </div>

              <ul className="space-y-3.5">
                {exp.highlights.map((item, i) => {
                  const splitText = item.split(':');
                  const hasPrefix = splitText.length > 1;
                  return (
                    <li key={i} className="text-paper-body text-[15px] leading-relaxed flex items-start gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">&#10022;</span>
                      <span>
                        {hasPrefix ? (
                          <>
                            <strong className="text-paper-ink">{splitText[0]}:</strong>
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
      </motion.div>
    </div>
  );
};

export default Experience;
