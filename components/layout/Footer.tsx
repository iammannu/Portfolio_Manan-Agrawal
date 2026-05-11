"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const SOCIAL = [
  { label: "GitHub", icon: Github, href: "https://github.com/iammannu" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/iammananagrawal" },
  { label: "Email", icon: Mail, href: "mailto:mananagrawalresearcher@gmail.com" },
  {
    label: "Scholar",
    icon: ExternalLink,
    href: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ&hl=en",
  },
];

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg border border-emerald-500/40 flex items-center justify-center bg-emerald-500/5">
                <span className="text-sm font-black text-emerald-400 font-mono">MA</span>
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Manan Agrawal</p>
                <p className="text-[11px] text-emerald-500/70 font-mono">AI Research Engineer</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building intelligent systems at the intersection of AI research, quantitative finance, and production engineering.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-emerald-400 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/5 text-white/50 hover:text-white hover:border-emerald-500/30 text-sm transition-all duration-200"
                  whileHover={{ y: -2 }}
                  aria-label={s.label}
                >
                  <s.icon size={14} />
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-mono">
            © {new Date().getFullYear()} Manan Agrawal. All rights reserved.
          </p>
          <p className="text-white/25 text-xs font-mono">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
