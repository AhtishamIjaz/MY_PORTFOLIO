import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { 
  Database, Layout, Brain, Cpu, Layers, Terminal, 
  Code2, FileCode, Coffee, Github, Laptop, FileJson, 
  BarChart, PieChart, TableProperties, Bot, Sparkles, 
  MessageSquareText, Link, Workflow, FileText, Search,
  Users, Server, Activity, MessageSquare, HardDrive, UserCheck,
  Globe, Cloud, Settings, Boxes, ShieldCheck, Monitor
} from 'lucide-react';

const PythonIcon = () => <span className="font-mono font-bold text-yellow-500">PY</span>;
const TFIcon = () => <span className="font-mono font-bold text-orange-500">TF</span>;
const TSIcon = () => <span className="font-mono font-bold text-blue-500">TS</span>;

const skills: Skill[] = [
  // AI & Machine Learning
  { name: 'Agentic AI Systems', level: 95, category: 'AI & Machine Learning', icon: <Bot className="text-violet-600" /> },
  { name: 'RAG Architectures', level: 95, category: 'AI & Machine Learning', icon: <Database className="text-cyan-600" /> },
  { name: 'LLM Fine-Tuning', level: 88, category: 'AI & Machine Learning', icon: <Sparkles className="text-purple-500" /> },
  { name: 'LangGraph (Advanced)', level: 92, category: 'AI & Machine Learning', icon: <Workflow className="text-blue-600" /> },
  { name: 'LangChain', level: 94, category: 'AI & Machine Learning', icon: <Link className="text-orange-500" /> },
  { name: 'Deep Learning (CNN, RNN, LSTM)', level: 90, category: 'AI & Machine Learning', icon: <Brain className="text-pink-500" /> },

  // MLOps & DevOps
  { name: 'Docker & Containerization', level: 90, category: 'MLOps & DevOps', icon: <Boxes className="text-blue-500" /> },
  { name: 'CI/CD (GitHub Actions)', level: 88, category: 'MLOps & DevOps', icon: <Settings className="text-slate-600" /> },
  { name: 'MLflow & Experiment Tracking', level: 85, category: 'MLOps & DevOps', icon: <Activity className="text-pink-600" /> },
  { name: 'DVC (Data Versioning)', level: 82, category: 'MLOps & DevOps', icon: <HardDrive className="text-indigo-500" /> },
  { name: 'AWS (EC2, ECR, VPC)', level: 85, category: 'MLOps & DevOps', icon: <Cloud className="text-orange-500" /> },

  // Programming & Development
  { name: 'Python (Expert)', level: 98, category: 'Programming & Development', icon: <PythonIcon /> },
  { name: 'C++ & JavaScript', level: 85, category: 'Programming & Development', icon: <Code2 className="text-blue-700" /> },
  { name: 'FastAPI & Flask', level: 92, category: 'Programming & Development', icon: <Server className="text-emerald-500" /> },
  { name: 'Streamlit', level: 90, category: 'Programming & Development', icon: <Layout className="text-red-500" /> },
  { name: 'HTML & CSS (Bootstrap)', level: 88, category: 'Programming & Development', icon: <Layout className="text-orange-600" /> },

  // Databases & Tools
  { name: 'ChromaDB & Vector DBs', level: 92, category: 'Databases & Tools', icon: <Search className="text-indigo-500" /> },
  { name: 'MySQL & MongoDB', level: 85, category: 'Databases & Tools', icon: <Database className="text-slate-600" /> },
  { name: 'Power BI', level: 80, category: 'Databases & Tools', icon: <BarChart className="text-blue-600" /> },
  { name: 'Git & GitHub', level: 92, category: 'Databases & Tools', icon: <Github className="text-slate-800" /> },
];


const Skills: React.FC = () => {
    const categories = ['AI & Machine Learning', 'MLOps & DevOps', 'Programming & Development', 'Databases & Tools'] as const;

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-slate-900">Technical <span className="text-primary">Expertise</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            A robust set of skills spanning advanced Agentic AI, Generative AI, Data Science, and Full Stack Development.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll with Snap | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-auto md:px-0">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="flex-shrink-0 w-[85%] sm:w-[380px] md:w-auto snap-center bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full"

            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                {category}
              </h3>
              <div className="space-y-4 md:space-y-5">
                {skills.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2.5">
                         <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                           {skill.icon}
                         </div>
                         <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full rounded-full ${
                          category === 'AI & Machine Learning' ? 'bg-gradient-to-r from-primary to-accent' :
                          category === 'MLOps & DevOps' ? 'bg-gradient-to-r from-orange-400 to-rose-500' :
                          category === 'Programming & Development' ? 'bg-gradient-to-r from-sky-400 to-blue-500' :
                          'bg-gradient-to-r from-blue-500 to-cyan-500'
                        }`}

                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;