"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Camera, Zap, Wifi, Terminal, Activity } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

const SPECS = [
  { label: "Hardware", value: "Raspberry Pi 5 (4GB RAM)" },
  { label: "Vision", value: "Pi Camera Module 3" },
  { label: "OCR Engine", value: "Tesseract + Custom CNN" },
  { label: "Inference", value: "Edge AI (no cloud)" },
  { label: "Accuracy", value: "95.2% char recognition" },
  { label: "Speed", value: "12 FPS real-time" },
  { label: "Latency", value: "<83ms per frame" },
  { label: "Model Size", value: "Quantized INT8 (<50MB)" },
];

const PIPELINE = [
  { icon: Camera, label: "Camera Capture", desc: "Pi Camera Module 3 raw frame acquisition at 12 FPS", color: "#10B981" },
  { icon: Zap, label: "Preprocessing", desc: "Noise reduction, adaptive thresholding, deskew, binarization", color: "#3B82F6" },
  { icon: Cpu, label: "Edge Inference", desc: "INT8 quantized CNN for text region detection and segmentation", color: "#8B5CF6" },
  { icon: Terminal, label: "OCR Pipeline", desc: "Tesseract + custom language model for character recognition", color: "#F59E0B" },
  { icon: Activity, label: "Post Processing", desc: "NLP-based context correction and structured output generation", color: "#EC4899" },
  { icon: Wifi, label: "Output", desc: "JSON-structured text output with confidence scores and bounding boxes", color: "#06B6D4" },
];

function CircuitDecoration() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="50" y="50" width="300" height="300" rx="8" stroke="#10B981" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="60" stroke="#3B82F6" strokeWidth="0.5" />
      <line x1="50" y1="200" x2="140" y2="200" stroke="#10B981" strokeWidth="0.5" />
      <line x1="260" y1="200" x2="350" y2="200" stroke="#10B981" strokeWidth="0.5" />
      <line x1="200" y1="50" x2="200" y2="140" stroke="#3B82F6" strokeWidth="0.5" />
      <line x1="200" y1="260" x2="200" y2="350" stroke="#3B82F6" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="4" fill="#10B981" />
      <circle cx="350" cy="50" r="4" fill="#10B981" />
      <circle cx="50" cy="350" r="4" fill="#10B981" />
      <circle cx="350" cy="350" r="4" fill="#10B981" />
      <rect x="180" y="180" width="40" height="40" rx="4" fill="#10B98110" stroke="#10B981" strokeWidth="0.5" />
      {[100, 150, 250, 300].map((x) => (
        <g key={x}>
          <rect x={x - 5} y="190" width="10" height="20" rx="2" fill="#3B82F620" stroke="#3B82F6" strokeWidth="0.3" />
        </g>
      ))}
    </svg>
  );
}

export default function Hardware() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="hardware"
      label="05. Hardware AI"
      title="Edge AI Systems"
      subtitle="Embedded intelligence — running AI at the edge without cloud dependency."
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left — Project info */}
        <div>
          <motion.div
            className="glass rounded-2xl border border-emerald-500/15 p-6 relative overflow-hidden mb-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <CircuitDecoration />
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                  <Cpu size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">
                    AI-Powered OCR Smart Vision System
                  </h3>
                  <p className="text-emerald-400 text-xs font-mono">Raspberry Pi 5 · Edge AI</p>
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-5">
                Built an embedded OCR-based intelligent vision system using Raspberry Pi 5 for real-time
                text extraction and document understanding at the edge. The system performs full AI inference
                locally — no cloud dependency — enabling privacy-preserving document digitization in
                resource-constrained environments.
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-2">
                {SPECS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-3 rounded-xl bg-black/30 border border-white/5"
                  >
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-xs text-white/70 font-medium">{value}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["Edge AI", "Computer Vision", "OCR", "Embedded Systems", "Real-time", "Hardware AI", "Privacy-First"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono text-emerald-300/70 bg-emerald-500/8 border border-emerald-500/15"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Terminal output */}
          <motion.div
            className="glass rounded-2xl border border-white/8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] font-mono text-white/25 ml-1">pi@raspberrypi:~/ocr-vision</span>
            </div>
            <div className="p-4 font-mono text-xs space-y-1.5">
              {[
                { t: "$ python ocr_pipeline.py --source camera", c: "text-emerald-400" },
                { t: "[INFO] Initializing camera module...", c: "text-white/40" },
                { t: "[INFO] Loading quantized model (INT8)...", c: "text-white/40" },
                { t: "[INFO] Model size: 48.3 MB — OK", c: "text-blue-400" },
                { t: "[INFO] Hardware acceleration: enabled", c: "text-blue-400" },
                { t: "[LIVE] Processing frame 0042 — 11.8 FPS", c: "text-white/50" },
                { t: '[OCR] Detected: "Invoice #4821 — Total: $1,247.50"', c: "text-white/70" },
                { t: "[OCR] Confidence: 97.2% | Bbox: [142, 89, 421, 112]", c: "text-white/50" },
                { t: "$ _", c: "text-emerald-400 terminal-cursor" },
              ].map(({ t, c }, i) => (
                <motion.div
                  key={i}
                  className={c}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.2 }}
                >
                  {t}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — Pipeline visualization */}
        <div>
          <motion.h4
            className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            // AI Processing Pipeline
          </motion.h4>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/40 via-blue-500/20 to-purple-500/10" />

            <div className="space-y-3">
              {PIPELINE.map(({ icon: Icon, label, desc, color }, i) => (
                <motion.div
                  key={label}
                  className="flex gap-4 items-start pl-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  {/* Step icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{ background: `${color}10`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>

                  {/* Step content */}
                  <div className="glass rounded-xl border border-white/5 p-4 flex-1 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono" style={{ color }}>
                        Step {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-white">{label}</span>
                    </div>
                    <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
