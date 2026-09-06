import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar, ExternalLink, MapPin, Award, Eye, X, Download } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "AI / ML Engineer Intern",
    company: "Metropolitan Solutions (Pvt.) Ltd / Metropolitan Warehouse (USA)",
    companyUrl: "https://www.gomwd.com",
    period: "Dec 2025 - Jun 2026",
    workMode: "Onsite",
    certificateUrl: "assets/certificates/metropolitan_internship_certificate.jpg",
    certificateLabel: "View Experience Certificate",
    description: [
      "Built agentic AI systems for logistics automation using LangGraph and Python in the Islamabad office.",
      "Reduced manual operational tasks by 35% through intelligent process automation and event-driven pipelines.",
      "Improved system reliability and fault tolerance using advanced state persistence techniques.",
      "Collaborated on production-grade AI architectures for real-world logistical challenges."
    ]
  },
  {
    id: 2,
    role: "AI & Machine Learning Intern",
    company: "ITSOLERA Pvt. Ltd",
    period: "Jun 2025 - Aug 2025",
    workMode: "Onsite",
    certificateUrl: "assets/certificates/itsolera_internship_certificate.jpg",
    certificateLabel: "View Internship Certificate",
    description: [
      "Successfully completed an intensive onsite internship in Artificial Intelligence and Machine Learning.",
      "Contributed to AI-Enhanced Detection of Fake and Bot Profiles on Social Media platforms.",
      "Developed ML models for Construction Progress Monitoring and automated assessment.",
      "Engineered Multi-Modal Risk Scoring models for disaster-prone agricultural zones."
    ]
  },
  {
    id: 3,
    role: "Machine Learning Lab Assistant",
    company: "University of Azad Jammu and Kashmir (UAJK)",
    companyUrl: "https://uajk.edu.pk/",
    period: "Nov 2024 - May 2025",
    workMode: "Onsite",
    description: [
      "Assisted undergraduate students in understanding and implementing machine learning models and data preprocessing techniques.",
      "Automated evaluation pipelines for student projects, reducing grading time and improving feedback consistency.",
      "Maintained lab computing resources and provided technical support for various AI/ML research activities."
    ]
  },
  {
    id: 4,
    role: "AI & Machine Learning Intern",
    company: "DevelopersHub Corporation",
    companyUrl: "https://www.developershubcorp.com",
    period: "May 2024 - Jul 2024",
    workMode: "Hybrid / Remote",
    certificateUrl: "assets/certificates/developershub_internship_certificate.jpg",
    certificateLabel: "View Internship Letter",
    description: [
      "Selected for the competitive AI and Machine Learning internship program at DevelopersHub Corporation.",
      "Worked with collaborative tools, deep learning workflows, and data processing architectures.",
      "Contributed to practical AI projects and participated in structured professional mentorship."
    ]
  }
];

const Experience: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ title: string; imageSrc: string } | null>(null);

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 text-slate-900">
            Experience & <span className="text-accent">Internships</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Hands-on professional experience building autonomous AI systems, logistics automation, and machine learning pipelines.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => {
            const certFullUrl = exp.certificateUrl
              ? `${import.meta.env.BASE_URL}${exp.certificateUrl.startsWith('/') ? exp.certificateUrl.slice(1) : exp.certificateUrl}`
              : null;

            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mt-1 text-sm sm:text-base">
                        <Briefcase className="w-4 h-4 flex-shrink-0" />
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-accent transition-colors flex items-center gap-1 group"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Date Pill */}
                      <div className="flex items-center gap-1.5 text-slate-600 text-xs sm:text-sm font-mono bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </div>
                      
                      {/* Work Mode Pill */}
                      {exp.workMode && (
                        <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono px-3 py-1 rounded-full border ${
                          exp.workMode.toLowerCase().includes('remote') || exp.workMode.toLowerCase().includes('hybrid')
                            ? 'bg-blue-50 text-blue-600 border-blue-200' 
                            : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                        }`}>
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.workMode}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-600 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-accent mt-1 min-w-[5px]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Certificate button for internship */}
                  {certFullUrl && (
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveModal({
                          title: `${exp.company} - ${exp.certificateLabel || 'Certificate'}`,
                          imageSrc: certFullUrl
                        })}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 border border-primary/20 cursor-pointer shadow-sm group/btn"
                      >
                        <Award className="w-4 h-4 text-accent group-hover/btn:text-white transition-colors" />
                        <span>{exp.certificateLabel || 'View Certificate'}</span>
                        <Eye className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                      </button>

                      <a
                        href={certFullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors border border-slate-200"
                      >
                        <span>Open Full</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Responsive Certificate Preview Modal */}
      <AnimatePresence>
        {activeModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="font-bold text-slate-800 text-xs sm:text-sm truncate">
                    {activeModal.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeModal.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-primary hover:bg-white rounded-lg transition-colors"
                    title="Open full size"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={activeModal.imageSrc}
                    download
                    className="p-1.5 text-slate-500 hover:text-primary hover:bg-white rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-white rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Body */}
              <div className="p-3 sm:p-4 overflow-y-auto flex items-center justify-center bg-slate-100/50">
                <img 
                  src={activeModal.imageSrc} 
                  alt={activeModal.title}
                  className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-sm border border-slate-200"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;