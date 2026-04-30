import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        
        <div className="flex flex-col items-center">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center max-w-sm">
                <span className="font-bold text-slate-900 text-lg mb-1">Ahtisham</span>
                <span className="text-slate-500 text-sm font-medium">AI Engineer | Agentic AI Specialist</span>
            </div>
        </div>

        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Ahtisham. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;