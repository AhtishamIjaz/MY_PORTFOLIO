import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

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
    link: "/assets/certificates/Ai agent.png"
  },
  {
    id: 2,
    title: "Large Language Models (LLMs)",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "/assets/certificates/LLM Certificate.pdf"
  },
  {
    id: 3,
    title: "Simplilearn AI/ML Certification",
    issuer: "Simplilearn",
    date: "2026",
    link: "/assets/certificates/Simplilearn Certificate.pdf"
  },
  {
    id: 4,
    title: "Generative AI Foundations",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "/assets/certificates/gen ai certificate.png"
  },
  {
    id: 5,
    title: "Power BI Data Analysis",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "/assets/certificates/power bi.pdf"
  },
  {
    id: 6,
    title: "SQL for Data Science",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "/assets/certificates/sql certificate.pdf"
  },
  {
    id: 7,
    title: "Vibe Coding / Advanced Development",
    issuer: "Ahtisham's Certification",
    date: "2026",
    link: "/assets/certificates/vibe coding.pdf"
  }
];

const Certificates: React.FC = () => {
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
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
              
              <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                  {cert.date}
                </span>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wide bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;