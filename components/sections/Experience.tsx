"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, ExternalLink, Briefcase, FlaskConical } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { experiences } from "@/data/experience";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="experience"
      label="02. Experience"
      title="Work Experience"
      subtitle="Research internships and engineering roles building production-grade AI systems."
    >
      <div ref={ref} className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden sm:block md:-translate-x-px" />

        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                variants={fadeUpVariant}
                custom={i}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                  <div
                    className="w-4 h-4 rounded-full border-2 shadow-lg"
                    style={{
                      borderColor: exp.accentColor,
                      backgroundColor: `${exp.accentColor}20`,
                      boxShadow: `0 0 12px ${exp.accentColor}60`,
                    }}
                  />
                </div>

                {/* Spacer (hidden side on desktop) */}
                <div className="hidden md:block w-1/2" />

                {/* Card */}
                <div className="md:w-1/2">
                  <ExperienceCard exp={exp} accentColor={exp.accentColor} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ExperienceCard({
  exp,
  accentColor,
}: {
  exp: (typeof experiences)[0];
  accentColor: string;
}) {
  return (
    <div
      className="glass rounded-2xl border overflow-hidden group hover:border-opacity-50 transition-all duration-300"
      style={{ borderColor: `${accentColor}25` }}
    >
      {/* Card top bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}50, transparent)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            {/* Badge */}
            {exp.badge && (
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold mb-2"
                style={{
                  background: `${accentColor}15`,
                  color: accentColor,
                  border: `1px solid ${accentColor}30`,
                }}
              >
                {exp.badge}
              </span>
            )}
            <h3 className="font-bold text-white text-base leading-tight">{exp.title}</h3>
          </div>
          {/* Type icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${accentColor}10`, border: `1px solid ${accentColor}25` }}
          >
            {exp.type === "research" ? (
              <FlaskConical size={18} style={{ color: accentColor }} />
            ) : (
              <Briefcase size={18} style={{ color: accentColor }} />
            )}
          </div>
        </div>

        {/* Company + meta */}
        <div className="flex flex-wrap gap-3 mb-5 text-sm">
          <div className="flex items-center gap-1.5 text-white/60">
            <span
              className="font-semibold"
              style={{ color: accentColor }}
            >
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-1"
                >
                  {exp.company}
                  <ExternalLink size={10} />
                </a>
              ) : (
                exp.company
              )}
            </span>
          </div>
          <div className="flex items-center gap-1 text-white/40 text-xs">
            <MapPin size={12} />
            <span>{exp.location}</span>
          </div>
          <div className="flex items-center gap-1 text-white/40 text-xs">
            <Calendar size={12} />
            <span>
              {exp.startDate} – {exp.endDate}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-5">
          {exp.description.map((line, j) => (
            <li key={j} className="text-white/55 text-sm leading-relaxed flex gap-3">
              <span style={{ color: accentColor }} className="mt-1 shrink-0 text-xs">▸</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/50 bg-white/4 border border-white/6 hover:border-white/15 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
