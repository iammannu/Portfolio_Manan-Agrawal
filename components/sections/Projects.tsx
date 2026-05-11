"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Globe, Code2 } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { projects } from "@/data/projects";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

interface GitHubMeta {
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
}

const CATEGORIES = ["All", "AI/ML", "Finance", "Full Stack", "Research"] as const;
type Category = (typeof CATEGORIES)[number];

function ProjectCard({
  project,
  meta,
  index,
}: {
  project: (typeof projects)[0];
  meta?: GitHubMeta;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay: index * 0.08 }}
      className="group relative glass rounded-2xl border border-white/5 overflow-hidden hover:border-white/12 transition-all duration-400"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      />

      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.gradientFrom}08 0%, transparent 60%)`,
        }}
      />

      <div className="p-6 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {/* Status badge */}
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold mb-2 ${
                project.status === "production"
                  ? "text-green-300 bg-green-500/10 border border-green-500/20"
                  : project.status === "research"
                  ? "text-blue-300 bg-blue-500/10 border border-blue-500/20"
                  : "text-yellow-300 bg-yellow-500/10 border border-yellow-500/20"
              }`}
            >
              ● {project.status}
            </span>
            {project.featured && (
              <span
                className="inline-block ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                style={{
                  background: `${project.accentColor}15`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                ★ Featured
              </span>
            )}
          </div>

          {/* GitHub stats */}
          <div className="flex items-center gap-3 text-xs text-white/30 font-mono">
            {meta?.stars !== undefined && (
              <span className="flex items-center gap-1">
                <Star size={11} />
                {meta.stars}
              </span>
            )}
            {meta?.forks !== undefined && (
              <span className="flex items-center gap-1">
                <GitFork size={11} />
                {meta.forks}
              </span>
            )}
          </div>
        </div>

        {/* Project name */}
        <h3 className="font-bold text-white text-base mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}>
          {project.displayName}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Architecture highlights (1–2) */}
        <div className="space-y-1.5 mb-4">
          {project.highlights.slice(0, 2).map((h, j) => (
            <div key={j} className="flex gap-2 text-xs text-white/40">
              <span style={{ color: project.accentColor }} className="shrink-0">▸</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/45 bg-white/4 border border-white/6"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/25 bg-white/2 border border-white/4">
              +{project.techStack.length - 6}
            </span>
          )}
        </div>

        {/* Language indicator */}
        {(meta?.language || project.techStack[0]) && (
          <div className="flex items-center gap-1.5 text-xs text-white/30 font-mono mb-4">
            <Code2 size={11} />
            <span>{meta?.language ?? project.techStack[0]}</span>
          </div>
        )}

        {/* Impact */}
        <div
          className="rounded-xl p-3 mb-5 text-xs leading-relaxed"
          style={{
            background: `${project.accentColor}08`,
            border: `1px solid ${project.accentColor}20`,
          }}
        >
          <span className="font-mono font-bold" style={{ color: project.accentColor }}>Impact: </span>
          <span className="text-white/50">{project.impact}</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-4 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono text-white/60 hover:text-white glass border border-white/8 hover:border-white/20 transition-all"
          >
            <Github size={13} />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono text-white/60 hover:text-white glass border border-white/8 hover:border-white/20 transition-all"
            >
              <Globe size={13} />
              Live
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass border border-white/8 text-white/40 hover:text-white transition-colors"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const [githubMeta, setGithubMeta] = useState<Record<string, GitHubMeta>>({});
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        const meta: Record<string, GitHubMeta> = {};
        for (const repo of data.repos ?? []) {
          meta[repo.name] = {
            stars: repo.stars,
            forks: repo.forks,
            language: repo.language,
            topics: repo.topics,
          };
        }
        setGithubMeta(meta);
      })
      .catch(() => {});
  }, []);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <SectionWrapper
      id="projects"
      label="04. Projects"
      title="Featured Projects"
      subtitle="Production systems, research tools, and AI platforms built from scratch."
    >
      {/* Filter chips */}
      <div ref={ref} className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
              filter === c
                ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                : "glass border border-white/8 text-white/40 hover:text-white hover:border-white/20"
            }`}
          >
            {c}{" "}
            <span className="opacity-60">
              ({c === "All" ? projects.length : projects.filter((p) => p.category.includes(c)).length})
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <AnimatePresence mode="wait">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              meta={githubMeta[project.repoName]}
              index={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
