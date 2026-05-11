"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText, Award, Mic, Shield, Trophy, TrendingUp, Building, Globe,
} from "lucide-react";
import { useCountUp } from "@/lib/hooks";
import SectionWrapper from "@/components/common/SectionWrapper";
import { achievements } from "@/data/achievements";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  FileText, Award, Mic, Shield, Trophy, TrendingUp, Building, Globe,
};

function parseStatValue(val: string): { num: number | null; prefix: string; suffix: string } {
  const match = val.match(/^([^\d]*)(\d+)([\+%]*)$/);
  if (match) {
    return { prefix: match[1], num: parseInt(match[2]), suffix: match[3] };
  }
  return { prefix: "", num: null, suffix: val };
}

function AchievementCard({ ach, i, inView }: {
  ach: typeof achievements[number]; i: number; inView: boolean;
}) {
  const Icon = ICON_MAP[ach.icon] ?? FileText;
  const { num, prefix, suffix } = parseStatValue(ach.stat ?? "");
  const count = useCountUp(num ?? 0, inView && num !== null, 1800, i * 100);

  return (
    <motion.div
      variants={fadeUpVariant}
      custom={i}
      className="group glass rounded-2xl border border-white/5 p-5 hover:border-white/12 transition-all duration-300 relative overflow-hidden"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${ach.color}08 0%, transparent 70%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
        style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: `${ach.color}12`,
          border: `1px solid ${ach.color}25`,
        }}
      >
        <Icon size={18} style={{ color: ach.color }} />
      </div>

      {/* Stat */}
      {ach.stat && (
        <div
          className="text-3xl font-black leading-none mb-1 stat-number"
          style={{ color: ach.color }}
        >
          {prefix}
          {num !== null ? count : suffix}
          {num !== null ? suffix : ""}
        </div>
      )}

      {ach.statLabel && (
        <p className="text-[10px] font-mono text-white/35 uppercase tracking-wide mb-3">
          {ach.statLabel}
        </p>
      )}

      <h3 className="font-bold text-white text-sm leading-tight mb-2">{ach.title}</h3>

      <p className="text-white/40 text-xs leading-relaxed mb-3">{ach.description}</p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
        {ach.badge && (
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold"
            style={{
              background: `${ach.color}12`,
              color: ach.color,
              border: `1px solid ${ach.color}25`,
            }}
          >
            {ach.badge}
          </span>
        )}
        {ach.year && (
          <span className="text-[10px] font-mono text-white/25 ml-auto">{ach.year}</span>
        )}
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="achievements"
      label="07. Achievements"
      title="Achievements"
      subtitle="Research milestones, recognitions, and contributions to the AI community."
    >
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {achievements.map((ach, i) => (
          <AchievementCard key={ach.id} ach={ach} i={i} inView={inView} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
