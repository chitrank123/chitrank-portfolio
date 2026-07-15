import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, BrainCircuit, Mic, LayoutDashboard,
  LineChart, Code2, ScanFace, GitPullRequest, Workflow,
  ChevronDown, ChevronUp, Shield, Database, Cpu,
  Zap, Server, Globe, FileText, Layers, Download, KeyRound, Webhook,
  Radio, Compass, MessageSquare, ShieldCheck, Users
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

    <text x="20" y="24" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">CLIENT LAYER</text>
    <text x="20" y="210" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">ORCHESTRATION LAYER</text>
    <text x="20" y="360" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">EXECUTION LAYER</text>
    <text x="20" y="490" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">DATA LAYER</text>

    <rect x="60" y="35" width="160" height="130" rx="12" fill="url(#blueGrad)" stroke="#3b82f6" strokeWidth="1.5" />
    <text x="140" y="58" fill="#93c5fd" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">NEXT.JS APP</text>
    <text x="140" y="73" fill="#60a5fa" fontSize="9" fontFamily="monospace" textAnchor="middle">App Router + React</text>
    <rect x="75" y="82" width="130" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
    <text x="140" y="96" fill="#bfdbfe" fontSize="8" fontFamily="monospace" textAnchor="middle">MediaRecorder API (Mic)</text>
    <rect x="75" y="107" width="130" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
    <text x="140" y="121" fill="#bfdbfe" fontSize="8" fontFamily="monospace" textAnchor="middle">Interview State Machine</text>
    <rect x="75" y="132" width="130" height="20" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" />
    <text x="140" y="146" fill="#bfdbfe" fontSize="8" fontFamily="monospace" textAnchor="middle">Tailwind CSS + Clerk Auth</text>

    <rect x="260" y="55" width="130" height="70" rx="12" fill="url(#slateGrad)" stroke="#475569" strokeWidth="1.5" />
    <text x="325" y="76" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">CLERK AUTH</text>
    <text x="325" y="93" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">JWT Sessions</text>
    <text x="325" y="108" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Social Logins</text>
    <text x="325" y="121" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Webhooks &rarr; /sync_user</text>

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

    <line x1="220" y1="90" x2="258" y2="90" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" strokeDasharray="4,2" />
    <line x1="220" y1="100" x2="418" y2="100" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" strokeDasharray="4,2" />

    <rect x="60" y="220" width="540" height="115" rx="12" fill="url(#slateGrad)" stroke="#475569" strokeWidth="1.5" />
    <text x="330" y="240" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">FASTAPI ORCHESTRATION LAYER  (Uvicorn + asyncio)</text>

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

    <rect x="210" y="300" width="253" height="22" rx="5" fill="#451a03" stroke="#fb923c" strokeWidth="0.8" />
    <text x="336" y="315" fill="#fb923c" fontSize="8" fontFamily="monospace" textAnchor="middle">&#9889; BackgroundTask &rarr; Grading Engine (async, non-blocking)</text>

    <line x1="140" y1="165" x2="200" y2="220" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />
    <text x="152" y="198" fill="#3b82f6" fontSize="8" fontFamily="monospace">HTTPS/REST</text>

    <line x1="485" y1="165" x2="420" y2="220" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />

    <rect x="60" y="370" width="240" height="100" rx="12" fill="url(#greenGrad)" stroke="#10b981" strokeWidth="1.5" />
    <text x="180" y="390" fill="#6ee7b7" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">AI BOT CONTAINER (User A)</text>

    {[
      { y: 400, label: "Whisper STT", desc: "Transcribes audio + jargon" },
      { y: 420, label: "LLM + RAG", desc: "Resume-aware questions" },
      { y: 440, label: "Edge TTS", desc: "Azure neural voice output" },
      { y: 460, label: "Pydantic Schema", desc: "Strict JSON scorecard" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="72" y={row.y} width="216" height="16" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="0.5" />
        <text x="80" y={row.y + 11} fill="#34d399" fontSize="7.5" fontFamily="monospace" fontWeight="700">{row.label}</text>
        <text x="148" y={row.y + 11} fill="#6ee7b7" fontSize="7" fontFamily="monospace">&bull; {row.desc}</text>
      </g>
    ))}

    <rect x="320" y="370" width="200" height="100" rx="12" fill="url(#slateGrad)" stroke="#334155" strokeWidth="1.5" strokeDasharray="5,3" />
    <text x="420" y="390" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">AI BOT CONTAINER (User N)</text>
    <text x="420" y="415" fill="#475569" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Isolated per session</text>
    <text x="420" y="430" fill="#475569" fontSize="8.5" fontFamily="monospace" textAnchor="middle">No shared memory</text>
    <text x="420" y="445" fill="#475569" fontSize="8.5" fontFamily="monospace" textAnchor="middle">ENV vars injected at runtime:</text>
    <text x="420" y="460" fill="#334155" fontSize="8" fontFamily="monospace" textAnchor="middle">RESUME_TEXT | JOB_ROLE | DIFFICULTY</text>

    {[550, 575, 600].map((x, i) => (
      <circle key={i} cx={x} cy="420" r="6" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
    ))}
    <text x="575" y="445" fill="#475569" fontSize="8" fontFamily="monospace" textAnchor="middle">N concurrent sessions</text>

    <line x1="200" y1="335" x2="180" y2="368" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
    <text x="188" y="358" fill="#10b981" fontSize="8" fontFamily="monospace">spawn</text>
    <line x1="340" y1="335" x2="380" y2="368" stroke="#334155" strokeWidth="1.2" markerEnd="url(#arrowGreen)" strokeDasharray="3,2" />

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

    <line x1="180" y1="470" x2="250" y2="490" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#arrowPurple)" strokeDasharray="4,2" />
    <line x1="280" y1="335" x2="380" y2="490" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#arrowPurple)" strokeDasharray="4,2" />

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

    <rect x="30" y="170" width="110" height="80" rx="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
    <text x="85" y="193" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">USER INPUT</text>
    <text x="85" y="210" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">YouTube URL</text>
    <text x="85" y="224" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">+ Query</text>
    <text x="85" y="238" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">React + FastAPI</text>

    <line x1="140" y1="210" x2="185" y2="210" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#tm-arrow)" />

    <rect x="185" y="130" width="200" height="160" rx="12" fill="url(#purpleGrad2)" stroke="#7c3aed" strokeWidth="2" />
    <text x="285" y="153" fill="#c4b5fd" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">LANGGRAPH ENGINE</text>
    <text x="285" y="168" fill="#7c3aed" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Stateful Decision Graph</text>

    {[
      { y: 182, label: "Router Node", desc: "full vs. timestamp?" },
      { y: 202, label: "Transcript Node", desc: "YT API &rarr; yt-dlp fallback" },
      { y: 222, label: "Retriever Node", desc: "pgvector hybrid search" },
      { y: 242, label: "Generator Node", desc: "Groq LPU inference" },
      { y: 262, label: "Memory Node", desc: "Stateful conv. history" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="196" y={row.y} width="178" height="16" rx="3" fill="#1e1035" stroke="#7c3aed" strokeWidth="0.5" />
        <text x="204" y={row.y + 11} fill="#a78bfa" fontSize="7.5" fontFamily="monospace" fontWeight="700">{row.label}</text>
        <text x="275" y={row.y + 11} fill="#6d28d9" fontSize="7" fontFamily="monospace">&rarr; {row.desc}</text>
      </g>
    ))}

    <line x1="385" y1="245" x2="440" y2="245" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#tm-arrowO)" />

    <rect x="440" y="200" width="140" height="90" rx="12" fill="url(#orangeGrad)" stroke="#ea580c" strokeWidth="1.5" />
    <text x="510" y="222" fill="#fed7aa" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">GROQ API (LPU)</text>
    <text x="510" y="238" fill="#fb923c" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Sub-second inference</text>
    <text x="510" y="255" fill="#9a3412" fontSize="8" fontFamily="monospace" textAnchor="middle">LLaMA / Mixtral models</text>
    <text x="510" y="270" fill="#9a3412" fontSize="8" fontFamily="monospace" textAnchor="middle">Streaming responses</text>
    <text x="510" y="282" fill="#9a3412" fontSize="8" fontFamily="monospace" textAnchor="middle">~10x faster than GPU</text>

    <line x1="510" y1="290" x2="510" y2="340" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#tm-arrowG)" />

    <rect x="420" y="340" width="180" height="60" rx="12" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
    <text x="510" y="362" fill="#6ee7b7" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">PostgreSQL + pgvector</text>
    <text x="510" y="378" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">Hybrid semantic search</text>
    <text x="510" y="391" fill="#065f46" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Timestamp embeddings &middot; Vector similarity</text>

    <path d="M285 290 Q285 340 420 360" stroke="#34d399" strokeWidth="1.2" fill="none" markerEnd="url(#tm-arrowG)" strokeDasharray="4,2" />

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
        <text x="755" y={row.y + 11} fill="#78716c" fontSize="7" fontFamily="monospace">&bull; {row.desc}</text>
      </g>
    ))}

    <line x1="580" y1="245" x2="648" y2="200" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#tm-arrowO)" strokeDasharray="4,2" />
    <text x="598" y="230" fill="#f97316" fontSize="8" fontFamily="monospace">deploy</text>

    <rect x="30" y="35" width="600" height="25" rx="6" fill="#1e1035" stroke="#4c1d95" strokeWidth="1" />
    <text x="330" y="52" fill="#7c3aed" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">
      TUBEMIND PRO : Agentic Video Analysis Pipeline : FastAPI, LangGraph, Groq, pgvector, AWS EC2
    </text>

    <text x="285" y="320" fill="#475569" fontSize="8" fontFamily="monospace" textAnchor="middle">Fail-safe: YouTube Transcript API &rarr; yt-dlp fallback &rarr; chunked embeddings</text>
  </svg>
);

/* ─────────────────────────────────────────────
   MMV AGENT WORKFLOW ARCHITECTURE DIAGRAM
───────────────────────────────────────────── */
const MMVAgentArchitectureDiagram = () => (
  <svg viewBox="0 0 900 450" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
    <defs>
      <marker id="arrowBlue2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#60a5fa" /></marker>
      <marker id="arrowGreen2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399" /></marker>
      <marker id="arrowRed2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ef4444" /></marker>
    </defs>

    <rect x="30" y="50" width="120" height="60" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <text x="90" y="85" fill="#f8fafc" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Client App</text>

    <line x1="150" y1="80" x2="220" y2="80" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowBlue2)" />
    <text x="185" y="70" fill="#60a5fa" fontSize="10" fontFamily="monospace" textAnchor="middle">Req</text>

    <rect x="220" y="50" width="140" height="60" rx="8" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
    <text x="290" y="85" fill="#eff6ff" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Express API</text>

    <line x1="360" y1="80" x2="430" y2="80" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowGreen2)" />
    <text x="395" y="70" fill="#34d399" fontSize="10" fontFamily="monospace" textAnchor="middle">Session</text>

    <rect x="430" y="50" width="120" height="60" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
    <text x="490" y="85" fill="#d1fae5" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MongoDB</text>

    <line x1="290" y1="110" x2="290" y2="150" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowBlue2)" />

    <rect x="220" y="150" width="140" height="60" rx="8" fill="#c2410c" stroke="#f97316" strokeWidth="2" />
    <text x="290" y="185" fill="#ffedd5" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">FLA Service</text>

    <rect x="400" y="140" width="450" height="250" rx="12" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6,4" />
    <text x="625" y="170" fill="#c4b5fd" fontSize="14" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Agentic AI State Machine (LangGraph)</text>

    <line x1="360" y1="180" x2="420" y2="180" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowBlue2)" />
    <text x="380" y="170" fill="#8b5cf6" fontSize="10" fontFamily="monospace" textAnchor="middle">runMmv()</text>

    <rect x="430" y="200" width="170" height="50" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
    <text x="515" y="230" fill="#e0e7ff" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">1. Query Gen (Groq)</text>

    <line x1="600" y1="225" x2="650" y2="225" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowBlue2)" />

    <rect x="650" y="200" width="170" height="50" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
    <text x="735" y="230" fill="#e0e7ff" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">2. SQL Validator</text>

    <line x1="735" y1="250" x2="735" y2="280" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowBlue2)" />

    <rect x="650" y="280" width="170" height="50" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
    <text x="735" y="310" fill="#e0e7ff" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">3. Executor</text>

    <line x1="650" y1="305" x2="600" y2="305" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowBlue2)" />

    <rect x="430" y="280" width="170" height="50" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
    <text x="515" y="310" fill="#e0e7ff" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">4. Reviewer (Groq)</text>

    <line x1="735" y1="330" x2="735" y2="370" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed2)" />
    <rect x="650" y="370" width="170" height="50" rx="8" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
    <text x="735" y="400" fill="#fee2e2" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MySQL Database</text>

    <path d="M430 305 Q 260 305 260 210" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowGreen2)"/>
    <text x="320" y="295" fill="#34d399" fontSize="10" fontFamily="monospace">Matched Results JSON</text>
  </svg>
);

/* ─────────────────────────────────────────────
   CONCRETIO TASK REVIEW TOOL ARCHITECTURE DIAGRAM
───────────────────────────────────────────── */
const ConcretioArchitectureDiagram = () => (
  <svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'linear-gradient(135deg, #0b0d10 0%, #1a1108 100%)' }}>
    <defs>
      <marker id="cq-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ff7a33" /></marker>
      <marker id="cq-arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#3ddc97" /></marker>
    </defs>

    <rect x="30" y="150" width="140" height="80" rx="10" fill="#161a1f" stroke="#3ddc97" strokeWidth="1.5" />
    <text x="100" y="180" fill="#3ddc97" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">GITHUB EVENT</text>
    <text x="100" y="198" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">PR opened / commit</text>
    <text x="100" y="212" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">[TICKET]-REVIEW tag</text>

    <line x1="170" y1="190" x2="230" y2="190" stroke="#3ddc97" strokeWidth="1.5" markerEnd="url(#cq-arrowG)" />

    <rect x="230" y="120" width="220" height="140" rx="10" fill="#1a1108" stroke="#ff7a33" strokeWidth="1.5" />
    <text x="340" y="142" fill="#ff7a33" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">FASTAPI WEBHOOK ROUTER</text>
    <rect x="245" y="155" width="190" height="18" rx="3" fill="#0e0a06" stroke="#ff7a33" strokeWidth="0.6" />
    <text x="340" y="167" fill="#ffb98a" fontSize="8" fontFamily="monospace" textAnchor="middle">OAuth + role-based access control</text>
    <rect x="245" y="180" width="190" height="18" rx="3" fill="#0e0a06" stroke="#ff7a33" strokeWidth="0.6" />
    <text x="340" y="192" fill="#ffb98a" fontSize="8" fontFamily="monospace" textAnchor="middle">Resolve user's provider + API key</text>
    <rect x="245" y="205" width="190" height="18" rx="3" fill="#0e0a06" stroke="#ff7a33" strokeWidth="0.6" />
    <text x="340" y="217" fill="#ffb98a" fontSize="8" fontFamily="monospace" textAnchor="middle">Auto-trigger review session</text>
    <rect x="245" y="230" width="190" height="18" rx="3" fill="#0e0a06" stroke="#ff7a33" strokeWidth="0.6" />
    <text x="340" y="242" fill="#ffb98a" fontSize="8" fontFamily="monospace" textAnchor="middle">Email notify on completion</text>

    <line x1="450" y1="190" x2="510" y2="190" stroke="#ff7a33" strokeWidth="1.5" markerEnd="url(#cq-arrow)" />

    <rect x="510" y="100" width="200" height="180" rx="10" fill="#161a1f" stroke="#3ddc97" strokeWidth="1.5" />
    <text x="610" y="122" fill="#3ddc97" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">MULTI-PROVIDER LLM ROUTER</text>
    {[
      { y: 140, label: "Claude", desc: "claude-sonnet" },
      { y: 168, label: "GPT-4o", desc: "openai" },
      { y: 196, label: "Gemini", desc: "google-generativeai" },
      { y: 224, label: "json_repair", desc: "malformed output fallback" },
      { y: 252, label: "Provider chosen", desc: "per-user setting" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="522" y={row.y} width="176" height="20" rx="3" fill="#0c0f12" stroke="#3ddc97" strokeWidth="0.5" />
        <text x="530" y={row.y + 14} fill="#3ddc97" fontSize="8" fontFamily="monospace" fontWeight="700">{row.label}</text>
        <text x="605" y={row.y + 14} fill="#8a9099" fontSize="7.5" fontFamily="monospace">{row.desc}</text>
      </g>
    ))}

    <line x1="710" y1="190" x2="770" y2="190" stroke="#3ddc97" strokeWidth="1.5" markerEnd="url(#cq-arrowG)" />

    <rect x="770" y="150" width="100" height="80" rx="10" fill="#161a1f" stroke="#8a9099" strokeWidth="1.5" />
    <text x="820" y="180" fill="#e7e9ea" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">EMAIL</text>
    <text x="820" y="196" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">SMTP async</text>
    <text x="820" y="210" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">HTML template</text>

    <rect x="30" y="30" width="640" height="24" rx="6" fill="#1a1108" stroke="#ff7a33" strokeWidth="1" />
    <text x="350" y="46" fill="#ff7a33" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">
      TASK REVIEW TOOL (CONCRETIO) : FastAPI, OAuth, Multi-LLM Routing, Webhooks
    </text>

    <text x="340" y="300" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">Admin controls per-user feature + provider access; first registered user auto-becomes admin</text>
  </svg>
);

/* ─────────────────────────────────────────────
   VOICE BY CONCRETIO ARCHITECTURE DIAGRAM
───────────────────────────────────────────── */
const VoiceByConcretioDiagram = () => (
  <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-xl" style={{ background: 'linear-gradient(135deg, #0b0d10 0%, #0a1a14 100%)' }}>
    <defs>
      <marker id="vc-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#3ddc97" /></marker>
      <marker id="vc-arrowO" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ff7a33" /></marker>
    </defs>

    <rect x="30" y="150" width="150" height="90" rx="10" fill="#161a1f" stroke="#ff7a33" strokeWidth="1.5" />
    <text x="105" y="175" fill="#ff7a33" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">TWO SURFACES</text>
    <text x="105" y="195" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">HR screening agent</text>
    <text x="105" y="210" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">"Aria" meeting bot</text>
    <text x="105" y="225" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">React + FastAPI</text>

    <line x1="180" y1="195" x2="240" y2="195" stroke="#ff7a33" strokeWidth="1.5" markerEnd="url(#vc-arrowO)" />

    <rect x="240" y="120" width="220" height="160" rx="10" fill="#0e1a14" stroke="#3ddc97" strokeWidth="1.5" />
    <text x="350" y="142" fill="#3ddc97" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="700">OPENAI REALTIME API</text>
    <text x="350" y="158" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">gpt-4o-realtime-preview</text>
    {[
      { y: 172, label: "Speech-to-speech", desc: "no STT/TTS round-trip" },
      { y: 194, label: "Interrupt handling", desc: "barge-in aware" },
      { y: 216, label: "GPT-4o-mini", desc: "post-call report gen" },
      { y: 238, label: "SQLAlchemy", desc: "SQLite local / Postgres prod" },
    ].map((row, i) => (
      <g key={i}>
        <rect x="252" y={row.y} width="196" height="18" rx="3" fill="#0c1410" stroke="#3ddc97" strokeWidth="0.5" />
        <text x="260" y={row.y + 13} fill="#3ddc97" fontSize="8" fontFamily="monospace" fontWeight="700">{row.label}</text>
        <text x="358" y={row.y + 13} fill="#8a9099" fontSize="7.5" fontFamily="monospace">{row.desc}</text>
      </g>
    ))}

    <line x1="460" y1="160" x2="520" y2="160" stroke="#3ddc97" strokeWidth="1.5" markerEnd="url(#vc-arrow)" />
    <line x1="460" y1="230" x2="520" y2="230" stroke="#ff7a33" strokeWidth="1.5" markerEnd="url(#vc-arrowO)" />

    <rect x="520" y="120" width="180" height="70" rx="10" fill="#161a1f" stroke="#8a9099" strokeWidth="1.5" />
    <text x="610" y="142" fill="#e7e9ea" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">ZOHO RECRUIT</text>
    <text x="610" y="158" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">candidate sync</text>
    <text x="610" y="172" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">screening transcript</text>

    <rect x="520" y="200" width="180" height="70" rx="10" fill="#161a1f" stroke="#8a9099" strokeWidth="1.5" />
    <text x="610" y="222" fill="#e7e9ea" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">RECALL.AI + GOOGLE MEET</text>
    <text x="610" y="238" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">Aria joins the call</text>
    <text x="610" y="252" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">summary &rarr; Google Chat</text>

    <rect x="30" y="30" width="640" height="24" rx="6" fill="#0e1a14" stroke="#3ddc97" strokeWidth="1" />
    <text x="350" y="46" fill="#3ddc97" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">
      VOICE BY CONCRETIO : OpenAI Realtime API, FastAPI, React, Heroku
    </text>

    <rect x="720" y="120" width="150" height="150" rx="10" fill="#161a1f" stroke="#ff7a33" strokeWidth="1.5" strokeDasharray="5,3" />
    <text x="795" y="142" fill="#ff7a33" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">HEROKU</text>
    <text x="795" y="162" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">staging env</text>
    <text x="795" y="178" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">production env</text>
    <text x="795" y="200" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">Resend</text>
    <text x="795" y="216" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">email notifications</text>

    <line x1="700" y1="160" x2="718" y2="180" stroke="#ff7a33" strokeWidth="1.2" markerEnd="url(#vc-arrowO)" strokeDasharray="3,2" />

    <text x="350" y="300" fill="#8a9099" fontSize="8" fontFamily="monospace" textAnchor="middle">Actively developed and led day-to-day; mid-refactor toward a broader agent platform</text>
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
      title: "Interviewer.io: Real-Time AI Mock Interview Platform",
      role: "Full-Stack AI Engineer",
      icon: <Mic className="text-accent" size={28} />,
      description:
        "A B2C SaaS platform offering real-time, voice-based mock interviews tailored to a user's actual resume using full-duplex voice pipelines and RAG. Built on a decoupled microservice architecture across three distinct layers: Client (Next.js), Orchestration (FastAPI), and Execution (Dockerized AI Bots).",
      achievements: [
        "Low-Latency Voice Interactions: Engineered a voice interface using OpenAI Whisper for accurate tech-jargon transcription (handles Kubernetes, CI/CD, framework names) and Edge TTS (Microsoft Azure Neural) for ultra-realistic AI audio with minimal latency.",
        "Contextual AI (RAG): Implemented Retrieval-Augmented Generation to parse PDF resumes and inject text into the LLM system prompt, enabling targeted questions like 'You used FastAPI in 2023, how did you handle DB connection pooling?'",
        "Containerized Session Management: FastAPI dynamically spawns isolated Docker containers per session injecting RESUME_TEXT, JOB_ROLE and DIFFICULTY as environment variables, preventing cross-user memory leaks entirely.",
        "Async Grading Engine: Created a non-blocking evaluation pipeline using FastAPI BackgroundTasks and Pydantic schemas to force the LLM into strict JSON scorecard output (overall_score, skill_breakdown, key_strengths, areas_for_improvement).",
        "Idempotent Auth: Clerk webhook /sync_user checks for existing Clerk IDs before DB writes, preventing duplicate records on repeated logins. CORS explicitly configured for Next.js origins."
      ],
      tech: ["Next.js", "FastAPI", "MongoDB", "Docker", "OpenAI Whisper", "Edge TTS", "Clerk", "Pydantic", "Beanie ODM"],
      link: "#",
      github: "https://github.com/chitrank123",
      whitepaper: "/AI Mock Interview Platform Research Paper V1 (1).pdf",
      diagram: <InterviewerArchitectureDiagram />,
      contributeText:
        "We are actively looking for contributors! Current open issues include improving RAG accuracy with chunked resume embeddings, optimizing Docker container spin-up latency, adding real-time audio waveform visualization, and enhancing the Pydantic scorecard schema with follow-up question generation.",
      techDeepDive: [
        { icon: <Mic size={16} />, title: "Whisper STT", detail: "Domain-specific jargon (Next.js, Kubernetes, CI/CD) transcribed accurately. Outperforms browser native STT on technical vocabulary." },
        { icon: <FileText size={16} />, title: "RAG Pipeline", detail: "PDF parsed to raw text, injected into LLM system prompt, personalized interview questions based on actual work history." },
        { icon: <Zap size={16} />, title: "Edge TTS", detail: "Microsoft Azure Neural network. Empathetic intonation. Near-zero latency. No enterprise API costs." },
        { icon: <Shield size={16} />, title: "Pydantic Schemas", detail: "Forces LLM into strict JSON output for scorecard rendering. Prevents hallucinated or malformed grading responses." },
        { icon: <Database size={16} />, title: "MongoDB + Beanie", detail: "Chosen for nested transcript arrays and dynamic scorecard objects that lack strict tabular relationships." },
        { icon: <Server size={16} />, title: "Docker Isolation", detail: "One container per interview session. ENV-injected context. Zero shared memory between concurrent users." },
      ]
    },
    {
      title: "Motor Insurance Agentic Workflow (MMV Agent)",
      role: "AI Architecture Lead @ Acuvisor",
      icon: <Database className="text-accent" size={28} />,
      description: "An enterprise-grade, self-correcting LangGraph pipeline designed to intelligently match vehicle variants from external government APIs (FLA) to internal insurer MySQL databases using advanced LLM querying and validation.",
      achievements: [
        "LangGraph State Machine: Engineered a 4-node cyclic graph (Query Generator, Validator, Executor, Reviewer) capable of auto-retrying up to 3 times if initial database queries yield no results.",
        "SQL Security Layer: Implemented a strict Validator node that sanitizes LLM-generated SQL, preventing destructive commands (DROP, DELETE) and ensuring exact compliance with legacy schemas.",
        "Data Ingestion & Normalization: Built robust preprocessing utility functions to clean messy, inconsistent data from external FLA payloads (normalizing CC, fuel types) before passing to the Groq agent.",
        "High-Confidence Matching: Utilized Groq's Llama-3 70b model at Temperature 0 to hierarchically evaluate database returns against ground-truth data, outputting strict JSON arrays with confidence scores."
      ],
      tech: ["Node.js", "Express", "LangGraph", "Groq API", "MySQL", "MongoDB", "Sequelize"],
      link: "#",
      github: "#",
      diagram: <MMVAgentArchitectureDiagram />,
      contributeText: "This is a proprietary enterprise application built for Acuvisor Insurance Brokers, currently handling live production traffic for automated insurance quoting.",
      techDeepDive: [
        { icon: <BrainCircuit size={16} />, title: "Query Generator", detail: "Uses Llama-3 to dynamically write flexible 'LIKE %' SQL queries based on normalized vehicle input." },
        { icon: <Shield size={16} />, title: "Validator Node", detail: "Acts as a firewall, intercepting the LLM's SQL string to guarantee no injection or destructive commands reach the DB." },
        { icon: <Server size={16} />, title: "Executor Node", detail: "Connects to MySQL via Sequelize to run the generated query. Automatically routes back to generation if zero rows are found." },
        { icon: <FileText size={16} />, title: "Reviewer Node", detail: "Final decision maker. Compares DB results with ground-truth input to calculate a confidence score and output strict JSON." }
      ]
    },
    {
      title: "TubeMind Pro: Agentic AI Video Analysis",
      role: "AI Architect",
      icon: <BrainCircuit className="text-accent" size={28} />,
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
        { icon: <Layers size={16} />, title: "LangGraph Nodes", detail: "Router to Transcript to Retriever to Generator to Memory. Each node is a pure function with typed state. Enables conditional branching." },
        { icon: <Zap size={16} />, title: "Groq LPU", detail: "Language Processing Unit hardware. Sub-second LLaMA / Mixtral inference. Streaming tokens for responsive UX." },
        { icon: <Database size={16} />, title: "pgvector", detail: "Hybrid search combining vector cosine similarity with timestamp metadata filtering. Built into PostgreSQL." },
        { icon: <Globe size={16} />, title: "CloudFront CDN", detail: "Edge caching for static assets + HTTPS termination. Reduces EC2 origin load for repeated requests." },
        { icon: <Server size={16} />, title: "Docker Compose", detail: "FastAPI + PostgreSQL + worker services orchestrated in a single Compose file on EC2. Easy horizontal scaling." },
        { icon: <Cpu size={16} />, title: "yt-dlp Fallback", detail: "When YouTube Transcript API fails (unavailable, age-gated), yt-dlp extracts auto-generated captions as fallback." },
      ]
    },
    {
      title: "Task Review Tool (Concretio)",
      role: "Contributing Engineer",
      icon: <Webhook className="text-accent" size={28} />,
      description:
        "An AI-powered code review platform built for Concretio, with multi-provider LLM routing across Claude, GPT-4o and Gemini, OAuth-based role access, and automated webhook-triggered review pipelines that email the team on completion.",
      achievements: [
        "Multi-Provider LLM Routing: Built a dispatcher that routes each review to a user's selected provider (Claude, GPT-4o, or Gemini) using their own stored API key, resolved fresh at the start of every review session.",
        "OAuth + Role-Based Access: Google OAuth and email/password auth restricted to the company domain, with admin and employee roles controlling which features and providers each user can access.",
        "Webhook-Triggered Review Pipelines: Commit and pull-request webhooks automatically trigger review sessions, with a tagging convention distinguishing commit-triggered from PR-triggered runs.",
        "Async Email Notifications: A non-blocking SMTP service emails reviewers an HTML summary the moment a triggered review session completes."
      ],
      tech: ["FastAPI", "React", "OAuth", "Webhooks", "Multi-LLM Routing", "PostgreSQL"],
      link: "#",
      github: "#",
      diagram: <ConcretioArchitectureDiagram />,
      contributeText: "A proprietary internal tool built for Concretio, currently used in their day-to-day code review workflow.",
      techDeepDive: [
        { icon: <KeyRound size={16} />, title: "Provider Resolution", detail: "Each review resolves the user's selected provider and stored API key at session start, not at request time, to stay consistent across retries." },
        { icon: <Shield size={16} />, title: "Role-Based Access", detail: "Admin controls per-user feature and provider access; the first registered user automatically becomes admin." },
        { icon: <Webhook size={16} />, title: "Webhook Triggers", detail: "Commit pushes tagged for review and PR events both auto-trigger sessions, visible to admins and optionally shared with the team." },
        { icon: <FileText size={16} />, title: "Email Summaries", detail: "An async SMTP service sends an HTML review summary the moment a triggered session finishes, with zero blocking on the request path." },
      ]
    },
    {
      title: "Voice by Concretio: AI Voice Agent Platform",
      role: "Lead Engineer",
      icon: <Radio className="text-accent" size={28} />,
      description:
        "An AI voice agent product built at Concretio around real-time, speech-to-speech interaction. Two live surfaces run on the same platform: an HR candidate-screening agent synced to Zoho Recruit, and \"Aria,\" an AI meeting bot that joins Google Meet calls, responds when addressed, and posts summaries to Google Chat. Originally built solo, now leading the team continuing to develop it.",
      achievements: [
        "Speech-to-Speech Voice: Built on OpenAI's Realtime API (gpt-4o-realtime-preview), avoiding a separate STT-then-TTS round trip for natural, low-latency conversation with interrupt handling.",
        "HR Screening Agent: Conducts candidate screening calls and syncs the conversation and outcome directly into Zoho Recruit.",
        "Aria Meeting Bot: Joins Google Meet calls via Recall.ai, listens for when it's addressed, and posts a GPT-4o-mini-generated summary to Google Chat after the call.",
        "Production Deployment: Runs across separate staging and production Heroku environments with a SQLAlchemy data layer (SQLite locally, Postgres in production) and Resend for email notifications.",
        "Team Leadership: Now leads the engineering effort on the platform, guiding its ongoing refactor toward a broader agent platform."
      ],
      tech: ["Python", "FastAPI", "React", "OpenAI Realtime API", "Recall.ai", "Zoho Recruit", "Google Chat", "Heroku", "PostgreSQL"],
      link: "#",
      github: "#",
      diagram: <VoiceByConcretioDiagram />,
      contributeText: "An actively developed Concretio product, in daily use for HR screening and meeting summarization, currently mid-refactor toward a broader agent platform.",
      techDeepDive: [
        { icon: <Radio size={16} />, title: "Realtime API", detail: "Speech-to-speech via OpenAI's gpt-4o-realtime-preview model. No intermediate transcription step, so responses feel conversational rather than turn-based." },
        { icon: <Users size={16} />, title: "Zoho Recruit Sync", detail: "Screening call outcomes write directly into the candidate's Zoho Recruit record, keeping recruiters in their existing tool." },
        { icon: <MessageSquare size={16} />, title: "Aria + Recall.ai", detail: "Recall.ai gives the bot a seat in the Google Meet call; Aria listens for its name and responds live, then reports out to Google Chat." },
        { icon: <Server size={16} />, title: "Dual Heroku Envs", detail: "Separate staging and production environments let the team ship changes to the voice pipeline without risking live HR or meeting sessions." },
      ]
    },
    {
      title: "Compass AI: RFP & Proposal Generation Platform",
      role: "Engineer & Technical Lead",
      icon: <Compass className="text-accent" size={28} />,
      description:
        "An internal Concretio platform that generates RFP responses and proposals from ingested documents using semantic search and Gemini-based generation, built as part of a small engineering team.",
      achievements: [
        "Modular Monorepo: Contributed across a multi-package architecture (document ingestion, a knowledge-hub module, and an RFP-generator module) built on a Fastify + TypeScript backend.",
        "Vertex AI Generation: Uses Google Vertex AI's RAG corpus tooling alongside Gemini to generate proposal content grounded in ingested reference documents.",
        "Document & Identity Layer: Firebase Auth, Firestore, and Cloud Storage handle user access and document management across the platform.",
        "Technical Oversight: Acts as technical lead on the project, reviewing and approving changes across the team before they ship."
      ],
      tech: ["TypeScript", "Fastify", "React", "Vertex AI", "Gemini", "Firebase", "Firestore"],
      link: "#",
      github: "#",
      contributeText: "An internal Concretio product built collaboratively with a small team; still under active iterative development.",
      techDeepDive: [
        { icon: <Compass size={16} />, title: "RAG Corpus", detail: "Ingested RFP and reference documents are indexed into a Vertex AI RAG corpus, grounding generated proposal content in real source material." },
        { icon: <Layers size={16} />, title: "Modular Packages", detail: "Document ingestion, the knowledge hub, and the RFP generator are separate packages linked via the monorepo, easing independent iteration." },
        { icon: <Database size={16} />, title: "Firebase Stack", detail: "Firestore and Cloud Storage handle document metadata and file storage; Firebase Auth gates access to the platform." },
      ]
    },
    {
      title: "standy-bot: Internal Team Chat Assistant",
      role: "Technical Lead",
      icon: <MessageSquare className="text-accent" size={28} />,
      description:
        "An internal Google Chat bot for Concretio that handles standups, availability tracking, task reminders, and Zoho Projects/People queries directly inside chat.",
      achievements: [
        "Google Chat Integration: Responds to standup, availability, and task queries directly inside Google Chat, backed by Gemini for natural-language understanding.",
        "Zoho-Aware: Integrates with Zoho Projects and Zoho People so answers reflect real task and team status rather than a separate data source.",
        "Serverless Deployment: Runs on Google Cloud Functions Framework and Cloud Run, deployed through a documented Cloud Build pipeline.",
        "Technical Ownership: Guides and unblocks the team on this project, with final approval on all changes before they ship."
      ],
      tech: ["Node.js", "Google Cloud Run", "Cloud Functions", "Gemini API", "Zoho Projects", "Zoho People", "Firestore"],
      link: "#",
      github: "#",
      contributeText: "An actively used internal Concretio tool; changes ship through a standard PR and Cloud Build pipeline.",
      techDeepDive: [
        { icon: <MessageSquare size={16} />, title: "Chat-Native UX", detail: "Standups, availability, and reminders are handled as natural-language queries inside Google Chat, no separate dashboard to check." },
        { icon: <Zap size={16} />, title: "Gemini API", detail: "Natural-language understanding for chat queries, translating requests into the right Zoho Projects/People lookups." },
        { icon: <Server size={16} />, title: "Cloud Run + Functions", detail: "Serverless deployment on Google Cloud, with Cloud Build handling the deploy pipeline end to end." },
      ]
    },
    {
      title: "Salesforce + Claude MCP Integration (Healthcare Billing Client)",
      role: "Senior Engineer, Architecture Review & Deployment",
      icon: <ShieldCheck className="text-accent" size={28} />,
      description:
        "A Salesforce and Claude/MCP integration built for a healthcare billing client, letting billing staff pull up a claim by number and generate a denial-code-specific insurance appeal letter grounded in the case's real Salesforce data.",
      achievements: [
        "Architecture Review: Reviews the system's Salesforce Apex REST services (case aggregation, appeal generation, data validation) as the senior engineer on the project.",
        "Azure Deployment Leadership: Led the team through deploying the integration to Azure Container Apps, resolving hosting and configuration issues to get it live.",
        "Compliance-Conscious Design: The system separates client-facing from operational logs and scrubs sensitive fields, reflecting the care required when handling healthcare billing data.",
        "MCP + Claude: Exposes the integration as a remote MCP server so billing staff can work through claude.ai directly, authenticated via OAuth 2.1 with PKCE."
      ],
      tech: ["Salesforce Apex", "MCP", "Claude", "Azure Container Apps", "OAuth 2.1"],
      link: "#",
      github: "#",
      contributeText: "A client engagement for a healthcare billing company; contributed as senior reviewer and deployment lead rather than primary builder.",
      techDeepDive: [
        { icon: <ShieldCheck size={16} />, title: "Senior Review", detail: "Reviews architecture and Apex REST service design rather than authoring the bulk of the system, focusing on correctness and production-readiness." },
        { icon: <Server size={16} />, title: "Azure Container Apps", detail: "Led the deployment effort onto Azure, working through hosting and configuration issues to get the integration live for the client." },
        { icon: <KeyRound size={16} />, title: "OAuth 2.1 + PKCE", detail: "The MCP server authenticates via OAuth 2.1 with PKCE, letting billing staff connect securely from claude.ai." },
      ]
    }
  ];

  const otherProjects = [
    {
      title: "AWS Operational Dashboard",
      description: "A comprehensive dashboard to monitor AWS costs, EC2 instances, S3 buckets, and IAM metrics in real-time.",
      icon: <LayoutDashboard className="text-accent" size={24} />,
      tech: ["Python", "AWS SDK", "Boto3", "CloudWatch"],
      github: "https://github.com/chitrank123/aws-operational-dashboard"
    },
    {
      title: "Personal Finance Dashboard",
      description: "A Streamlit data application to track finances, featuring income/expense tracking, trend analysis, and investment management.",
      icon: <LineChart className="text-accent" size={24} />,
      tech: ["Python", "Streamlit", "Pandas", "Data Visualization"],
      github: "https://github.com/chitrank123/personal-finance-dashboard"
    },
    {
      title: "AI Code Reviewer",
      description: "An automated code review tool leveraging LLMs to analyze pull requests, suggest optimizations, and catch bugs.",
      icon: <Code2 className="text-accent" size={24} />,
      tech: ["JavaScript", "LLM APIs", "LangChain", "Git"],
      github: "https://github.com/chitrank123/code-reviewer-ai"
    },
    {
      title: "Face Recognition Attendance",
      description: "A computer vision system that automates attendance tracking using facial recognition algorithms.",
      icon: <ScanFace className="text-accent" size={24} />,
      tech: ["Python", "OpenCV", "Machine Learning", "HTML"],
      github: "https://github.com/chitrank123/FACE-RECOGNITION-ATTENDENCE"
    }
  ];

  return (
    <div className="px-8 md:px-16 py-16 md:py-20 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-paper-dim font-semibold mb-3">System Log</div>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-paper-ink mb-4 text-balance">
            Featured Architecture
          </h1>
          <p className="text-paper-dim text-base md:text-lg max-w-2xl">
            Deep dives into production-grade SaaS platforms, AI systems, and enterprise integrations.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`py-10 ${index === 0 ? '' : 'border-t border-paper-rule'}`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="text-accent shrink-0 mt-1">{project.icon}</div>
                  <div>
                    <h2 className="font-serif font-semibold text-xl md:text-2xl text-paper-ink mb-1">{project.title}</h2>
                    <h3 className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">{project.role}</h3>
                  </div>
                </div>
                <div className="flex gap-4 flex-shrink-0">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-paper-dim hover:text-paper-ink transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-paper-dim hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-paper-body text-[15px] mb-5 leading-relaxed max-w-[64ch]">{project.description}</p>

              {project.whitepaper && (
                <div className="mb-5">
                  <a href={project.whitepaper} download className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-accent hover:underline">
                    <Download size={14} /> Architecture Whitepaper
                  </a>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-[11px] font-mono font-bold text-paper-dim uppercase tracking-widest mb-3">Architectural Achievements</h4>
                <ul className="space-y-3 mb-5">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="text-paper-body flex items-start gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">&#10022;</span>
                      <span className="leading-relaxed text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="font-mono text-[10px] uppercase px-2.5 py-1 border border-paper-ink rounded-full text-paper-ink">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => toggleExpand(project.title)}
                className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
              >
                <Workflow size={16} />
                {expandedProject === project.title ? "Hide Architecture Details" : "Explore Architecture Deep-Dive"}
                {expandedProject === project.title ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <AnimatePresence>
                {expandedProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 p-6 md:p-7 bg-panel rounded-sm text-panel-dim">

                      {project.diagram && (
                        <div className="mb-8">
                          <h4 className="text-panel-text font-semibold text-base flex items-center gap-2 mb-4">
                            <Workflow size={18} className="text-accent" /> System Architecture
                          </h4>
                          <div className="w-full rounded-lg overflow-hidden border border-panel-line mb-4">
                            {project.diagram}
                          </div>
                        </div>
                      )}

                      <div className={`mb-8 ${project.diagram ? 'border-t border-panel-line pt-8' : ''}`}>
                        <h4 className="text-panel-text font-semibold text-base flex items-center gap-2 mb-4">
                          <Cpu size={18} className="text-accent" /> Technical Deep Dive
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {project.techDeepDive.map((item, i) => (
                            <div key={i} className="p-4 bg-panel-line/30 rounded-lg border border-panel-line">
                              <div className="flex items-center gap-2 mb-2 text-accent">
                                {item.icon}
                                <span className="font-semibold text-sm text-panel-text">{item.title}</span>
                              </div>
                              <p className="text-panel-dim text-xs leading-relaxed">{item.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-panel-line pt-8">
                        <h4 className="text-panel-text font-semibold text-base flex items-center gap-2 mb-3">
                          <GitPullRequest size={18} className="text-accent" /> Project Status
                        </h4>
                        <p className="leading-relaxed text-sm">{project.contributeText}</p>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Utility Projects */}
        <div className="border-t border-paper-rule pt-14">
          <h2 className="font-serif font-semibold text-2xl text-paper-ink mb-8">Utility Projects &amp; Scripts</h2>
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`grid grid-cols-1 sm:grid-cols-[40px_1fr] gap-4 py-6 ${index === 0 ? '' : 'border-t border-paper-rule'}`}
            >
              <div className="text-accent">{project.icon}</div>
              <div>
                <div className="flex justify-between items-start gap-3 mb-1.5">
                  <h3 className="font-serif font-semibold text-lg text-paper-ink">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-paper-dim hover:text-paper-ink transition-colors shrink-0">
                    <Github size={16} />
                  </a>
                </div>
                <p className="text-paper-body text-sm leading-relaxed mb-3 max-w-[60ch]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="font-mono text-[10px] uppercase px-2.5 py-1 border border-paper-rule rounded-full text-paper-dim">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default Projects;
