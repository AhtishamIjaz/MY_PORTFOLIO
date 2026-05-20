import { ProjectDetails } from '../types';

export const projectDetailsData: Record<string, ProjectDetails> = {
  "weatherpro-ai": {
    id: "weatherpro-ai",
    tagline: "Industrial-grade MLOps system for real-time weather forecasting and drift monitoring.",
    overview: [
      "WeatherPro AI is an end-to-end MLOps pipeline designed to automate weather prediction. In production environments, machine learning models face performance degradation due to changes in real-world data patterns (data drift).",
      "This system integrates data ingestion, model training, tracking, containerization, deployment, and monitoring into a cohesive lifecycle, ensuring forecasting accuracy remains high over time."
    ],
    howItWorks: [
      "Ingests live weather metrics from the OpenWeatherMap API at scheduled intervals.",
      "Processes and formats the data to fit a RandomForestRegressor model.",
      "Tracks metrics, parameters, and model artifacts using MLflow.",
      "Utilizes Evidently AI to automatically compare incoming inference data against training baselines, flagging drift.",
      "Serves the model through a FastAPI dashboard deployed on AWS using Docker."
    ],
    techStack: [
      { name: "FastAPI", reason: "Serves predictions and status monitoring through a fast, asynchronous Python web API." },
      { name: "MLflow", reason: "Tracks training runs, model versions, and logs performance metrics during experiments." },
      { name: "Evidently AI", reason: "Monitors data drift and model quality in production, providing automated alerts." },
      { name: "Docker & AWS ECR", reason: "Containers make the deployment reproducible and scalable across AWS EC2." }
    ],
    features: [
      { title: "Real-Time Data Pipeline", description: "Automated ingestion of live weather parameters for continuous training and inference." },
      { title: "Automated Drift Detection", description: "Evidently AI analyzes changes in feature distributions to trigger retraining when needed." },
      { title: "Production Monitoring", description: "A dashboard displaying prediction metrics, pipeline status, and model health." }
    ],
    challenges: [
      {
        problem: "Model accuracy decreasing during season changes due to feature distribution shifts.",
        solution: "Configured Evidently AI data drift reports that automatically trigger a retraining pipeline on AWS when feature drift exceeds a set threshold."
      }
    ]
  },
  "rag-career-counseling": {
    id: "rag-career-counseling",
    tagline: "RAG-driven chatbot for interactive, market-aligned career recommendations.",
    overview: [
      "The RAG Career Counseling System was built to assist students in finding optimal career paths by matching their skills, academic backgrounds, and personal interests with modern industry job requirements.",
      "Using Retrieval-Augmented Generation (RAG), the bot retrieves up-to-date occupational criteria, educational resources, and job trends, generating personalized advice that goes beyond simple keyword matching."
    ],
    howItWorks: [
      "User interacts with a clean web interface to submit their academic profile and career questions.",
      "The backend embeds the queries and searches a Vector Database for relevant educational/career guidelines.",
      "The retrieved documents are combined with the user query to build a grounded prompt.",
      "An LLM generates an empathetic, highly structured response detailing paths, skills to learn, and next steps."
    ],
    techStack: [
      { name: "Python & Flask", reason: "A lightweight, flexible backend framework to handle chatbot state and API routing." },
      { name: "Vector Database", reason: "Stores embeddings of occupational data, allowing semantically relevant document retrieval." },
      { name: "LangChain", reason: "Orchestrates the retrieval chain and models, simplifying prompt construction and response parsing." }
    ],
    features: [
      { title: "Empathetic Advising", description: "The chatbot uses professional advising frameworks to guide and encourage students." },
      { title: "No-Hallucination Guardrails", description: "By grounding the LLM in vector-stored occupational data, career advice remains realistic and accurate." },
      { title: "Custom Embeddings", description: "Optimized semantic search query expansion to capture implicit student interests." }
    ],
    challenges: [
      {
        problem: "Vague user inputs (e.g., 'I like tech') resulting in generic, unhelpful career recommendations.",
        solution: "Implemented an interactive prompting loop where the AI asks 2-3 clarifying questions to refine interests before producing a final recommendation report."
      }
    ]
  },
  "agentic-email-assistant": {
    id: "agentic-email-assistant",
    tagline: "Autonomous Agent Orchestration for email processing and auto-response generation.",
    overview: [
      "Managing high-volume inboxes can be overwhelming. The Agentic Email Assistant is an autonomous, state-driven workflow that parses, prioritizes, categorizes, and drafts responses to emails.",
      "Built with a focus on reliability, the system features a multi-agent structure where distinct specialized nodes cooperate to ensure email processing is precise and safe."
    ],
    howItWorks: [
      "A cron trigger fetches new unread emails from the inbox.",
      "The LangGraph workspace initiates a graph flow starting with a Categorization Node.",
      "Based on email content, the router sends the email to specific drafter nodes (Support, Sales, Spam, or Urgent).",
      "An evaluation agent checks the draft against business guidelines, refining it if needed before submitting for final human approval."
    ],
    techStack: [
      { name: "LangGraph", reason: "Essential for managing stateful, cyclic agent workflows and enabling human-in-the-loop validation." },
      { name: "Docker", reason: "Ensures the assistant can be run locally or deployed inside a isolated, secure containerized environment." },
      { name: "Python", reason: "Provides access to extensive libraries for email parsing, database logging, and AI orchestrations." }
    ],
    features: [
      { title: "Multi-Agent Collaboration", description: "Distinct agents for categorization, drafting, and quality checking to ensure optimal output." },
      { title: "Human-in-the-Loop", description: "Allows critical emails or drafts to be paused and edited by a human operator before sending." },
      { title: "Self-Correction Graph", description: "If the evaluator agent flags a tone mismatch, the compiler loops back to redraft." }
    ],
    challenges: [
      {
        problem: "Asynchronous API rate limits causing draft generation steps to fail under sudden heavy email loads.",
        solution: "Designed a persistent message queue in the LangGraph memory saver to serialize request execution and gracefully retry after limits clear."
      }
    ]
  },
  "persistent-interviewer": {
    id: "persistent-interviewer",
    tagline: "AWS-deployed AI roleplay interviewer with state preservation across sessions.",
    overview: [
      "The Persistent Roleplay Interviewer provides a realistic simulator for job candidates. Instead of single-turn static question-answer setups, this interviewer behaves like a human.",
      "It adapts its questioning based on the candidate's previous responses and keeps a continuous session state, allowing users to pause and resume their interview seamlessly."
    ],
    howItWorks: [
      "The React frontend establishes a secure connection to the AWS-hosted API gateway.",
      "The user selects an interview track (e.g., MLOps, frontend, or behavioral).",
      "The AI interviewer agent generates questions, analyzing user audio/text transcripts in real-time.",
      "Using LangGraph checkpointers, state is stored in a database, allowing users to return to their exact question number later."
    ],
    techStack: [
      { name: "AWS Cloud", reason: "Hosts the application securely, leveraging auto-scaling to handle multiple concurrent simulation instances." },
      { name: "State Persistence", reason: "Keeps history of conversation context and previous grades intact using DynamoDB backend storage." },
      { name: "React & Framer Motion", reason: "Creates a highly interactive, animated, and professional interface to simulate a high-pressure interview room." }
    ],
    features: [
      { title: "Long-Term Memory", description: "Resumes conversation context, topics discussed, and feedback comments between disconnects." },
      { title: "Dynamic Difficulty Scale", description: "Adjusts technical depth of questions dynamically based on the performance of initial answers." },
      { title: "Comprehensive Grading", description: "Generates a final scorecard outlining strengths, weaknesses, and a suggested development plan." }
    ],
    challenges: [
      {
        problem: "High cost and latency when querying LLMs for both next question generation and grading feedback in the same turn.",
        solution: "Separated grading into an asynchronous background worker task, returning immediate interview questions to the user while queuing feedback compilation."
      }
    ]
  },
  "ai-medical-chatbot": {
    id: "ai-medical-chatbot",
    tagline: "Medical knowledge chatbot grounded in curated clinical literature using advanced RAG.",
    overview: [
      "AI Medical Chatbot is an assistant built to provide general health query responses. In health applications, grounding is critical to prevent dangerous medical hallucinations.",
      "This system retrieves documentation exclusively from verified medical databases, applying strict guardrails to refuse diagnosis while offering educational information and local clinical contacts."
    ],
    howItWorks: [
      "Receives a health-related query from the user.",
      "Retrieves corresponding clinical sheets and symptom checklists using semantic vector matching.",
      "Uses guardrail systems to filter out requests for actual prescription or diagnostic decisions.",
      "Synthesizes a response summarizing verified clinical literature and displays medical safety disclaimers."
    ],
    techStack: [
      { name: "Retrieval-Augmented Generation", reason: "Restricts model responses to factual content derived only from standard clinical documents." },
      { name: "Vector Database", reason: "Performs low-latency search on thousands of medical books, sheets, and advisory guidelines." },
      { name: "Python FastAPI", reason: "Asynchronous backend capable of streaming text responses to the user for minimal waiting latency." }
    ],
    features: [
      { title: "Safe Advisory Guardrails", description: "Strict boundaries that refuse requests to prescribe medicine or formulate formal diagnoses." },
      { title: "Source Citations", description: "Links responses to the exact medical documents and databases retrieved for reference." },
      { title: "Emergency Redirects", description: "Detects crisis keywords (e.g., chest pain) and immediately displays local emergency helpline numbers." }
    ],
    challenges: [
      {
        problem: "Users framing complex queries containing slang or vague symptom descriptions that bypass standard keyword indices.",
        solution: "Integrated a query re-writing layer that standardizes medical terminology in the search query before fetching vector documentation."
      }
    ]
  }
};
