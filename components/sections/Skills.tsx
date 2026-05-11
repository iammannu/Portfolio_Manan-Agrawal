"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const category = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <SectionWrapper
      id="skills"
      label="06. Skills"
      title="Technical Skills"
      subtitle="Full-stack AI engineering across research, production, and infrastructure."
    >
      <div ref={ref}>
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                color: activeCategory === cat.id ? cat.color : "rgba(255,255,255,0.4)",
                background: activeCategory === cat.id ? `${cat.color}10` : "rgba(255,255,255,0.02)",
                border: `1px solid ${activeCategory === cat.id ? cat.color + "40" : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: `${cat.color}08` }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Category description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-white/40 text-sm font-mono mb-10">
              {category.description}
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-xl border border-white/5 p-4 hover:border-white/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: category.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      style={{
                        background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: skill.level / 100 } : {}}
                      transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All skills cloud */}
        <div className="mt-16">
          <p className="text-center text-xs font-mono text-white/25 uppercase tracking-widest mb-8">
            Complete Technology Stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <motion.span
                  key={`${cat.id}-${skill.name}`}
                  className="px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 cursor-default"
                  style={{
                    fontSize: `${0.65 + (skill.level / 100) * 0.25}rem`,
                    color: `${cat.color}${Math.round(40 + (skill.level / 100) * 60).toString(16)}`,
                    borderColor: `${cat.color}20`,
                    background: `${cat.color}06`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: cat.color,
                    borderColor: `${cat.color}50`,
                    background: `${cat.color}15`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
