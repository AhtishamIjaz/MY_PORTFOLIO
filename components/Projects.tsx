import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ExternalLink, Github, PlayCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const projects: Project[] = [
  {
    id: 1,
    title: "WeatherPro AI",
    description: "An industrial-grade MLOps system for real-time weather forecasting using OpenWeatherMap API and RandomForest. Features MLflow tracking and Evidently AI for drift detection.",
    tags: ["FastAPI", "MLflow", "Evidently AI", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "RAG Career Counseling",
    description: "An intelligent chatbot built using RAG and LLMs to provide personalized career recommendations based on user profiles and market trends.",
    tags: ["RAG", "LLM", "Vector DB", "Flask", "Python"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Agentic Email Assistant",
    description: "An autonomous agent powered by LangGraph and Docker that manages emails, drafts responses, and categorizes incoming mail with advanced reasoning.",
    tags: ["LangGraph", "Docker", "Python", "LLM"],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Persistent Interviewer",
    description: "An AI roleplay interviewer deployed on AWS that maintains session state, providing a realistic and persistent interview experience.",
    tags: ["AWS", "Python", "LLM", "State Persistence"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 5,
    title: "AI Medical Chatbot",
    description: "A RAG-based medical assistant capable of answering health-related queries using a curated knowledge base of medical literature.",
    tags: ["RAG", "Python", "LLM", "Healthcare AI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 6,
    title: "Stock Price Prediction",
    description: "A deep learning model using LSTM networks to predict future stock prices based on historical time-series data.",
    tags: ["LSTM", "Python", "TensorFlow", "Finance"],
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 7,
    title: "LLM Fine-Tuning Pipeline",
    description: "An end-to-end pipeline for fine-tuning Large Language Models on custom datasets to improve domain-specific performance and instruction following capabilities.",
    tags: ["LLaMA", "PyTorch", "LoRA", "HuggingFace"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 8,
    title: "SecureOrder-Pro (Digital Employee)",
    description: "An agentic AI system deployed on Hugging Face acting as a digital employee to automate secure order processing and intelligent customer interactions.",
    tags: ["Agentic AI", "Hugging Face", "Python", "LLM"],
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 9,
    title: "Kidney Disease Classification Pipeline",
    description: "An end-to-end MLOps pipeline for classifying kidney disease from medical data. Incorporates MLflow for experiment tracking and DVC for data version control.",
    tags: ["MLOps", "MLflow", "DVC", "Healthcare", "Python"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    demoUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Featured <span className="text-secondary">Projects</span></h2>
            <p className="text-slate-600 max-w-xl text-sm sm:text-base">
              A showcase of my work in Agentic AI, MLOps, Computer Vision, and Data Science.
            </p>
          </div>
          <a href="https://github.com/AhtishamIjaz" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-50 flex-wrap">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      {project.demoUrl.includes("linkedin.com") ? (
                        <>
                          <PlayCircle className="w-4 h-4" /> Watch Demo
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </>
                      )}
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.slug && (
                    <Link to={`/project/${project.slug}`} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors ml-auto">
                      <BookOpen className="w-4 h-4" /> Details
                    </Link>
                  )}
                  {!project.githubUrl && !project.demoUrl && !project.slug && (
                     <span className="text-sm text-slate-400 italic">Links coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center md:hidden">
          <a href="https://github.com/AhtishamIjaz" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;