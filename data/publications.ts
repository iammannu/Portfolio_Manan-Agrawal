export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  citations: number;
  abstract: string;
  tags: string[];
  doi?: string;
  pdfUrl?: string;
  scholarUrl: string;
  type: "conference" | "preprint";
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: "pub-01",
    title: "Predicting Stock Market Trends Using Machine Learning and Sentiment Analysis",
    authors: ["M. Agrawal", "A. Mukherjee"],
    venue: "IEEE SoutheastCon 2025",
    venueShort: "SoutheastCon 2025",
    year: 2025,
    citations: 21,
    abstract:
      "This paper investigates machine learning and natural language processing approaches for predicting directional stock market movements. We evaluate multiple ML classifiers combined with sentiment analysis on financial news corpora, demonstrating improved directional accuracy over baseline technical indicator models across equity markets.",
    tags: ["Machine Learning", "Sentiment Analysis", "Stock Prediction", "Time Series", "Finance"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
    featured: true,
  },
  {
    id: "pub-02",
    title: "YOLOv5-Based Object Detection for Emergency Response in Aerial Imagery",
    authors: ["S. Boddu", "A. Mukherjee", "M. Agrawal"],
    venue: "IEEE SoutheastCon 2025",
    venueShort: "SoutheastCon 2025",
    year: 2025,
    citations: 8,
    abstract:
      "We present a YOLOv5-based object detection framework for automated emergency response support in aerial drone imagery. Our model achieves real-time detection of emergency personnel, vehicles, and incident zones across diverse environmental conditions, enabling faster situational awareness for first responder coordination.",
    tags: ["Computer Vision", "Object Detection", "YOLO", "Aerial Imagery", "Emergency Response"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
    featured: true,
  },
  {
    id: "pub-03",
    title: "Hybrid LSTM-Transformer Model for Stock Market Prediction: A Deep Learning Approach",
    authors: ["N. S. R. Gona", "D. R. Aunugu", "V. Methuku", "M. Agrawal", "P. K. Myakala"],
    venue: "2025 IEEE International Conference on Artificial Intelligence Testing Systems",
    venueShort: "IEEE ICAITS 2025",
    year: 2025,
    citations: 7,
    abstract:
      "We propose a hybrid architecture combining long short-term memory networks with transformer-based attention mechanisms for multi-horizon stock market prediction. The model captures both temporal dependencies and cross-asset correlations, outperforming LSTM-only and Transformer-only baselines on daily return prediction tasks.",
    tags: ["Deep Learning", "LSTM", "Transformers", "Stock Prediction", "Time Series", "Finance"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
    featured: true,
  },
  {
    id: "pub-04",
    title: "Fault-Tolerant Federated Learning Framework for Edge Devices in Unstable Networks",
    authors: ["P. K. Myakala", "M. Agrawal"],
    venue: "Authorea Preprints",
    venueShort: "Preprint 2025",
    year: 2025,
    citations: 6,
    abstract:
      "We introduce a fault-tolerant federated learning framework designed for edge devices operating under unstable network conditions. Our approach incorporates adaptive aggregation strategies, dropout resilience mechanisms, and asynchronous update protocols to maintain model quality when client participation is intermittent or unreliable.",
    tags: ["Federated Learning", "Edge AI", "Distributed ML", "Fault Tolerance", "Privacy"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "preprint",
  },
  {
    id: "pub-05",
    title: "PCB Defect Detection Using Deep Learning Methods",
    authors: ["A. Sharma", "M. Agrawal", "P. Sardeshpande", "A. Gupta", "A. Pasha"],
    venue: "2024 International Conference on Computing Communication and Networking Technologies",
    venueShort: "ICCCNT 2024",
    year: 2024,
    citations: 5,
    abstract:
      "This paper applies deep learning techniques including convolutional neural networks and transfer learning to automated PCB defect detection. We evaluate multiple architectures on industrial PCB image datasets, comparing performance across solder joint defects, component misalignments, and trace anomalies for manufacturing quality control.",
    tags: ["Computer Vision", "Deep Learning", "PCB Inspection", "Transfer Learning", "Industrial AI"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
    featured: true,
  },
  {
    id: "pub-06",
    title: "Harnessing Big Data for Price Predictions in Oil and Gas Markets",
    authors: ["M. Agrawal", "O. Nagpurey", "K. Dhote"],
    venue: "2024 International Conference on Recent Trends in Microelectronics",
    venueShort: "ICRTME 2024",
    year: 2024,
    citations: 4,
    abstract:
      "We investigate big data analytics approaches for price prediction in oil and gas markets, integrating multi-source data streams including production data, geopolitical indicators, and commodity market signals. Our framework combines feature engineering with ensemble ML models to support strategic pricing decisions in energy market applications.",
    tags: ["Big Data", "Price Prediction", "Oil & Gas", "Ensemble ML", "Analytics"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-07",
    title: "Advancements in PCB Defect Detection: An In-Depth Exploration of Image Processing Techniques",
    authors: ["J. Sood", "M. Agrawal", "R. R. Khandelwal", "H. Zambani", "A. Ghumade"],
    venue: "2024 International Conference on Pervasive Computing and Social Networking",
    venueShort: "ICPCSN 2024",
    year: 2024,
    citations: 4,
    abstract:
      "This study examines classical and modern image processing techniques applied to PCB defect detection, covering edge detection, morphological operations, frequency domain analysis, and deep learning-based approaches. We provide a structured comparison of methods across defect types and production environments to guide practical implementation choices.",
    tags: ["Computer Vision", "Image Processing", "PCB Inspection", "Deep Learning", "Industrial AI"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-08",
    title: "Composable AI Stack for Intelligent Agents: Modular Orchestration Using Context Routing, Memory, and Tools",
    authors: ["A. Rudra", "M. Agrawal"],
    venue: "2025 International Conference on Computer and Applications (ICCA)",
    venueShort: "ICCA 2025",
    year: 2025,
    citations: 2,
    abstract:
      "We present a composable AI stack architecture for building intelligent agents through modular orchestration of context routing, external memory, and tool-use capabilities. The framework decouples reasoning, retrieval, and execution components, enabling flexible agent composition and systematic evaluation of individual orchestration modules.",
    tags: ["Agentic AI", "LLMs", "Context Routing", "AI Architecture", "Multi-Agent Systems"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
    featured: true,
  },
  {
    id: "pub-09",
    title: "Integrating Advanced Big Data Analytics for Strategic Price Projections in the Oil and Gas Industry",
    authors: ["M. Agrawal", "O. Nagpurey", "K. Soni", "S. Sajnani", "K. Dhote", "S. Rahate"],
    venue: "Proceedings of the International Conference on Information System Design",
    venueShort: "ICISD 2024",
    year: 2024,
    citations: 2,
    abstract:
      "This paper presents an advanced big data analytics pipeline for long-horizon strategic price projections in the oil and gas sector, incorporating diverse market signals, supply-demand features, and geopolitical indicators. Our multi-model ensemble approach improves projection accuracy for planning and hedging applications across energy market scenarios.",
    tags: ["Big Data", "Analytics", "Oil & Gas", "Price Projection", "Ensemble ML"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-10",
    title: "BeliefShift: Benchmarking Temporal Belief Consistency and Opinion Drift in LLM Agents",
    authors: ["P. K. Myakala", "M. Agrawal", "R. Manche"],
    venue: "arXiv preprint arXiv:2603.23848",
    venueShort: "arXiv 2026",
    year: 2026,
    citations: 1,
    abstract:
      "We introduce BeliefShift, a benchmark for evaluating temporal belief consistency and opinion drift in large language model agents. The benchmark probes LLM reasoning stability across time-sensitive factual updates, measuring how models handle contradictory information and track evolving world states across multi-turn interaction sequences.",
    tags: ["LLMs", "Benchmarking", "Temporal Reasoning", "AI Agents", "NLP"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "preprint",
    featured: true,
  },
  {
    id: "pub-11",
    title: "Quantum-Enhanced Transactional Cloud Operations Using Agentic AI",
    authors: ["S. Sudarsan", "N. Karra", "M. Rana", "M. Agrawal"],
    venue: "IEEE SoutheastCon 2026",
    venueShort: "SoutheastCon 2026",
    year: 2026,
    citations: 0,
    abstract:
      "This paper explores the integration of quantum computing primitives with agentic AI frameworks for enhanced transactional cloud operations. We describe an architecture combining quantum-enhanced optimization routines with AI agent orchestration to improve throughput, security, and resource allocation in cloud-native transaction processing pipelines.",
    tags: ["Quantum Computing", "Agentic AI", "Cloud Computing", "AI Systems"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-12",
    title: "Explainable AI for Marketing Intelligence: Interpretable Multi-Agent Systems for Data-Driven Decision Support",
    authors: ["A. Rudra", "M. S. Karumuri", "M. Agrawal"],
    venue: "IEEE SoutheastCon 2026",
    venueShort: "SoutheastCon 2026",
    year: 2026,
    citations: 0,
    abstract:
      "We present a multi-agent AI system for marketing intelligence that prioritizes explainability and interpretability throughout the decision pipeline. The framework combines interpretable ML models with multi-agent coordination to deliver auditable marketing insights with transparent reasoning for data-driven strategic decision support.",
    tags: ["XAI", "Multi-Agent Systems", "Marketing AI", "Decision Support", "Explainability"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-13",
    title: "A Probabilistic Multi-Signal Framework for Directional Movement Forecasting in Financial Time Series",
    authors: ["M. Agrawal", "A. Mukherjee"],
    venue: "IEEE SoutheastCon 2026",
    venueShort: "SoutheastCon 2026",
    year: 2026,
    citations: 0,
    abstract:
      "We propose a probabilistic framework integrating multiple heterogeneous signals for directional movement forecasting in financial time series. The approach combines technical, fundamental, and sentiment signals through a calibrated probabilistic ensemble, providing uncertainty-aware forecasts with confidence intervals for quantitative trading and risk management applications.",
    tags: ["Quantitative AI", "Financial Forecasting", "Probabilistic ML", "Time Series", "Finance"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-14",
    title: "Benchmarking AI vs Human Decision-Making in Product Management",
    authors: ["M. S. Karumuri", "A. Rudra", "M. Agrawal"],
    venue: "IEEE SoutheastCon 2026",
    venueShort: "SoutheastCon 2026",
    year: 2026,
    citations: 0,
    abstract:
      "This paper presents a structured benchmark comparing AI-driven and human decision-making across representative product management scenarios. We evaluate accuracy, consistency, and reasoning quality across roadmap prioritization, feature scoping, and trade-off analysis tasks, identifying conditions where AI assistance improves or complements human judgment.",
    tags: ["AI Benchmarking", "Decision-Making", "Product Management", "Human-AI Collaboration"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-15",
    title: "AI-Assisted Detection of Malicious Changes in Infrastructure-as-Code for Secure DevSecOps",
    authors: ["S. Sudarsan", "M. Agrawal", "A. Banerjee"],
    venue: "2026 IEEE International Conference on AI in Cybersecurity",
    venueShort: "IEEE ICAIC 2026",
    year: 2026,
    citations: 0,
    abstract:
      "We develop an AI-assisted detection framework for identifying malicious modifications in infrastructure-as-code repositories, targeting supply chain attack vectors in DevSecOps pipelines. Our approach uses static analysis, semantic code embeddings, and anomaly detection to flag suspicious configuration changes before deployment in cloud infrastructure environments.",
    tags: ["Cybersecurity", "DevSecOps", "AI Security", "Infrastructure-as-Code", "Anomaly Detection"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-16",
    title: "Operationalizing AI in Cloud-Native Systems: A DevSecOps Framework for Secure, Scalable, and Cost-Efficient Engineering",
    authors: ["M. Agrawal", "S. Sudarsan"],
    venue: "2025 International Conference on Computer and Applications (ICCA)",
    venueShort: "ICCA 2025",
    year: 2025,
    citations: 0,
    abstract:
      "This paper presents a DevSecOps framework for operationalizing AI workloads in cloud-native systems, addressing security, scalability, and cost-efficiency requirements simultaneously. We describe integration patterns for CI/CD pipelines, model monitoring, infrastructure-as-code management, and compliance automation for production AI systems.",
    tags: ["DevSecOps", "Cloud-Native", "AI Systems", "MLOps", "Security"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-17",
    title: "A Heuristic-First Evaluation Framework for Marketing AI Agents: Judging Quality, Actionability, and Trust",
    authors: ["A. Rudra", "M. Agrawal"],
    venue: "2025 IEEE International Conference on Advances in Data-Driven Analytics",
    venueShort: "IEEE ICADDA 2025",
    year: 2025,
    citations: 0,
    abstract:
      "We propose a heuristic-first evaluation framework for assessing marketing AI agents across quality, actionability, and trustworthiness dimensions. The framework provides structured rubrics and automated scoring methods for evaluating AI-generated marketing recommendations, enabling systematic comparison of agent outputs against practitioner expectations.",
    tags: ["AI Agents", "Marketing AI", "Evaluation Framework", "LLMs", "Decision Support"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "conference",
  },
  {
    id: "pub-18",
    title: "AI-Driven Big Data Analytics for Strategic Marketing and Price Optimization in the Oil and Gas Industry",
    authors: ["A. Rudra", "M. S. Karumuri", "M. Agrawal"],
    venue: "In Preparation",
    venueShort: "Preprint",
    year: 2025,
    citations: 0,
    abstract:
      "This work explores AI-driven big data analytics pipelines for strategic marketing and dynamic price optimization in the oil and gas sector. We combine predictive modeling with market intelligence extraction to support real-time pricing decisions and long-term marketing strategy development for energy industry stakeholders.",
    tags: ["Big Data", "AI Analytics", "Marketing", "Oil & Gas", "Price Optimization"],
    scholarUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ",
    type: "preprint",
  },
];

export const scholarStats = {
  totalCitations: 60,
  hIndex: 5,
  i10Index: 1,
  totalPublications: publications.length,
  profileUrl: "https://scholar.google.com/citations?user=2vrZHA0AAAAJ&hl=en",
};

export const publicationsByYear = publications.reduce(
  (acc, pub) => {
    acc[pub.year] = (acc[pub.year] || 0) + 1;
    return acc;
  },
  {} as Record<number, number>
);
