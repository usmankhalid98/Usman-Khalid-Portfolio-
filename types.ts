export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
  logoUrl?: string;
  type: 'Contract' | 'Personal' | 'Client';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}