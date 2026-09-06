import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Eye, X, Download } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "AI Agent Development",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "assets/certificates/ai_agent.png"
  },
  {
    id: 2,
    title: "Large Language Models (LLMs)",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "assets/certificates/llm_certificate.pdf"
  },
  {
    id: 3,
    title: "Simplilearn AI/ML Certification",
    issuer: "Simplilearn",
    date: "2026",
    link: "assets/certificates/simplilearn_certificate.pdf"
  },
  {
    id: 4,
    title: "Generative AI Foundations",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "assets/certificates/gen_ai_certificate.png"
  },
  {
    id: 5,
    title: "Power BI Data Analysis",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "assets/certificates/power_bi.pdf"
  },
  {
    id: 6,
    title: "SQL for Data Science",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "assets/certificates/sql_certificate.pdf"
  },
  {
    id: 7,
    title: "Vibe Coding / Advanced Development",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "assets/certificates/vibe_coding.pdf"
  },
  {
    id: 8,
    title: "Introduction to Cloud Computing",
    issuer: "Simplilearn",
    date: "May 2026",
    link: "assets/certificates/intro_cloud_computing.png"
  },
  {
    id: 9,
    title: "RAG Course for Beginners",
    issuer: "Simplilearn",
    date: "May 2026",
    link: "assets/certificates/rag_beginners.png"
  },
  {
    id: 10,
    title: "Introduction to Neural Network",
    issuer: "Simplilearn",
    date: "May 2026",
    link: "assets/certificates/intro_neural_network.png"
  }
];

const Certificates: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ title: string; src: string; isPdf: boolean } | null>(null);

  const getCertUrl = (link: string) => {
    const cleanPath = link.startsWith('/') ? link.slice(1) : link;
    return `${import.meta.env.BASE_URL}${encodeURI(cleanPath)}`;
  };

  return (
    <section id="certificates" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Continuous learning and validation of skills through industry-recognized certifications.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll with Snap | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-auto md:px-0">
          {certificates.map((cert, index) => {
            const certUrl = getCertUrl(cert.link);
            const isPdf = cert.link.toLowerCase().endsWith('.pdf');

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-shrink-0 w-[85%] sm:w-[380px] md:w-auto snap-center flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="p-1 rounded-full bg-green-50 border border-green-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">{cert.issuer}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                    {cert.date}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveModal({
                        title: `${cert.title} (${cert.issuer})`,
                        src: certUrl,
                        isPdf
                      })}
                      className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-primary transition-colors bg-white hover:bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-full cursor-pointer"
                      title="Preview"
                    >
                      <Eye className="w-3 h-3 text-slate-500" />
                      <span className="hidden sm:inline">Preview</span>
                    </button>

                    <a 
                      href={certUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-xs font-bold text-primary hover:text-white hover:bg-primary transition-all uppercase tracking-wide bg-primary/10 px-3 py-1.5 rounded-full"
                      title="Open in new tab"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal Preview */}
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
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
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
                    href={activeModal.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-primary hover:bg-white rounded-lg transition-colors"
                    title="Open full size in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={activeModal.src}
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

              {/* Modal Body */}
              <div className="p-3 sm:p-4 overflow-y-auto flex items-center justify-center bg-slate-100/50 flex-grow min-h-[300px]">
                {activeModal.isPdf ? (
                  <iframe
                    src={activeModal.src}
                    title={activeModal.title}
                    className="w-full h-[65vh] rounded-lg border border-slate-200 shadow-sm"
                  />
                ) : (
                  <img 
                    src={activeModal.src} 
                    alt={activeModal.title}
                    className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-sm border border-slate-200"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;