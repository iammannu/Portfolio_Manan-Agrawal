"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail, Github, Linkedin, ExternalLink, Send, MapPin, Clock, Download,
} from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: "mananagrawalresearcher@gmail.com",
    href: "mailto:mananagrawalresearcher@gmail.com",
    color: "#10B981",
    desc: "Preferred for research & collaboration",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/iammananagrawal",
    href: "https://linkedin.com/in/iammananagrawal",
    color: "#3B82F6",
    desc: "Connect for professional opportunities",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/iammannu",
    href: "https://github.com/iammannu",
    color: "#8B5CF6",
    desc: "Open source projects & research code",
  },
  {
    icon: ExternalLink,
    label: "Google Scholar",
    value: "scholar.google.com",
    href: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    color: "#F59E0B",
    desc: "Research publications & citations",
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send message.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-emerald-500/50 focus:bg-white/5 transition-all duration-200 font-mono";

  return (
    <SectionWrapper
      id="contact"
      label="08. Contact"
      title="Get In Touch"
      subtitle="Open to research collaborations, AI engineering roles, and speaking opportunities."
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left — Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div variants={fadeUpVariant} className="mb-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Let&apos;s Build Something{" "}
              <span className="gradient-text-emerald">Intelligent</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              I&apos;m actively seeking full-time AI research engineering roles, research
              collaborations, and speaking engagements. If you&apos;re working on something
              at the frontier of AI — from LLM systems to quantitative AI to mechanistic
              interpretability — I&apos;d love to connect.
            </p>
          </motion.div>

          {/* Status chips */}
          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-2 mb-8">
            {[
              { icon: MapPin, text: "Open to Remote & Relocation" },
              { icon: Clock, text: "Response within 24 hrs" },
              { icon: Download, text: "Resume Available" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/8 text-xs text-white/50 font-mono"
              >
                <Icon size={11} className="text-emerald-400" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Contact cards */}
          <div className="space-y-3">
            {CONTACT_CARDS.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={fadeUpVariant}
                custom={i}
                className="group flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-white/12 transition-all duration-300"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}
                >
                  <card.icon size={18} style={{ color: card.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono text-white/30 uppercase tracking-wide">{card.label}</p>
                  <p className="text-sm text-white font-medium truncate group-hover:text-emerald-300 transition-colors">
                    {card.value}
                  </p>
                  <p className="text-xs text-white/30">{card.desc}</p>
                </div>
                <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Resume download CTA */}
          <motion.div variants={fadeUpVariant} className="mt-6">
            <a
              href="/Mana_Agrawal_Researcher_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl btn-primary text-sm font-semibold"
            >
              <Download size={16} />
              Download Full Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass rounded-2xl border border-white/8 p-6">
            <h3 className="font-bold text-white mb-1 text-base">Send a Message</h3>
            <p className="text-white/35 text-xs font-mono mb-6">I read every message personally.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/35 mb-1.5">Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/35 mb-1.5">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/35 mb-1.5">Subject *</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Research collaboration, job opportunity, speaking..."
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/35 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 font-mono"
                >
                  ✓ Message sent! I&apos;ll respond within 24 hours.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 font-mono"
                >
                  ✗ {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl btn-primary text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
