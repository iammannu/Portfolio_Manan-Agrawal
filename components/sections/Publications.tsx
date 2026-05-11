"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Quote, TrendingUp, Filter, ChevronDown, ChevronUp } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { publications, scholarStats } from "@/data/publications";
import { fadeUpVariant, staggerContainer, truncate } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const FILTERS = ["All", "conference", "preprint"] as const;
type Filter = (typeof FILTERS)[number];

const CHART_DATA = [2024, 2025, 2026].map((year) => ({
  year: year.toString(),
  papers: publications.filter((p) => p.year === year).length,
}));

function StatBadge({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="text-center p-4 glass rounded-2xl border border-white/5">
      <p className="text-3xl font-black" style={{ color }}>{value}</p>
      <p className="text-xs font-mono text-white/40 mt-1">{label}</p>
    </div>
  );
}

function PublicationCard({ pub, index }: { pub: (typeof publications)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [copied, setCopied] = useState(false);
  const copyBib = () => {
    const bib = `@article{agrawal${pub.year}${pub.id.split("-")[1]},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  journal={${pub.venue}},
  year={${pub.year}}
}`;
    navigator.clipboard.writeText(bib);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay: index * 0.05 }}
      className="paper-card rounded-2xl overflow-hidden"
    >
      {/* Featured badge + top strip */}
      {pub.featured && (
        <div className="h-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
      )}

      <div className="p-6">
        {/* Type badge + year */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wide ${
                pub.type === "preprint"
                  ? "text-purple-300 bg-purple-500/10 border border-purple-500/20"
                  : "text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
              }`}
            >
              {pub.type}
            </span>
            {pub.featured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-yellow-300 bg-yellow-500/10 border border-yellow-500/20">
                ★ Featured
              </span>
            )}
          </div>
          <span className="text-white/25 text-xs font-mono">{pub.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-white text-sm leading-snug mb-2 hover:text-emerald-300 transition-colors cursor-pointer line-clamp-2">
          {pub.title}
        </h3>

        {/* Authors */}
        <p className="text-white/40 text-xs mb-2 font-mono">
          {pub.authors.join(", ")}
        </p>

        {/* Venue */}
        <p className="text-blue-400 text-xs font-medium mb-4">{pub.venueShort}</p>

        {/* Abstract */}
        <AnimatePresence>
          {expanded ? (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/50 text-xs leading-relaxed mb-4 overflow-hidden"
            >
              {pub.abstract}
            </motion.p>
          ) : (
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              {truncate(pub.abstract, 140)}
            </p>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1 text-xs text-white/30 hover:text-white/60 transition-colors mb-4 font-mono"
        >
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {expanded ? "Show less" : "Read abstract"}
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {pub.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/40 bg-white/4 border border-white/6"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: citations + actions */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          {/* Citation count */}
          <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
            <TrendingUp size={11} className="text-emerald-500" />
            <span>{pub.citations} citations</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <a
              href={pub.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-white/50 hover:text-white glass border border-white/6 hover:border-emerald-500/30 transition-all"
            >
              <ExternalLink size={10} />
              Paper
            </a>
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-white/50 hover:text-white glass border border-white/6 hover:border-blue-500/30 transition-all"
              >
                <BookOpen size={10} />
                DOI
              </a>
            )}
            <button
              onClick={copyBib}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-white/50 hover:text-white glass border border-white/6 hover:border-purple-500/30 transition-all"
            >
              <Quote size={10} />
              {copied ? "Copied!" : "BibTeX"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const [filter, setFilter] = useState<Filter>("All");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    filter === "All"
      ? publications
      : publications.filter((p) => p.type === filter);

  return (
    <SectionWrapper
      id="publications"
      label="03. Research"
      title="Publications"
      subtitle="Peer-reviewed research across AI/ML, NLP, Computer Vision, and Quantitative AI."
    >
      {/* Scholar stats */}
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <StatBadge label="Total Publications" value={scholarStats.totalPublications} color="#10B981" />
        <StatBadge label="Total Citations" value={`${scholarStats.totalCitations}+`} color="#3B82F6" />
        <StatBadge label="h-index" value={scholarStats.hIndex} color="#8B5CF6" />
        <StatBadge label="i10-index" value={scholarStats.i10Index} color="#F59E0B" />
      </motion.div>

      {/* Publication trend chart */}
      <motion.div
        className="glass rounded-2xl border border-white/5 p-6 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white font-semibold text-sm">Publication Timeline</p>
            <p className="text-white/30 text-xs font-mono">Papers published per year</p>
          </div>
          <a
            href={scholarStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ExternalLink size={12} />
            Google Scholar
          </a>
        </div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CHART_DATA} barCategoryGap="40%">
              <XAxis
                dataKey="year"
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: "rgba(10,10,20,0.95)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                  fontFamily: "JetBrains Mono",
                }}
                cursor={{ fill: "rgba(255,255,255,0.02)" }}
              />
              <Bar
                dataKey="papers"
                fill="url(#barGrad)"
                radius={[4, 4, 0, 0]}
                name="Papers"
              />
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <Filter size={14} className="text-white/30" />
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 capitalize ${
              filter === f
                ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                : "glass border border-white/8 text-white/40 hover:text-white hover:border-white/20"
            }`}
          >
            {f}{" "}
            <span className="opacity-60">
              ({f === "All" ? publications.length : publications.filter((p) => p.type === f).length})
            </span>
          </button>
        ))}
      </div>

      {/* Publications grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          {filtered.map((pub, i) => (
            <PublicationCard key={pub.id} pub={pub} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
