import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

const AgenticChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm Chitrank's AI assistant. Ask me anything about his architecture experience, projects, or resume." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Reference for Auto-Scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    
    // Add the user message AND a blank placeholder for the AI's streaming response
    setMessages(prev => [
      ...prev, 
      { role: 'user', text: userMsg },
      { role: 'ai', text: '' } 
    ]);
    
    setIsLoading(true);

    try {
      // 1. Map our React chat history into the format Groq expects!
      // We change 'ai' to 'assistant' so the LLM knows what it previously said.
      const chatHistory = messages.map(msg => ({
        role: (msg.role === 'ai' ? 'assistant' : 'user') as 'assistant' | 'user',
        content: msg.text
      }));

      const stream = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        temperature: 0.2, // Lowered temperature to stop it from making up definitions
        stream: true, 
        messages: [
          {
            role: "system" as const,
            content: `You are Chitrank Tak's personal AI Assistant built into his portfolio. 
            
            CRITICAL RULES:
            1. IDENTITY: You are an ASSISTANT. NEVER speak in the first person as Chitrank (Never say "I am a Full-Stack Engineer" or "my skills"). Always refer to him as "Chitrank" or "he".
            2. NO TEXTBOOK DEFINITIONS: If asked about his AI skills, DO NOT define what LangGraph or RAG means. Instead, state exactly what Chitrank BUILT with them (e.g., "Chitrank used LangGraph to build TubeMind Pro...").
            3. CONCISENESS: Answer in 1 to 3 short sentences. Use bullet points only if listing 3+ specific items.
            4. BOUNDARIES: If the user asks something outside the context below, say: "I don't have that info, but you can email Chitrank at cttak365@gmail.com!"

            CHITRANK's CONTEXT:
            - Role: Senior AI Solutions Engineer at Concretio, based in Jaipur (4+ yrs experience). Previously Software Engineer at Acuvisor Insurance Brokers (Sep 2023-May 2026).
            - Top Skills: Agentic AI, LangGraph, RAG pipelines, real-time voice AI, Python (FastAPI/Django), AWS, Docker, React.
            - Project 1 (Voice by Concretio): Built and now leads the team on an AI voice agent platform using OpenAI's Realtime API - an HR screening agent synced to Zoho Recruit, plus "Aria," a Google Meet bot that summarizes calls to Google Chat.
            - Project 2 (Task Review Tool, Concretio): Built an AI-powered code review platform for Concretio with multi-provider LLM routing (Claude, GPT-4o, Gemini), OAuth role-based access, and webhook-triggered review pipelines.
            - Project 3 (Interviewer.io): Built a real-time AI mock interview SaaS using OpenAI Whisper, RAG, and isolated Docker containers via FastAPI.
            - Project 4 (MMV Agent): Built a self-correcting LangGraph state machine at Acuvisor that matches government vehicle data to internal insurer databases, automating insurance quoting.
            - Also technical lead on standy-bot (internal Google Chat assistant) and Compass AI (internal RFP-generation platform) at Concretio, and reviews architecture plus led Azure deployment for a healthcare billing client's Salesforce/Claude MCP integration.
            - Work (Acuvisor): Spearheaded a GenAI chatbot, reduced AWS costs by 40%, cut API latency by 25%, reduced data sync lag by 40% with WebSockets.
            - Education: B.Tech RTU (8.5 GPA). Active in GDG DevFest Jaipur.`
          },
          // 2. Spread the entire chat history here so the AI has a memory!
          ...chatHistory,
          // 3. Add the brand new message the user just typed
          { role: "user" as const, content: userMsg }
        ]
      });

      setIsLoading(false);

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        
        setMessages(prev => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          newMessages[lastIndex] = {
            ...newMessages[lastIndex],
            text: newMessages[lastIndex].text + content
          };
          return newMessages;
        });
      }

    } catch (error: any) {
      console.error("Groq Error Details:", error);
      let errorMessage = "Sorry, my neural network is resting right now. Try emailing Chitrank instead!";
      
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = errorMessage;
        return newMessages;
      });
      setIsLoading(false);
    }
  };

return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            // MOBILE FIX: w-[calc(100vw-3rem)] ensures it fits perfectly on phones, h-[60vh] prevents keyboard blocking
            className="absolute bottom-16 right-0 w-[calc(100vw-3rem)] md:w-96 h-[60vh] md:h-[500px] bg-panel rounded-2xl shadow-2xl border border-panel-line overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-panel-line/30 border-b border-panel-line flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2 text-panel-text font-mono text-sm md:text-base">
                <Bot size={20} className="text-accent" />
                Agentic Chitrank
              </div>
              <button onClick={() => setIsOpen(false)} className="text-panel-dim hover:text-panel-text transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex items-start gap-2 md:gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-accent' : 'bg-panel-line/40'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-panel" /> : <Bot size={14} className="text-accent" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-xs md:text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${msg.role === 'user' ? 'bg-accent text-panel rounded-tr-sm' : 'bg-panel-line/30 text-panel-dim border border-panel-line rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-panel-line/40 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-accent animate-pulse" />
                  </div>
                  <div className="p-3 bg-panel-line/30 border border-panel-line rounded-2xl rounded-tl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-panel-dim rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-panel-dim rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-panel-dim rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-panel-line/30 border-t border-panel-line shrink-0">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-panel text-panel-text placeholder-panel-dim text-xs md:text-sm rounded-xl px-4 py-3 md:py-2.5 focus:outline-none focus:ring-1 focus:ring-accent border border-panel-line"
                />
                <button type="submit" disabled={isLoading} className="p-3 md:p-2.5 bg-accent text-panel rounded-xl hover:opacity-90 disabled:opacity-50">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-accent/25 transition-shadow"
      >
        {isOpen ? <X size={20} className="text-panel" /> : <MessageSquare size={20} className="text-panel" />}
      </motion.button>
    </div>
  );
};

export default AgenticChat;