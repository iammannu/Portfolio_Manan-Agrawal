"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/lib/hooks";
import { Brain, Code2, Database, TrendingUp, Cpu, Network } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import GlowCard from "@/components/common/GlowCard";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const STATS = [
  { value: 18, suffix: "+", label: "Publications", sublabel: "IEEE & Top Venues" },
  { value: 60, suffix: "+", label: "Citations", sublabel: "Google Scholar" },
  { value: 5, suffix: "", label: "h-index", sublabel: "Research Impact" },
  { value: 5, suffix: "", label: "Experiences", sublabel: "Research & Industry" },
];

const FOCUS_AREAS = [
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Production RAG pipelines, agentic architectures, prompt engineering, and LLM fine-tuning for enterprise applications.",
    color: "#8B5CF6",
  },
  {
    icon: TrendingUp,
    title: "Quantitative AI",
    description: "Financial forecasting, market intelligence, alpha generation, and GenAI-powered investment reasoning systems.",
    color: "#F59E0B",
  },
  {
    icon: Database,
    title: "Retrieval Systems",
    description: "FAISS-based vector databases, semantic search, hierarchical chunking, cross-encoder reranking, and scalable retrieval.",
    color: "#3B82F6",
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    description: "Industrial defect detection, multi-modal fusion, vision transformers, and edge AI systems on embedded hardware.",
    color: "#10B981",
  },
  {
    icon: Network,
    title: "Mechanistic Interpretability",
    description: "Attention head analysis, circuit discovery, activation patching, and causal tracing in transformer models.",
    color: "#EC4899",
  },
  {
    icon: Code2,
    title: "MLOps & Systems",
    description: "MLflow pipelines, continuous training, model monitoring, drift detection, and production AI deployment.",
    color: "#06B6D4",
  },
];

function StatCard({ value, suffix, label, sublabel, index }: {
  value: number; suffix: string; label: string; sublabel: string; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, inView, 1800, index * 100);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 glass rounded-2xl border border-white/5"
      variants={fadeUpVariant}
      custom={index}
    >
      <div className="text-4xl font-black text-white stat-number leading-none">
        {count}
        <span className="gradient-text-emerald">{suffix}</span>
      </div>
      <p className="text-white font-semibold text-sm mt-2">{label}</p>
      <p className="text-white/30 text-xs font-mono mt-0.5">{sublabel}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="about" label="01. About" title="About Me" subtitle="AI researcher, systems engineer, and quantitative intelligence builder.">
      {/* Stats row */}
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {STATS.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Building AI Systems That{" "}
            <span className="gradient-text-emerald">Actually Work</span>
          </h3>
          <div className="space-y-4 text-white/55 leading-relaxed">
            <p>
              I&apos;m an AI Research Engineer and Systems Builder with a Master&apos;s in Computer Engineering,
              specializing in the intersection of applied AI research and production engineering.
              My work spans retrieval-augmented generation, transformer interpretability, quantitative
              AI for financial markets, and computer vision for industrial systems.
            </p>
            <p>
              At{" "}
              <span className="text-white font-medium">Honeywell</span> and{" "}
              <span className="text-white font-medium">Martinrea International</span>, I built
              enterprise-grade AI pipelines processing millions of requests — from semantic email
              classification systems to inventory optimization engines powered by transformer
              embeddings and vector databases.
            </p>
            <p>
              I work at the intersection of AI, Machine Learning, and Quantitative Finance, with research
              publications in{" "}
              <span className="text-emerald-400 font-medium">IEEE conferences</span> and projects
              spanning LLMs, agentic AI, and financial intelligence systems. My work has received{" "}
              <span className="text-white font-medium">60+ citations across 18 publications</span>,
              and I have served as an{" "}
              <span className="text-white font-medium">IEEE reviewer</span> and invited speaker on
              Generative AI in finance.
            </p>
            <p>
              I believe the best AI systems are built by researchers who understand both the theory
              and the engineering constraints of deploying intelligent systems at scale.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "MS Computer Engineering",
              "IEEE Publications",
              "Fortune 100 & 500",
              "Guest Speaker",
              "Patent Contributor",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-mono text-white/70 glass border border-white/8 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Focus card */}
        <motion.div
          className="glass rounded-2xl border border-white/5 p-6"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h4 className="text-sm font-mono text-emerald-400 mb-4 uppercase tracking-widest">
            // Research Philosophy
          </h4>
          <blockquote className="text-white/70 text-lg leading-relaxed italic border-l-2 border-emerald-500/40 pl-4 mb-6">
            &ldquo;The gap between a research idea and a production system is where the most
            interesting engineering happens. I build systems that close that gap.&rdquo;
          </blockquote>

          <div className="space-y-3">
            {[
              { key: "Research Focus", val: "LLMs · RAG · Quant AI · Vision · Interpretability" },
              { key: "Engineering", val: "Python · PyTorch · FastAPI · React · AWS · Docker" },
              { key: "Publications", val: "IEEE · ACL · EMNLP · AAAI · CVPR · NeurIPS · ICML" },
              { key: "Deployed Systems", val: "50K+ daily requests · Fortune 100 & 500 scale" },
              { key: "Location", val: "Open to Remote & Relocation" },
            ].map(({ key, val }) => (
              <div key={key} className="flex gap-3 text-sm">
                <span className="text-white/30 font-mono shrink-0 w-32">{key}:</span>
                <span className="text-white/70">{val}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Focus areas */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {FOCUS_AREAS.map(({ icon: Icon, title, description, color }, i) => (
          <motion.div key={title} variants={fadeUpVariant} custom={i}>
            <GlowCard
              glowColor={`${color}15`}
              className="h-full"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm">{title}</h4>
              <p className="text-white/45 text-xs leading-relaxed">{description}</p>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
