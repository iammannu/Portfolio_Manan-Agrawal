export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    label: "AI / ML",
    description: "Machine learning frameworks, algorithms, and research tooling",
    color: "#10B981",
    skills: [
      { name: "PyTorch", level: 95, category: "ai-ml" },
      { name: "TensorFlow", level: 85, category: "ai-ml" },
      { name: "Transformers", level: 92, category: "ai-ml" },
      { name: "Scikit-learn", level: 90, category: "ai-ml" },
      { name: "XGBoost", level: 88, category: "ai-ml" },
      { name: "Weights & Biases", level: 85, category: "ai-ml" },
      { name: "MLflow", level: 87, category: "ai-ml" },
      { name: "CUDA", level: 78, category: "ai-ml" },
      { name: "JAX", level: 70, category: "ai-ml" },
    ],
  },
  {
    id: "llm-rag",
    label: "LLMs & RAG",
    description: "Large language models, retrieval augmented generation, and agentic AI",
    color: "#8B5CF6",
    skills: [
      { name: "LangChain", level: 93, category: "llm-rag" },
      { name: "LangGraph", level: 88, category: "llm-rag" },
      { name: "OpenAI API", level: 95, category: "llm-rag" },
      { name: "Anthropic API", level: 90, category: "llm-rag" },
      { name: "FAISS", level: 92, category: "llm-rag" },
      { name: "Pinecone", level: 82, category: "llm-rag" },
      { name: "Chroma", level: 80, category: "llm-rag" },
      { name: "RAG Pipelines", level: 95, category: "llm-rag" },
      { name: "Prompt Engineering", level: 92, category: "llm-rag" },
      { name: "Vector Databases", level: 90, category: "llm-rag" },
    ],
  },
  {
    id: "computer-vision",
    label: "Computer Vision",
    description: "Image processing, object detection, and visual AI systems",
    color: "#3B82F6",
    skills: [
      { name: "OpenCV", level: 90, category: "computer-vision" },
      { name: "YOLO", level: 85, category: "computer-vision" },
      { name: "Detectron2", level: 78, category: "computer-vision" },
      { name: "Torchvision", level: 88, category: "computer-vision" },
      { name: "PIL / Pillow", level: 90, category: "computer-vision" },
      { name: "Albumentations", level: 82, category: "computer-vision" },
      { name: "Segmentation Models", level: 80, category: "computer-vision" },
    ],
  },
  {
    id: "backend",
    label: "Backend Engineering",
    description: "APIs, microservices, and scalable server-side systems",
    color: "#F59E0B",
    skills: [
      { name: "Python", level: 97, category: "backend" },
      { name: "FastAPI", level: 92, category: "backend" },
      { name: "Node.js", level: 85, category: "backend" },
      { name: "Express.js", level: 83, category: "backend" },
      { name: "REST APIs", level: 92, category: "backend" },
      { name: "GraphQL", level: 72, category: "backend" },
      { name: "WebSockets", level: 80, category: "backend" },
      { name: "gRPC", level: 70, category: "backend" },
    ],
  },
  {
    id: "fullstack",
    label: "Full Stack",
    description: "Frontend frameworks and full-stack web development",
    color: "#EC4899",
    skills: [
      { name: "React", level: 88, category: "fullstack" },
      { name: "Next.js", level: 87, category: "fullstack" },
      { name: "TypeScript", level: 85, category: "fullstack" },
      { name: "Tailwind CSS", level: 90, category: "fullstack" },
      { name: "JavaScript", level: 88, category: "fullstack" },
      { name: "HTML / CSS", level: 90, category: "fullstack" },
      { name: "Redux", level: 78, category: "fullstack" },
    ],
  },
  {
    id: "data-cloud",
    label: "Data & Cloud",
    description: "Cloud infrastructure, databases, and data engineering pipelines",
    color: "#06B6D4",
    skills: [
      { name: "AWS", level: 85, category: "data-cloud" },
      { name: "PostgreSQL", level: 88, category: "data-cloud" },
      { name: "Redis", level: 82, category: "data-cloud" },
      { name: "Docker", level: 88, category: "data-cloud" },
      { name: "Kubernetes", level: 72, category: "data-cloud" },
      { name: "Apache Spark", level: 75, category: "data-cloud" },
      { name: "Pandas", level: 95, category: "data-cloud" },
      { name: "NumPy", level: 95, category: "data-cloud" },
      { name: "Git", level: 93, category: "data-cloud" },
      { name: "Linux", level: 88, category: "data-cloud" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);
