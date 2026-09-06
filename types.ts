import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  slug?: string;
}

export interface ProjectDetails {
  id: string; // The slug
  tagline: string;
  overview: string[];
  architectureUrl?: string;
  howItWorks: string[];
  techStack: { name: string; reason: string }[];
  features: { title: string; description: string; icon?: string }[];
  challenges?: { problem: string; solution: string }[];
  results?: string[];
  screenshots?: { url: string; caption: string }[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
  workMode?: string;
  certificateUrl?: string;
  certificateLabel?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ReactNode;
  category: 'Agentic AI & Systems' | 'AI & Machine Learning' | 'Data & Databases' | 'Web & Backend' | 'Cloud & DevOps' | 'Programming & Tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}