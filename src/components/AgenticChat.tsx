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
            - Role: Full-Stack AI Engineer in Jaipur (3.5+ yrs).
            - Top Skills: Agentic AI, LangGraph, RAG pipelines, Python (FastAPI/Django), AWS, Docker, React.
            - Project 1 (Interviewer.io): Built a real-time AI mock interview SaaS using OpenAI Whisper, RAG, and isolated Docker containers via FastAPI.
            - Project 2 (TubeMind Pro): Built a LangGraph-powered video analysis engine deployed on AWS EC2 using Groq API and pgvector.
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
            className="absolute bottom-16 right-0 w-80 md:w-96 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-medium">
                <Bot size={20} className="text-blue-400" />
                Agentic Chitrank
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-slate-700'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-blue-400" />}
                  </div>
                  {/* Notice the whitespace-pre-wrap class to ensure bullet points format nicely! */}
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[80%] whitespace-pre-wrap ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-slate-800 text-slate-300 border border-slate-700 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-blue-400 animate-pulse" />
                  </div>
                  <div className="p-3 bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              {/* Invisible div to help us auto-scroll to the bottom */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-slate-800 border-t border-slate-700">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my architecture..."
                  className="flex-1 bg-slate-900 text-white placeholder-slate-400 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-slate-700"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-shadow"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
      </motion.button>
    </div>
  );
};

export default AgenticChat;