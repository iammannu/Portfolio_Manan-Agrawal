export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  type: "internship" | "research" | "full-time" | "part-time";
  description: string[];
  tags: string[];
  accentColor: string;
  badge?: string;
  logo?: string;
}

export const experiences: Experience[] = [
  /* ── 1. Martinrea ─────────────────────────────────────────── */
  {
    id: "exp-martinrea",
    title: "Research & Development AI Intern",
    company: "Martinrea International",
    companyUrl: "https://www.martinrea.com",
    location: "Michigan, Remote",
    duration: "Aug 2025 – May 2026",
    startDate: "Aug 2025",
    endDate: "May 2026",
    type: "internship",
    description: [
      "Developed transformer-based semantic duplicate detection systems using FAISS vector similarity search and embedding retrieval for enterprise inventory and idea-management datasets.",
      "Built Fast/Slow movers prediction pipelines using XGBoost and temporal behavioral features to classify inventory movement patterns and support operational forecasting decisions.",
      "Designed anomaly detection and ERP analytics workflows with extensible enterprise data integration pipelines for inventory optimization applications.",
      "Implemented MLflow-based experiment tracking and model versioning pipelines for reproducible ML experimentation and performance monitoring.",
      "Developed scalable vector retrieval pipelines for real-time semantic search and similarity querying on dynamic enterprise datasets.",
    ],
    tags: ["XGBoost", "FAISS", "MLflow", "Python", "Vector Search", "MLOps", "Anomaly Detection", "ERP Analytics"],
    accentColor: "#3B82F6",
    badge: "Fortune 500",
  },

  /* ── 2. Honeywell ─────────────────────────────────────────── */
  {
    id: "exp-honeywell",
    title: "Generative AI Intern",
    company: "Honeywell",
    companyUrl: "https://www.honeywell.com",
    location: "Remote / USA",
    duration: "Jan 2025 – May 2025",
    startDate: "Jan 2025",
    endDate: "May 2025",
    type: "internship",
    description: [
      "Built a production-grade LLM + RAG email classification system processing 50,000+ daily requests with hierarchical classification and semantic embeddings achieving 94.1% accuracy.",
      "Architected FAISS-indexed vector database pipelines with cross-encoder reranking for enterprise knowledge retrieval, reducing search latency by 68% at scale.",
      "Designed confidence-calibrated retrieval pipelines with human-in-the-loop routing for low-confidence classifications, enabling measurable reduction in manual review overhead.",
      "Deployed enterprise LLM workflows integrating multi-stage prompt engineering, context compression, and caching strategies for production reliability.",
      "Collaborated with cross-functional teams to deliver AI automation features reducing operational costs and accelerating intelligent document processing pipelines.",
    ],
    tags: ["LLMs", "RAG", "FAISS", "Vector Databases", "Python", "NLP", "Semantic Retrieval", "Production AI"],
    accentColor: "#F59E0B",
    badge: "Fortune 100",
  },

  /* ── 3. SS Infotech ───────────────────────────────────────── */
  {
    id: "exp-ssinfotech",
    title: "ML Intern",
    company: "SS Infotech",
    location: "India",
    duration: "Oct 2023 – Jun 2024",
    startDate: "Oct 2023",
    endDate: "Jun 2024",
    type: "internship",
    description: [
      "Developed \"CV Robo,\" an ML-powered resume analysis platform designed to improve ATS compatibility for job applications.",
      "Built keyword extraction and semantic matching pipelines to compare uploaded resumes against job descriptions and generate ATS alignment scores.",
      "Designed recommendation workflows that identified missing technical keywords, skill gaps, and resume optimization opportunities to improve ATS performance.",
      "Implemented resume parsing and similarity scoring pipelines using Python-based NLP and feature engineering techniques.",
      "Collaborated on improving candidate-job matching accuracy through iterative scoring and ranking logic improvements.",
    ],
    tags: ["Machine Learning", "Resume Parsing", "ATS Optimization", "Python", "NLP", "Feature Engineering"],
    accentColor: "#06B6D4",
    badge: "ML",
  },

  /* ── 4. HIXAA ─────────────────────────────────────────────── */
  {
    id: "exp-hixaa",
    title: "Research Intern — Computer Vision & Industrial AI",
    company: "HIXAA Technologies Pvt. Ltd.",
    location: "India",
    duration: "Nov 2022 – Sept 2023",
    startDate: "Nov 2022",
    endDate: "Sept 2023",
    type: "research",
    description: [
      "Designed PCB defect detection systems using multi-scale CNN architectures with transfer learning on ResNet backbones for industrial quality control applications.",
      "Optimized defect analysis pipelines for printed circuit board inspection using automated image preprocessing, feature pyramid networks, and real-time inference.",
      "Contributed to projection optical systems design for defect detection workflows, implementing camera calibration, lens distortion correction, and lighting normalization.",
      "Built automated classification pipelines spanning solder joint defects, short circuits, missing components, and copper trace delamination categories.",
      "Collaborated on iterative pipeline improvements and documentation of experimental results for industrial deployment readiness.",
    ],
    tags: ["Computer Vision", "Deep Learning", "PyTorch", "OpenCV", "PCB Inspection", "ResNet", "Industrial AI"],
    accentColor: "#8B5CF6",
    badge: "Research",
  },

  /* ── 5. Ministry of Education / AICTE ────────────────────── */
  {
    id: "exp-aicte",
    title: "Research Intern — Indian Knowledge Systems Division",
    company: "Ministry of Education, Government of India",
    location: "India (On Site)",
    duration: "Oct 2023 – Jun 2024",
    startDate: "Oct 2023",
    endDate: "Jun 2024",
    type: "research",
    description: [
      "Contributed to the AICTE-supported Indian Knowledge Systems initiative focused on preservation and documentation of indigenous cultural heritage and traditional knowledge systems.",
      "Conducted on-site research, documentation, and structured archival work for traditional Samaj cultural artifacts and heritage records.",
      "Collaborated with academic mentors and institutional coordinators to organize and digitize cultural preservation data for long-term archival initiatives.",
      "Contributed to documentation and preservation efforts aligned with Government of India educational and cultural heritage initiatives.",
      "Research contributions supported long-term knowledge preservation and educational archival initiatives.",
    ],
    tags: ["Digital Archival", "Cultural Research", "Documentation", "AICTE", "Government Research", "Heritage Preservation"],
    accentColor: "#10B981",
    badge: "Govt. of India",
  },
];
