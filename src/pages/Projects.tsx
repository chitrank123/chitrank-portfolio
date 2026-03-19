import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, BrainCircuit, Mic, LayoutDashboard,
  LineChart, Code2, ScanFace, GitPullRequest, Workflow,
  ChevronDown, ChevronUp, Users, Shield, Database, Cpu, 
  Zap, Server, Globe, FileText, Layers
} from 'lucide-react';

/* ─────────────────────────────────────────────
   INTERVIEWER.IO ARCHITECTURE DIAGRAM
   Full SVG rendering of the TDD architecture
───────────────────────────────────────────── */
const InterviewerArchitectureDiagram = () => (
  <svg
    viewBox="0 0 900 540"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full rounded-xl"
    style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
  >
    <defs>
      <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#60a5fa" />
      </marker>
      <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#34d399" />
      </marker>
      <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" />
      </marker>
      <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
      </marker>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#065f46" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="slateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#334155" stopOpacity="0.6" />
      </linearGradient>
    </defs>

    {/* ── Layer Labels ── */}
    <text x="20" y="24" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">CLIENT LAYER</text>
    <text x="20" y="210" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">ORCHESTRATION LAYER</text>
    <text x="20" y="360" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">EXECUTION LAYER</text>
    <text x="20" y="490" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">DATA LAYER</text>

    {/* ══════════════════════════════
        CLIENT LAYER
    ══════════════════════════════ */}
    {/* Next.js App */}
    <rect x="60" y="35" width="160" height="130" rx="12" fill="url(#blueGrad)" stroke="#3b82f6" strokeWidth="1.5" />
    <text x="140" y="58" fill="#93c5fd" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">NEXT.JS APP</text>
    <text x="140" y="73" fill="#60a5fa" fontSize="9" fontFamily="monospace" textAnchor="middle">App Router + React</text>
    <rect x="75" y="82" width="130" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
    <text x="140" y="96" fill="#bfdbfe" fontSize="8" fontFamily="monospace" textAnchor="middle">MediaRecorder API (Mic)</text>
    <rect x="75" y="107" width="130" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
    <text x="140" y="121" fill="#bfdbfe" fontSize="8" fontFamily="monospace" textAnchor="middle">Interview State Machine</text>
    <rect x="75" y="132" width="130" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
    <text x="140" y="146" fill="#bfdbfe" fontSize="8" fontFamily="monospace" textAnchor="middle">Tailwind CSS + Clerk Auth</text>

    {/* Clerk Auth */}
    <rect x="260" y="55" width="130" height="70" rx="12" fill="url(#slateGrad)" stroke="#475569" strokeWidth="1.5" />
    <text x="325" y="76" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">CLERK AUTH</text>
    <text x="325" y="93" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">JWT Sessions</text>
    <text x="325" y="108" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Social Logins</text>
    <text x="325" y="121" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Webhooks → /sync_user</text>

    {/* User Browser */}
    <rect x="420" y="35" width="130" height="130" rx="12" fill="url(#slateGrad)" stroke="#475569" strokeWidth="1.5" />
    <text x="485" y="58" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">USER BROWSER</text>
    <rect x="435" y="67" width="100" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
    <text x="485" y="80" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Audio Streaming</text>
    <rect x="435" y="90" width="100" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
    <text x="485" y="103" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Waveform Visualizer</text>
    <rect x="435" y="113" width="100" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
    <text x="485" y="126" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Dashboard / Scorecards</text>
    <rect x="435" y="136" width="100" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
    <text x="485" y="149" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Resume Upload (PDF)</text>

    {/* ── Arrow: Next.js → Clerk */}
    <line x1="220" y1="90" x2="258" y2="90" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" strokeDasharray="4,2" />
    {/* ── Arrow: Next.js → User Browser */}
    <line x1="220" y1="100" x2="418" y2="100" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" strokeDasharray="4,2" />

    {/* ══════════════════════════════
        ORCHESTRATION LAYER (FastAPI)
    ══════════════════════════════ */}
    <rect x="60" y="220" width="540" height="115" rx="12" fill="url(#slateGrad)" stroke="#475569" strokeWidth="1.5" />
    <text x="330" y="240" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">FASTAPI ORCHESTRATION LAYER  (Uvicorn + asyncio)</text>

    {/* Endpoint boxes */}
    {[
      { x: 75, label: "POST /start", sub: "Spawn Docker Bot" },
      { x: 210, label: "PATCH /transcript", sub: "Save + Grade" },
      { x: 345, label: "GET /history", sub: "Dashboard Data" },
      { x: 475, label: "POST /sync_user", sub: "Clerk Webhook" },
    ].map((e, i) => (
      <g key={i}>
        <rect x={e.x} y="252" width="118" height="38" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.8" />
        <text x={e.x + 59} y="268" fill="#60a5fa" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="700">{e.label}</text>
        <text x={e.x + 59} y="282" fill="#475569" fontSize="7.5" fontFamily="monospace" textAnchor="middle">{e.sub}</text>
      </g>
    ))}

    {/* Background Task badge */}
    <rect x="210" y="300" width="253" height="22" rx="5" fill="#451a03" stroke="#fb923c" strokeWidth="0.8" />
    <text x="336" y="315" fill="#fb923c" fontSize="8" fontFamily="monospace" textAnchor="middle">⚡ BackgroundTask → Grading Engine (async, non-blocking)</text>

    {/* ── Arrow: Client → FastAPI */}
    <line x1="140" y1="165" x2="200" y2="220" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />
    <text x="152" y="198" fill="#3b82f6" fontSize="8" fontFamily="monospace">HTTPS/REST</text>

    {/* ── Arrow: User Browser → FastAPI */}
    <line x1="485" y1="165" x2="420" y2="220" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />

    {/* ══════════════════════════════
        EXECUTION LAYER  (Docker)
    ══════════════════════════════ */}
    {/* Docker container 1 */}
    <rect x="60" y="370" width="240" height="100" rx="12" fill="url(#greenGrad)" stroke="#10b981" strokeWidth="1.5" />
    <text x="180" y="390" fill="#6ee7b7" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">🐳 AI BOT CONTAINER (User A)</text>

    {[
      { y: 400, label: "Whisper STT", desc: "Transcribes audio + jargon" },
      { y: 420, label: "LLM + RAG", desc: "Resume-aware questions" },
      { y: 440, label: "Edge TTS", desc: "Azure neural voice output" },
      { y: 460, label: "Pydantic Schema", desc: "Strict JSON scorecard" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="72" y={row.y} width="216" height="16" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="0.5" />
        <text x="80" y={row.y + 11} fill="#34d399" fontSize="7.5" fontFamily="monospace" fontWeight="700">{row.label}</text>
        <text x="148" y={row.y + 11} fill="#6ee7b7" fontSize="7" fontFamily="monospace">• {row.desc}</text>
      </g>
    ))}

    {/* Docker container 2 (concurrent) */}
    <rect x="320" y="370" width="200" height="100" rx="12" fill="url(#slateGrad)" stroke="#334155" strokeWidth="1.5" strokeDasharray="5,3" />
    <text x="420" y="390" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">🐳 AI BOT CONTAINER (User N)</text>
    <text x="420" y="415" fill="#475569" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Isolated per session</text>
    <text x="420" y="430" fill="#475569" fontSize="8.5" fontFamily="monospace" textAnchor="middle">No shared memory</text>
    <text x="420" y="445" fill="#475569" fontSize="8.5" fontFamily="monospace" textAnchor="middle">ENV vars injected at runtime:</text>
    <text x="420" y="460" fill="#334155" fontSize="8" fontFamily="monospace" textAnchor="middle">RESUME_TEXT | JOB_ROLE | DIFFICULTY</text>

    {/* Container dots */}
    {[550, 575, 600].map((x, i) => (
      <circle key={i} cx={x} cy="420" r="6" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
    ))}
    <text x="575" y="445" fill="#475569" fontSize="8" fontFamily="monospace" textAnchor="middle">N concurrent sessions</text>

    {/* ── Arrow: FastAPI → Docker */}
    <line x1="200" y1="335" x2="180" y2="368" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
    <text x="188" y="358" fill="#10b981" fontSize="8" fontFamily="monospace">spawn</text>
    <line x1="340" y1="335" x2="380" y2="368" stroke="#334155" strokeWidth="1.2" markerEnd="url(#arrowGreen)" strokeDasharray="3,2" />

    {/* ══════════════════════════════
        DATA LAYER  (MongoDB Atlas)
    ══════════════════════════════ */}
    <rect x="60" y="490" width="540" height="38" rx="10" fill="#0f172a" stroke="#7c3aed" strokeWidth="1.5" />
    <text x="190" y="505" fill="#a78bfa" fontSize="10" fontFamily="monospace" fontWeight="700">MONGODB ATLAS</text>
    <text x="190" y="520" fill="#6d28d9" fontSize="8" fontFamily="monospace">Beanie ODM  |  Motor (async)</text>

    {[
      { x: 310, label: "users", desc: "clerk_id · email · profile" },
      { x: 450, label: "interviews", desc: "transcript · scorecard · status" },
    ].map((col, i) => (
      <g key={i}>
        <rect x={col.x} y="492" width="155" height="30" rx="6" fill="#1e1035" stroke="#7c3aed" strokeWidth="0.8" />
        <text x={col.x + 10} y="505" fill="#a78bfa" fontSize="8" fontFamily="monospace" fontWeight="700">{col.label}</text>
        <text x={col.x + 10} y="518" fill="#6d28d9" fontSize="7.5" fontFamily="monospace">{col.desc}</text>
      </g>
    ))}

    {/* ── Arrow: Docker → MongoDB */}
    <line x1="180" y1="470" x2="250" y2="490" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#arrowPurple)" strokeDasharray="4,2" />
    {/* ── Arrow: FastAPI → MongoDB */}
    <line x1="280" y1="335" x2="380" y2="490" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#arrowPurple)" strokeDasharray="4,2" />

    {/* ══════════════════════════════
        LEGEND
    ══════════════════════════════ */}
    <rect x="650" y="35" width="230" height="180" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
    <text x="765" y="55" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">LEGEND</text>
    {[
      { color: "#60a5fa", label: "HTTPS / REST calls" },
      { color: "#34d399", label: "Docker spawn / async" },
      { color: "#a78bfa", label: "DB read / write" },
      { color: "#fb923c", label: "Background Task" },
    ].map((l, i) => (
      <g key={i}>
        <line x1="665" y1={72 + i * 22} x2="695" y2={72 + i * 22} stroke={l.color} strokeWidth="2" markerEnd="url(#arrowBlue)" strokeDasharray={i === 0 ? "none" : "4,2"} />
        <text x="702" y={76 + i * 22} fill="#64748b" fontSize="9" fontFamily="monospace">{l.label}</text>
      </g>
    ))}

    {/* Tech stack tags */}
    <text x="765" y="170" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">CORE STACK</text>
    {["Next.js · FastAPI · Docker", "Whisper · Edge TTS · LLM", "MongoDB · Beanie · Pydantic", "Clerk · React · Tailwind"].map((t, i) => (
      <text key={i} x="765" y={185 + i * 13} fill="#475569" fontSize="8" fontFamily="monospace" textAnchor="middle">{t}</text>
    ))}
  </svg>
);

/* ─────────────────────────────────────────────
   TUBEMIND PRO ARCHITECTURE DIAGRAM
───────────────────────────────────────────── */
const TubeMindArchitectureDiagram = () => (
  <svg
    viewBox="0 0 900 420"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full rounded-xl"
    style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a0a2e 100%)' }}
  >
    <defs>
      <marker id="tm-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" />
      </marker>
      <marker id="tm-arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#34d399" />
      </marker>
      <marker id="tm-arrowO" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
      </marker>
      <linearGradient id="purpleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c2d12" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
      </linearGradient>
    </defs>

    {/* User input */}
    <rect x="30" y="170" width="110" height="80" rx="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
    <text x="85" y="193" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">USER INPUT</text>
    <text x="85" y="210" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">YouTube URL</text>
    <text x="85" y="224" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">+ Query</text>
    <text x="85" y="238" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">React + FastAPI</text>

    {/* Arrow user → LangGraph */}
    <line x1="140" y1="210" x2="185" y2="210" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#tm-arrow)" />

    {/* LangGraph Decision Engine */}
    <rect x="185" y="130" width="200" height="160" rx="12" fill="url(#purpleGrad2)" stroke="#7c3aed" strokeWidth="2" />
    <text x="285" y="153" fill="#c4b5fd" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">LANGGRAPH ENGINE</text>
    <text x="285" y="168" fill="#7c3aed" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Stateful Decision Graph</text>

    {[
      { y: 182, label: "Router Node", desc: "full vs. timestamp?" },
      { y: 202, label: "Transcript Node", desc: "YT API → yt-dlp fallback" },
      { y: 222, label: "Retriever Node", desc: "pgvector hybrid search" },
      { y: 242, label: "Generator Node", desc: "Groq LPU inference" },
      { y: 262, label: "Memory Node", desc: "Stateful conv. history" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="196" y={row.y} width="178" height="16" rx="3" fill="#1e1035" stroke="#7c3aed" strokeWidth="0.5" />
        <text x="204" y={row.y + 11} fill="#a78bfa" fontSize="7.5" fontFamily="monospace" fontWeight="700">{row.label}</text>
        <text x="275" y={row.y + 11} fill="#6d28d9" fontSize="7" fontFamily="monospace">→ {row.desc}</text>
      </g>
    ))}

    {/* Arrow → Groq */}
    <line x1="385" y1="245" x2="440" y2="245" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#tm-arrowO)" />

    {/* Groq API */}
    <rect x="440" y="200" width="140" height="90" rx="12" fill="url(#orangeGrad)" stroke="#ea580c" strokeWidth="1.5" />
    <text x="510" y="222" fill="#fed7aa" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">GROQ API (LPU)</text>
    <text x="510" y="238" fill="#fb923c" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Sub-second inference</text>
    <text x="510" y="255" fill="#9a3412" fontSize="8" fontFamily="monospace" textAnchor="middle">LLaMA / Mixtral models</text>
    <text x="510" y="270" fill="#9a3412" fontSize="8" fontFamily="monospace" textAnchor="middle">Streaming responses</text>
    <text x="510" y="282" fill="#9a3412" fontSize="8" fontFamily="monospace" textAnchor="middle">~10x faster than GPU</text>

    {/* Arrow → PostgreSQL */}
    <line x1="510" y1="290" x2="510" y2="340" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#tm-arrowG)" />

    {/* PostgreSQL + pgvector */}
    <rect x="420" y="340" width="180" height="60" rx="12" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
    <text x="510" y="362" fill="#6ee7b7" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">PostgreSQL + pgvector</text>
    <text x="510" y="378" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">Hybrid semantic search</text>
    <text x="510" y="391" fill="#065f46" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Timestamp embeddings · Vector similarity</text>

    {/* Arrow LangGraph → pgvector */}
    <path d="M285 290 Q285 340 420 360" stroke="#34d399" strokeWidth="1.2" fill="none" markerEnd="url(#tm-arrowG)" strokeDasharray="4,2" />

    {/* AWS infra box */}
    <rect x="650" y="100" width="220" height="200" rx="12" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" />
    <text x="760" y="122" fill="#fb923c" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">AWS INFRASTRUCTURE</text>

    {[
      { y: 135, label: "EC2 Instance", desc: "Docker Compose host" },
      { y: 160, label: "CloudFront CDN", desc: "Edge caching / HTTPS" },
      { y: 185, label: "Firebase Hosting", desc: "React frontend" },
      { y: 210, label: "Docker Compose", desc: "Service orchestration" },
      { y: 235, label: "FastAPI container", desc: "API + LangGraph" },
      { y: 260, label: "PostgreSQL container", desc: "pgvector + data" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="660" y={row.y} width="198" height="16" rx="3" fill="#1c1917" stroke="#57534e" strokeWidth="0.5" />
        <text x="668" y={row.y + 11} fill="#fb923c" fontSize="7.5" fontFamily="monospace" fontWeight="700">{row.label}</text>
        <text x="755" y={row.y + 11} fill="#78716c" fontSize="7" fontFamily="monospace">• {row.desc}</text>
      </g>
    ))}

    {/* Arrow → AWS */}
    <line x1="580" y1="245" x2="648" y2="200" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#tm-arrowO)" strokeDasharray="4,2" />
    <text x="598" y="230" fill="#f97316" fontSize="8" fontFamily="monospace">deploy</text>

    {/* Pipeline label */}
    <rect x="30" y="35" width="600" height="25" rx="6" fill="#1e1035" stroke="#4c1d95" strokeWidth="1" />
    <text x="330" y="52" fill="#7c3aed" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">
      TUBEMIND PRO  —  Agentic Video Analysis Pipeline  —  FastAPI · LangGraph · Groq · pgvector · AWS EC2
    </text>

    {/* Transcript pipeline label */}
    <text x="285" y="320" fill="#475569" fontSize="8" fontFamily="monospace" textAnchor="middle">Fail-safe: YouTube Transcript API → yt-dlp fallback → chunked embeddings</text>
  </svg>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  const featuredProjects = [
    {
      title: "Interviewer.io – Real-Time AI Mock Interview Platform",
      role: "Full-Stack AI Engineer",
      icon: <Mic className="text-blue-500" size={28} />,
      description:
        "A B2C SaaS platform offering real-time, voice-based mock interviews tailored to a user's actual resume using full-duplex voice pipelines and RAG. Built on a decoupled microservice architecture across three distinct layers: Client (Next.js), Orchestration (FastAPI), and Execution (Dockerized AI Bots).",
      achievements: [
        "Low-Latency Voice Interactions: Engineered a voice interface using OpenAI Whisper for accurate tech-jargon transcription (handles Kubernetes, CI/CD, framework names) and Edge TTS (Microsoft Azure Neural) for ultra-realistic AI audio with minimal latency.",
        "Contextual AI (RAG): Implemented Retrieval-Augmented Generation to parse PDF resumes and inject text into the LLM system prompt — enabling targeted questions like 'You used FastAPI in 2023, how did you handle DB connection pooling?'",
        "Containerized Session Management: FastAPI dynamically spawns isolated Docker containers per session injecting RESUME_TEXT, JOB_ROLE and DIFFICULTY as environment variables, preventing cross-user memory leaks entirely.",
        "Async Grading Engine: Created a non-blocking evaluation pipeline using FastAPI BackgroundTasks and Pydantic schemas to force the LLM into strict JSON scorecard output (overall_score, skill_breakdown, key_strengths, areas_for_improvement).",
        "Idempotent Auth: Clerk webhook /sync_user checks for existing Clerk IDs before DB writes, preventing duplicate records on repeated logins. CORS explicitly configured for Next.js origins."
      ],
      tech: ["Next.js", "FastAPI", "MongoDB", "Docker", "OpenAI Whisper", "Edge TTS", "Clerk", "Pydantic", "Beanie ODM"],
      link: "#",
      github: "https://github.com/chitrank123",
      diagram: <InterviewerArchitectureDiagram />,
      contributeText:
        "We are actively looking for contributors! Current open issues include improving RAG accuracy with chunked resume embeddings, optimizing Docker container spin-up latency, adding real-time audio waveform visualization, and enhancing the Pydantic scorecard schema with follow-up question generation.",
      techDeepDive: [
        { icon: <Mic size={16} />, title: "Whisper STT", detail: "Domain-specific jargon (Next.js, Kubernetes, CI/CD) transcribed accurately. Outperforms browser native STT on technical vocabulary." },
        { icon: <FileText size={16} />, title: "RAG Pipeline", detail: "PDF parsed to raw text → injected into LLM system prompt → personalized interview questions based on actual work history." },
        { icon: <Zap size={16} />, title: "Edge TTS", detail: "Microsoft Azure Neural network. Empathetic intonation. Near-zero latency. No enterprise API costs." },
        { icon: <Shield size={16} />, title: "Pydantic Schemas", detail: "Forces LLM into strict JSON output for scorecard rendering. Prevents hallucinated or malformed grading responses." },
        { icon: <Database size={16} />, title: "MongoDB + Beanie", detail: "Chosen for nested transcript arrays and dynamic scorecard objects that lack strict tabular relationships." },
        { icon: <Server size={16} />, title: "Docker Isolation", detail: "One container per interview session. ENV-injected context. Zero shared memory between concurrent users." },
      ]
    },
    {
      title: "TubeMind Pro – Agentic AI Video Analysis",
      role: "AI Architect",
      icon: <BrainCircuit className="text-purple-500" size={28} />,
      description:
        "Built a stateful decision-making engine using LangGraph that intelligently switches between full-video summarization and timestamp-specific retrieval based on query intent. Deployed on AWS EC2 with CloudFront and a fail-safe transcript pipeline.",
      achievements: [
        "Stateful LangGraph Engine: Multi-node decision graph with Router, Transcript, Retriever, Generator, and Memory nodes that determine the optimal retrieval strategy per query.",
        "Cloud Infrastructure: Containerized microservices via Docker Compose on AWS EC2 with CloudFront CDN for edge caching and HTTPS termination. React frontend on Firebase Hosting.",
        "Robust Transcript Pipeline: YouTube Transcript API as primary source with automated yt-dlp fallback. Transcripts chunked and embedded into pgvector for hybrid semantic search.",
        "Sub-second Inference via Groq LPU: Integrated Groq API (LPU hardware) achieving ~10x faster inference than GPU-based providers. Streaming responses for low perceived latency.",
        "pgvector Hybrid Search: Timestamp-aware embeddings stored in PostgreSQL with pgvector. Supports both semantic similarity search and exact-match timestamp retrieval."
      ],
      tech: ["FastAPI", "LangGraph", "AWS EC2", "Docker Compose", "Groq API", "PostgreSQL", "pgvector", "Firebase", "CloudFront"],
      link: "https://tubemind-pro.web.app",
      github: "https://github.com/chitrank123",
      diagram: <TubeMindArchitectureDiagram />,
      contributeText:
        "Help expand TubeMind Pro! Open issues include adding multi-language transcript support, improving yt-dlp fallback reliability, adding a LangSmith tracing integration for observability, and building a playlist-level summarization feature.",
      techDeepDive: [
        { icon: <Layers size={16} />, title: "LangGraph Nodes", detail: "Router → Transcript → Retriever → Generator → Memory. Each node is a pure function with typed state. Enables conditional branching." },
        { icon: <Zap size={16} />, title: "Groq LPU", detail: "Language Processing Unit hardware. Sub-second LLaMA / Mixtral inference. Streaming tokens for responsive UX." },
        { icon: <Database size={16} />, title: "pgvector", detail: "Hybrid search combining vector cosine similarity with timestamp metadata filtering. Built into PostgreSQL." },
        { icon: <Globe size={16} />, title: "CloudFront CDN", detail: "Edge caching for static assets + HTTPS termination. Reduces EC2 origin load for repeated requests." },
        { icon: <Server size={16} />, title: "Docker Compose", detail: "FastAPI + PostgreSQL + worker services orchestrated in a single Compose file on EC2. Easy horizontal scaling." },
        { icon: <Cpu size={16} />, title: "yt-dlp Fallback", detail: "When YouTube Transcript API fails (unavailable, age-gated), yt-dlp extracts auto-generated captions as fallback." },
      ]
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Featured Architecture
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Deep dives into my production-grade SaaS platforms, AI systems, and open-source initiatives.
          </p>
        </div>

        {/* ── Featured Projects ── */}
        <div className="flex flex-col gap-12 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all"
            >
              {/* Header */}
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
                <div className="flex gap-3 flex-shrink-0">
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="p-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 transition-colors">
                    <Github size={20} />
                  </a>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer"
                      className="p-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-700 text-lg mb-8 leading-relaxed max-w-4xl">{project.description}</p>

              {/* Achievements */}
              <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Architectural Achievements</h4>
                <ul className="space-y-3 mb-6">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="text-slate-700 flex items-start gap-3">
                      <span className="text-blue-500 mt-1 flex-shrink-0">✦</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 bg-slate-900 text-slate-50 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand toggle */}
              <button
                onClick={() => toggleExpand(project.title)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
              >
                <Workflow size={20} className="text-blue-500" />
                {expandedProject === project.title
                  ? "Hide Architecture & Contributions"
                  : "Explore Architecture & Contribute"}
                {expandedProject === project.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {/* Expandable section */}
              <AnimatePresence>
                {expandedProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-6"
                  >
                    <div className="p-6 md:p-8 bg-slate-900 rounded-2xl text-slate-300 border border-slate-800">

                      {/* Architecture diagram */}
                      <div className="mb-8">
                        <h4 className="text-white font-bold text-xl flex items-center gap-2 mb-4">
                          <Workflow size={24} className="text-blue-400" /> System Architecture
                        </h4>
                        <div className="w-full rounded-xl overflow-hidden border border-slate-700 mb-4">
                          {project.diagram}
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                          This diagram outlines the data flow from the client interface through the API orchestration layer, into isolated AI execution containers, and back to the persistent data layer.
                        </p>
                      </div>

                      {/* Tech deep dive */}
                      <div className="mb-8 border-t border-slate-800 pt-8">
                        <h4 className="text-white font-bold text-xl flex items-center gap-2 mb-5">
                          <Cpu size={24} className="text-blue-400" /> Technical Deep Dive
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {project.techDeepDive.map((item, i) => (
                            <div key={i} className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                              <div className="flex items-center gap-2 mb-2 text-blue-400">
                                {item.icon}
                                <span className="font-bold text-sm text-white">{item.title}</span>
                              </div>
                              <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contribute section */}
                      <div className="border-t border-slate-800 pt-8">
                        <h4 className="text-white font-bold text-xl flex items-center gap-2 mb-4">
                          <GitPullRequest size={24} className="text-emerald-400" /> Open Source & Contributions
                        </h4>
                        <p className="mb-6 leading-relaxed text-slate-300">{project.contributeText}</p>
                        <div className="flex flex-wrap gap-4">
                          <a href={`${project.github}/issues`} target="_blank" rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 transition-colors font-medium">
                            <Users size={18} /> View Open Issues
                          </a>
                          <a href={`${project.github}/pulls`} target="_blank" rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors font-medium">
                            <Code2 size={18} /> Read Contributing.md
                          </a>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* ── Other Projects Grid ── */}
        <div className="border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Utility Projects & Scripts</h2>
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
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="text-slate-400 group-hover:text-slate-900 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[60px]">{project.description}</p>
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