export interface Project {
  id: string;
  name: string;
  displayName: string;
  repoName: string;
  repoOwner: string;
  description: string;
  longDescription: string;
  architecture: string[];
  techStack: string[];
  highlights: string[];
  challenges: string[];
  impact: string;
  category: string[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  status: "production" | "research" | "prototype";
}

export const projects: Project[] = [
  {
    id: "proj-01",
    name: "ALPHA",
    displayName: "ALPHA — Quantitative AI Investment Platform",
    repoName: "ALPHA",
    repoOwner: "iammannu",
    description: "AI-driven quantitative investment reasoning platform with GenAI-powered financial intelligence and real-time market signal processing.",
    longDescription:
      "ALPHA is a full-stack quantitative AI investment platform that combines large language models with quantitative signal processing for intelligent investment decision-making. It integrates real-time market data, earnings transcripts, news sentiment, and macroeconomic indicators through a multi-modal reasoning engine built on top of retrieval-augmented generation pipelines.",
    architecture: [
      "Multi-modal LLM reasoning engine over financial signals",
      "Real-time market data ingestion with vector-indexed semantic search",
      "Transformer-based time series forecasting pipeline",
      "RAG-powered research summarization and insight generation",
      "Portfolio optimization layer with risk-adjusted return modeling",
    ],
    techStack: ["Python", "LangChain", "LangGraph", "FAISS", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "14.3% annualized alpha over benchmark on backtested equity strategies",
      "GenAI advisor generates contextual investment thesis in natural language",
      "Sub-second semantic market intelligence retrieval from 10M+ document corpus",
      "Integrated multi-agent reasoning with tool-calling for live data access",
    ],
    challenges: [
      "Synchronizing real-time streaming data with vector index updates at scale",
      "Calibrating LLM confidence for financial recommendations requiring factual grounding",
      "Designing agentic reasoning loops with appropriate human-oversight checkpoints",
    ],
    impact: "Production-grade quantitative AI platform demonstrating GenAI's potential in financial intelligence systems, with measurable alpha generation through intelligent multi-modal signal fusion.",
    category: ["AI/ML", "Finance", "Research"],
    accentColor: "#F59E0B",
    gradientFrom: "#F59E0B",
    gradientTo: "#EF4444",
    githubUrl: "https://github.com/iammannu/ALPHA",
    featured: true,
    status: "research",
  },
  {
    id: "proj-02",
    name: "MechanisticAI",
    displayName: "Mechanistic Interpretability Research Engineer",
    repoName: "mechanistic-interpretability-research-engineer",
    repoOwner: "iammannu",
    description: "Research toolkit for mechanistic interpretability of transformer models — attention pattern analysis, circuit discovery, and neural causal tracing.",
    longDescription:
      "A comprehensive research toolkit for mechanistic interpretability of large transformer-based language models. Implements activation patching, causal tracing, attention head analysis, and circuit discovery techniques to understand the computational structure underlying model behavior on specific tasks.",
    architecture: [
      "Activation patching pipeline for causal intervention studies",
      "Attention head classification using probing classifiers",
      "Circuit discovery via edge attribution and path patching",
      "Logit lens and vocabulary projection analysis tools",
      "Automated circuit visualization and comparison dashboards",
    ],
    techStack: ["Python", "PyTorch", "TransformerLens", "Einops", "Plotly", "Jupyter", "NumPy", "Weights & Biases"],
    highlights: [
      "Identified 23 distinct functional circuits in GPT-class models",
      "Automated attention head clustering into 8 functional categories",
      "Interactive circuit visualization with pathway strength attribution",
      "Published findings at ACL 2024 on LLM mechanistic interpretability",
    ],
    challenges: [
      "Scaling causal intervention experiments to 70B+ parameter models",
      "Defining ground-truth circuit boundaries for complex multi-hop reasoning tasks",
      "Automating meaningful circuit discovery without human annotation bias",
    ],
    impact: "Open-source interpretability research toolkit advancing understanding of transformer internals, enabling principled model debugging and safety analysis.",
    category: ["AI/ML", "Research"],
    accentColor: "#8B5CF6",
    gradientFrom: "#8B5CF6",
    gradientTo: "#EC4899",
    githubUrl: "https://github.com/iammannu/mechanistic-interpretability-research-engineer",
    featured: true,
    status: "research",
  },
  {
    id: "proj-03",
    name: "XemelgoDash",
    displayName: "Xemelgo Enterprise Dashboard",
    repoName: "xemelgo-dashboard",
    repoOwner: "iammannu",
    description: "Full-stack enterprise inventory management dashboard with real-time analytics, JWT authentication, and AWS cloud deployment.",
    longDescription:
      "A production-grade enterprise dashboard for intelligent inventory tracking and management, built with React frontend, Node.js API layer, and PostgreSQL database. Features real-time inventory analytics, predictive reorder alerts, barcode/RFID integration, and role-based access control with JWT authentication.",
    architecture: [
      "React SPA with TypeScript and Context API state management",
      "Node.js + Express RESTful API with middleware pipeline",
      "PostgreSQL with connection pooling and query optimization",
      "AWS EC2 deployment with RDS and S3 for asset storage",
      "JWT-based authentication with refresh token rotation",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS EC2", "AWS RDS", "JWT", "Docker"],
    highlights: [
      "Real-time inventory analytics with predictive reorder recommendations",
      "Role-based access control supporting 5 organizational permission levels",
      "Sub-100ms API response times with PostgreSQL query optimization",
      "CI/CD pipeline with automated testing and AWS blue-green deployment",
    ],
    challenges: [
      "Designing efficient real-time sync between warehouse floor devices and central DB",
      "Implementing granular RBAC without sacrificing UI performance at scale",
      "Optimizing complex aggregate inventory queries for large multi-warehouse datasets",
    ],
    impact: "Enterprise-grade inventory management system deployed in production, reducing inventory discrepancies by 47% through intelligent tracking and real-time visibility.",
    category: ["Full Stack", "Enterprise"],
    accentColor: "#3B82F6",
    gradientFrom: "#3B82F6",
    gradientTo: "#06B6D4",
    githubUrl: "https://github.com/iammannu/xemelgo-dashboard",
    status: "production",
  },
  {
    id: "proj-04",
    name: "LeadGen",
    displayName: "AI-Powered Lead Generation Engine",
    repoName: "Lead-gen",
    repoOwner: "iammannu",
    description: "Intelligent business lead generation and qualification system with AI-driven scoring, NLP intent classification, and CRM automation.",
    longDescription:
      "An end-to-end AI-powered lead generation platform that automates prospecting, qualification, and outreach workflows. The system combines NLP-based intent classification, web graph traversal for company intelligence gathering, and multi-stage AI scoring pipelines to deliver high-quality qualified leads with contextual business intelligence.",
    architecture: [
      "NLP intent classification with fine-tuned transformer models",
      "Web graph crawling and entity extraction for prospect intelligence",
      "Multi-stage AI qualification scoring with confidence calibration",
      "CRM integration layer with Salesforce and HubSpot connectors",
      "Automated outreach sequencing with personalization engine",
    ],
    techStack: ["Python", "FastAPI", "LangChain", "Transformers", "PostgreSQL", "Redis", "React", "Docker", "AWS"],
    highlights: [
      "85% reduction in manual lead qualification time",
      "89% qualification accuracy across 12 industry verticals",
      "Automated CRM enrichment with 40+ business intelligence signals",
      "Real-time prospect scoring with sub-second API response",
    ],
    challenges: [
      "Maintaining classification accuracy across diverse industry terminology",
      "Ethically crawling and aggregating business intelligence at scale",
      "Calibrating qualification thresholds across different sales use cases",
    ],
    impact: "Production-deployed lead intelligence platform automating 85% of qualification workflows while improving sales team conversion rates through AI-driven prospect prioritization.",
    category: ["AI/ML", "Full Stack", "Enterprise"],
    accentColor: "#10B981",
    gradientFrom: "#10B981",
    gradientTo: "#3B82F6",
    githubUrl: "https://github.com/iammannu/Lead-gen",
    status: "production",
  },
  {
    id: "proj-05",
    name: "HackNCLPL",
    displayName: "LPL Financial AI Hackathon — Most Complete Solution",
    repoName: "HackNC_Fidelity",
    repoOwner: "iammannu",
    description: "Award-winning AI financial analytics platform built at HackNC — real-time investment intelligence powered by LLMs and live market data.",
    longDescription:
      "Award-winning project at HackNC, recognized as Most Complete Solution by LPL Financial. A real-time financial intelligence platform combining live market data feeds, LLM-powered earnings analysis, portfolio risk assessment, and a natural language query interface for intelligent investing decisions.",
    architecture: [
      "Real-time market data ingestion via financial APIs",
      "LLM-powered earnings transcript analysis and summarization",
      "Portfolio risk scoring with Monte Carlo simulation",
      "Natural language financial query interface",
      "Interactive visualization dashboard with live chart updates",
    ],
    techStack: ["Python", "React", "FastAPI", "OpenAI API", "LangChain", "PostgreSQL", "WebSocket", "Recharts"],
    highlights: [
      "Winner — Most Complete Solution, LPL Financial AI Hackathon at HackNC",
      "Real-time NLP analysis of earnings calls and financial documents",
      "Natural language portfolio Q&A with cited source attribution",
      "Live market intelligence dashboard with sub-second data refresh",
    ],
    challenges: [
      "Processing and indexing financial document streams in real-time",
      "Ensuring factual grounding of LLM financial insights",
      "Building a full-stack production system within 36-hour hackathon constraints",
    ],
    impact: "Most Complete Solution winner at HackNC, demonstrating the value of AI-driven financial intelligence tools for accessible investment research.",
    category: ["AI/ML", "Finance", "Full Stack"],
    accentColor: "#EC4899",
    gradientFrom: "#EC4899",
    gradientTo: "#8B5CF6",
    githubUrl: "https://github.com/iammannu/HackNC_Fidelity",
    featured: true,
    status: "prototype",
  },
];
