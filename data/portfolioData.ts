export const portfolioData = {
  name: "Ahtisham",
  title: "AI Engineer | Agentic AI & RAG Systems | MLOps & Cloud (AWS)",
  tagline: "Building AI systems that don’t just work in notebooks — but scale in the real world.",
  summary: "AI Engineer specializing in Agentic AI systems, Retrieval-Augmented Generation (RAG), and production-grade machine learning architectures. Experienced in building scalable, fault-tolerant AI solutions using LangGraph, LangChain, and modern MLOps practices. Skilled in deploying real-world AI systems on AWS using Docker, CI/CD pipelines, and monitoring tools. Passionate about developing intelligent, autonomous systems for real-world problem solving.",
  
  skills: [
    {
      category: "AI & Machine Learning",
      items: [
        "Agentic AI Systems",
        "Retrieval-Augmented Generation (RAG)",
        "LLM Fine-Tuning",
        "LangGraph (Advanced)",
        "LangChain",
        "Deep Learning (CNN, RNN, LSTM, ANN)"
      ]
    },
    {
      category: "MLOps & DevOps",
      items: [
        "Docker & Containerization",
        "CI/CD (GitHub Actions)",
        "MLflow & Experiment Tracking",
        "DVC (Data Versioning)",
        "AWS (EC2, ECR, IAM, VPC)"
      ]
    },
    {
      category: "Programming & Development",
      items: [
        "Python (Expert)",
        "C++, JavaScript, Node.js",
        "FastAPI, Flask, Streamlit",
        "HTML, CSS, Bootstrap"
      ]
    },
    {
      category: "Databases & Tools",
      items: [
        "ChromaDB, Vector Databases",
        "MySQL, MongoDB",
        "Power BI"
      ]
    }
  ],

  projects: [
    {
      id: "weatherpro-ai",
      title: "WeatherPro AI",
      subtitle: "Industrial AI Weather Forecasting System",
      description: "A full-stack MLOps system designed for real-world weather prediction using cloud deployment and monitoring.",
      features: [
        "Real-time data ingestion using OpenWeatherMap API",
        "Machine Learning model: RandomForestRegressor",
        "Model tracking with MLflow",
        "Data Drift detection using Evidently AI",
        "FastAPI-based dashboard for live predictions"
      ],
      deployment: [
        "Docker containerization",
        "AWS EC2 deployment",
        "Image storage in Amazon ECR",
        "Custom VPC networking"
      ],
      techStack: ["Python", "Pandas", "Scikit-learn", "FastAPI", "MLflow", "Evidently AI", "Docker", "AWS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "rag-career-counseling",
      title: "RAG-based Career Counseling System",
      subtitle: "FYP Project",
      description: "Built an intelligent chatbot using RAG + LLM to provide personalized career recommendations based on user profiles and market trends.",
      features: [
        "Intelligent chatbot using RAG + LLM",
        "Personalized career recommendations",
        "Vector database + embeddings"
      ],
      techStack: ["Python", "Flask", "HTML", "CSS", "Vector DB", "LLM"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "agentic-email-assistant",
      title: "Agentic Email Assistant",
      subtitle: "LangGraph + Docker",
      description: "An autonomous agent that manages emails, drafts responses, and categorizes incoming mail using advanced LLM reasoning.",
      techStack: ["LangGraph", "Docker", "Python", "LLM"],
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "persistent-roleplay-interviewer",
      title: "Persistent Roleplay Interviewer",
      subtitle: "AWS Deployment",
      description: "An AI-powered interviewer that maintains state across sessions, providing a realistic interview experience.",
      techStack: ["AWS", "Python", "LLM", "React"],
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: "ai-medical-chatbot",
      title: "AI Medical Chatbot",
      subtitle: "RAG Based",
      description: "A medical assistant capable of answering health-related queries using a curated medical knowledge base.",
      techStack: ["RAG", "Python", "LLM"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    }
  ],

  experience: [
    {
      role: "AI Engineer Intern",
      company: "Metropolitan Warehouse & Delivery Corp. (USA)",
      duration: "Present",
      highlights: [
        "Built agentic AI systems for logistics automation",
        "Reduced manual work by 35%",
        "Improved system reliability using state persistence"
      ]
    },
    {
      role: "Machine Learning Lab Assistant",
      company: "UAJK",
      duration: "Previous",
      highlights: [
        "Helped students with ML models & preprocessing",
        "Automated evaluation pipelines"
      ]
    }
  ],

  achievements: [
    "Built 5+ production-grade AI systems",
    "Designed fault-tolerant agent architectures",
    "Improved system efficiency & reliability using checkpointing"
  ],

  socials: {
    linkedin: "https://www.linkedin.com/in/ahtisham-ijaz-768213342/",
    github: "https://github.com/AhtishamIjaz",
    email: "ahtishamijaz55@gmail.com"
  }
};
