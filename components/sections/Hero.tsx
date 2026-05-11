"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  ChevronDown,
  Terminal,
  Cpu,
  BookOpen,
  Mic,
  Shield,
} from "lucide-react";

const ROTATING_TITLES = [
  "AI Research Engineer",
  "Machine Learning Engineer",
  "Quantitative AI Researcher",
  "GenAI Systems Engineer",
  "Research Scientist",
];

const STATS = [
  { icon: BookOpen, label: "Publications", value: "18+" },
  { icon: Shield, label: "IEEE Reviewer", value: "✓" },
  { icon: Cpu, label: "AI Researcher", value: "✓" },
  { icon: Mic, label: "Guest Speaker", value: "✓" },
  { icon: ExternalLink, label: "Patent Contributor", value: "✓" },
];

const TERMINAL_LINES = [
  { text: "$ whoami", delay: 0 },
  { text: "iammananagrawal — AI Research Engineer", delay: 600 },
  { text: "$ cat research_focus.txt", delay: 1200 },
  { text: "RAG · LLMs · Transformers · Quant AI · Vision", delay: 1800 },
  { text: "$ echo $PUBLICATIONS", delay: 2400 },
  { text: "18 papers · 60+ citations · h-index: 1", delay: 3000 },
  { text: "$ _", delay: 3600, cursor: true },
];

function useTypingEffect(lines: typeof TERMINAL_LINES) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [lines]);
  return visibleLines;
}

function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_TITLES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-10 md:h-14 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="absolute inset-0 flex items-center text-xl md:text-3xl font-bold gradient-text-emerald"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {ROTATING_TITLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const visibleLines = useTypingEffect(TERMINAL_LINES);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text content */}
          <div>
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">Open to Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Manan
              <br />
              <span className="gradient-text-emerald">Agrawal</span>
            </motion.h1>

            {/* Rotating title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6"
            >
              <RotatingTitle />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              AI researcher and systems engineer building intelligent decision systems,
              retrieval augmented generation pipelines, quantitative AI platforms,
              and agentic architectures. IEEE published with 18+ papers and 60+ citations.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button
                onClick={() => document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <BookOpen size={15} /> View Research
              </button>
              <a
                href="/MananAgrawal_Resume_FullTime.pdf"
                download
                className="btn-ghost px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <Download size={15} /> Resume
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <Mail size={15} /> Contact
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {[
                { icon: Github, href: "https://github.com/iammannu", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/iammananagrawal", label: "LinkedIn" },
                {
                  icon: ExternalLink,
                  href: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
                  label: "Scholar",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass border border-white/5 text-white/50 hover:text-white hover:border-emerald-500/40 transition-all duration-200"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <span className="text-white/20 text-xs font-mono ml-2">
                @iammannu
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Profile card + stats */}
          <div className="flex flex-col items-center gap-6">
            {/* Profile card */}
            <motion.div
              className="relative w-full max-w-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-purple-500/20 blur-xl -z-10 animate-pulse-glow" />

              <div className="glass rounded-3xl border border-white/10 p-6 relative overflow-hidden">
                {/* Card shimmer */}
                <div className="absolute inset-0 shimmer pointer-events-none" />

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-2xl font-black text-white shadow-glow-emerald">
                    MA
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">Manan Agrawal</h3>
                    <p className="text-emerald-400 text-xs font-mono">AI Research Engineer</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white/40 text-xs">Available for hire</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["RAG Systems", "LLMs", "Quant AI", "Computer Vision", "Agentic AI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Papers", value: "18+" },
                    { label: "Citations", value: "60+" },
                    { label: "h-index", value: "1" },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center p-2 rounded-xl bg-white/3 border border-white/5">
                      <p className="text-lg font-black text-white leading-none">{value}</p>
                      <p className="text-[10px] text-white/40 font-mono mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating stat chips */}
            <motion.div
              className="w-full max-w-sm grid grid-cols-2 sm:grid-cols-3 gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {STATS.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl glass border border-white/5 hover:border-emerald-500/30 transition-colors"
                  whileHover={{ y: -2, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-md bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={12} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-none">{value}</p>
                    <p className="text-[9px] text-white/40 font-mono leading-tight">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Terminal */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <div className="glass rounded-2xl border border-white/8 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] font-mono text-white/30">manan@research:~</span>
              </div>
              <Terminal size={12} className="text-white/30" />
            </div>
            {/* Terminal content */}
            <div className="p-4 font-mono text-sm min-h-[140px]">
              {TERMINAL_LINES.map((line, i) => (
                <AnimatePresence key={i}>
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`leading-relaxed ${
                        line.text.startsWith("$")
                          ? "text-emerald-400"
                          : "text-white/60"
                      } ${line.cursor ? "terminal-cursor" : ""}`}
                    >
                      {line.cursor ? "$ " : line.text}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
