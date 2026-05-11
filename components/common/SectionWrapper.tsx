"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  label,
  title,
  subtitle,
  centered = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative py-24 md:py-32 overflow-hidden", className)}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {(label || title || subtitle) && (
          <motion.div
            className={cn("mb-16", centered && "text-center")}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {label && (
              <p className="section-label mb-4">{`// ${label}`}</p>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            {/* Decorative line */}
            <motion.div
              className={cn(
                "mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent max-w-xs",
                centered ? "mx-auto" : "ml-0"
              )}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
