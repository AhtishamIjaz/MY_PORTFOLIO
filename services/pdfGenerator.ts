import { jsPDF } from "jspdf";

export const generatePDF = () => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const contentWidth = 170;
  const leftMargin = 20;
  let y = 20;

  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  const addHeading = (text: string) => {
    checkPageBreak(15);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(6, 182, 212); // Primary color
    doc.text(text.toUpperCase(), leftMargin, y);
    y += 2;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(leftMargin, y, leftMargin + contentWidth, y);
    doc.setTextColor(0, 0, 0); // Reset color
    y += 6;
  };

  const addSubHeading = (text: string, rightText?: string) => {
    checkPageBreak(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(text, leftMargin, y);
    if (rightText) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(rightText, leftMargin + contentWidth, y, { align: "right" });
      doc.setTextColor(0, 0, 0);
    }
    y += 5;
  };

  const addBody = (text: string, indent = 0, fontSize = 10) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    const height = lines.length * (fontSize * 0.45);
    checkPageBreak(height);
    doc.text(lines, leftMargin + indent, y);
    y += height + 2;
  };

  const addBullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(text, contentWidth - 5);
    const height = lines.length * 4.5;
    checkPageBreak(height);
    doc.text("•", leftMargin, y);
    doc.text(lines, leftMargin + 5, y);
    y += height + 2;
  };

  // --- HEADER ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Ahtisham", 105, y, { align: "center" });
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Azad Jammu and Kashmir, Pakistan | (+92) 314 9799265", 105, y, { align: "center" });
  y += 5;
  doc.text("ahtishamijaz55@gmail.com | linkedin.com/in/ahtisham-ijaz-768213342/", 105, y, { align: "center" });
  y += 5;
  doc.text("github.com/AhtishamIjaz", 105, y, { align: "center" });
  y += 10;

  // --- ABOUT ME ---
  addHeading("About Me");
  addBody("AI Engineer specializing in Agentic AI systems, Retrieval-Augmented Generation (RAG), and production-grade machine learning architectures. Experienced in building scalable, fault-tolerant AI solutions using LangGraph, LangChain, and modern MLOps practices. Skilled in deploying real-world AI systems on AWS using Docker, CI/CD pipelines, and monitoring tools. Passionate about developing intelligent, autonomous systems for real-world problem solving.");

  // --- EDUCATION ---
  addHeading("Education");
  addSubHeading("Bachelor of Science in Computer Science", "Nov 2021 - Nov 2025");
  addBody("University of Azad Jammu and Kashmir (UAJK) | Muzaffarabad, Pakistan");
  addBody("Focus: Artificial Intelligence, Machine Learning, & Software Engineering");
  
  // --- EXPERIENCE ---
  addHeading("Work Experience");
  
  addSubHeading("AI Engineer Intern", "Present");
  addBody("Metropolitan Warehouse & Delivery Corp. (USA) | Remote", 0, 10);
  y += 2;
  addBullet("Built agentic AI systems for logistics automation using LangGraph and Python.");
  addBullet("Reduced manual operational tasks by 35% using state persistence and custom tool integration.");
  addBullet("Designed fault-tolerant agent architectures to ensure reliability in asynchronous communication.");

  addSubHeading("Machine Learning Lab Assistant", "Previous");
  addBody("University of Azad Jammu and Kashmir (UAJK) | Muzaffarabad, Pakistan", 0, 10);
  y += 2;
  addBullet("Assisted students in implementing machine learning models and data preprocessing pipelines.");
  addBullet("Automated grading evaluation workflows to improve student assessment efficiency.");

  // --- PROJECTS ---
  addHeading("Projects");

  addSubHeading("WeatherPro AI");
  addBody("Industrial MLOps weather forecasting system. Features real-time ingestion, RandomForestRegressor, experiment tracking with MLflow, and data drift detection via Evidently AI. Deployed on AWS using Docker and ECR.");
  
  addSubHeading("RAG Career Counseling System (Final Year Project)");
  addBody("Intelligent counseling bot using RAG and LLMs to provide personalized career recommendations based on user profiles, vector databases, and embeddings. Developed with Flask and Python.");

  addSubHeading("Agentic Email Assistant");
  addBody("Autonomous agent powered by LangGraph and Docker. Manages emails, drafts responses, and categorizes incoming mail using advanced LLM reasoning and custom toolsets.");

  addSubHeading("Persistent Roleplay Interviewer");
  addBody("AI interviewer deployed on AWS. Utilizes state persistence to maintain conversation history and context across user sessions for a realistic practice experience.");

  // --- SKILLS ---
  addHeading("Technical Skills");
  
  addSubHeading("AI & Machine Learning");
  addBody("Agentic AI, RAG Systems, LangGraph, LangChain, CrewAI, Prompt Engineering, LLM Fine-Tuning, CNN, RNN, LSTM, Scikit-learn.");
  
  y += 2;
  addSubHeading("MLOps & DevOps");
  addBody("Docker, AWS (EC2, ECR, IAM, VPC), CI/CD (GitHub Actions), MLflow, DVC, Git & GitHub.");

  y += 2;
  addSubHeading("Programming & Databases");
  addBody("Python, FastAPI, Flask, Streamlit, C++, JavaScript, HTML/CSS, ChromaDB, Weaviate, Redis, n8n, MySQL, MongoDB, Power BI.");

  // --- CERTIFICATIONS ---
  addHeading("Certifications");
  addBullet("AI Agent Development");
  addBullet("Large Language Models (LLMs)");
  addBullet("Simplilearn AI/ML Certification");
  addBullet("Generative AI Foundations");
  addBullet("Power BI Data Analysis");
  addBullet("SQL for Data Science");
  addBullet("Vibe Coding / Advanced Development");
  addBullet("Introduction to Cloud Computing | Simplilearn (May 2026)");
  addBullet("RAG Course for Beginners | Simplilearn (May 2026)");
  addBullet("Introduction to Neural Network | Simplilearn (May 2026)");

  doc.save("Ahtisham_Resume.pdf");
};
