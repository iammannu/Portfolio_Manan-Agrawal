"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  animate?: boolean;
}

export default function GlowCard({
  children,
  className,
  glowColor = "rgba(16,185,129,0.08)",
  animate = true,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
    cardRef.current.style.setProperty("--glow-color", glowColor);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--mouse-x", "50%");
    cardRef.current.style.setProperty("--mouse-y", "50%");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={animate ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={cn(
        "glass rounded-xl p-6 relative overflow-hidden cursor-default",
        "before:absolute before:inset-0 before:rounded-xl before:transition-opacity before:duration-300",
        "before:opacity-0 hover:before:opacity-100",
        "before:[background:radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),var(--glow-color,rgba(16,185,129,0.08))_0%,transparent_60%)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
