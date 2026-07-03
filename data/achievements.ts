export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
  color: string;
  year?: string;
  badge?: string;
}

export const achievements: Achievement[] = [
  {
    id: "ach-01",
    title: "18+ Research Publications",
    description:
      "Published across IEEE SoutheastCon, IEEE ICAITS, ICCA, ICADDA, and international conferences covering AI/ML, Computer Vision, Financial AI, Agentic Systems, and Cloud Engineering.",
    icon: "FileText",
    stat: "18+",
    statLabel: "Publications",
    color: "#10B981",
    year: "2024–2026",
    badge: "IEEE & Conferences",
  },
  {
    id: "ach-02",
    title: "IEEE Reviewer",
    description:
      "Serve as peer reviewer for IEEE Transactions on Industrial Informatics, IEEE IoT Journal, and IEEE Conference on Computer Vision — contributing to the advancement of rigorous AI research standards.",
    icon: "Award",
    stat: "IEEE",
    statLabel: "Peer Reviewer",
    color: "#3B82F6",
    year: "2023–2024",
    badge: "Peer Review",
  },
  {
    id: "ach-03",
    title: "Guest Speaker — AI & Finance",
    description:
      "Invited guest speaker on Generative AI applications in quantitative finance, covering RAG-powered investment research, LLM-based market intelligence, and responsible AI in financial systems.",
    icon: "Mic",
    stat: "Speaker",
    statLabel: "AI + Finance",
    color: "#F59E0B",
    year: "2024",
    badge: "Public Speaker",
  },
  {
    id: "ach-04",
    title: "Patent Contributor",
    description:
      "Co-inventor on patent applications covering AI-driven defect detection systems for industrial quality assurance and multi-modal sensor fusion architectures for manufacturing AI.",
    icon: "Shield",
    stat: "Patent",
    statLabel: "Contributor",
    color: "#8B5CF6",
    year: "2024",
    badge: "IP Portfolio",
  },
  {
    id: "ach-05",
    title: "Hackathon Winner — LPL Financial AI",
    description:
      "Won Most Complete Solution at the LPL Financial AI Hackathon, building a full-stack AI investment intelligence platform with real-time market analysis and natural language querying.",
    icon: "Trophy",
    stat: "Winner",
    statLabel: "LPL Financial 2024",
    color: "#EC4899",
    year: "2024",
    badge: "🏆 Most Complete",
  },
  {
    id: "ach-06",
    title: "60+ Total Citations",
    description:
      "Research cited 60+ times across Google Scholar with h-index of 5 and i10-index of 1, reflecting early growing impact across AI/ML, Computer Vision, Financial AI, and Agentic Systems research.",
    icon: "TrendingUp",
    stat: "60+",
    statLabel: "Citations",
    color: "#06B6D4",
    year: "2023–2024",
    badge: "h-index: 5",
  },
  {
    id: "ach-07",
    title: "Fortune 100 & 500 AI Systems",
    description:
      "Delivered production-grade AI systems at Honeywell (Fortune 100) and Martinrea International (Fortune 500) processing millions of requests in enterprise-scale environments.",
    icon: "Building",
    stat: "2x",
    statLabel: "Fortune Companies",
    color: "#F59E0B",
    year: "2023–2024",
    badge: "Enterprise AI",
  },
  {
    id: "ach-08",
    title: "Government of India Research",
    description:
      "Contributed to the Ministry of Education and AICTE-supported Indian Knowledge Systems initiative focused on cultural heritage preservation and documentation under the Government of India.",
    icon: "Globe",
    stat: "MoE",
    statLabel: "Govt. of India",
    color: "#10B981",
    year: "2023–2024",
    badge: "National Research",
  },
];
