// Portfolio data types for database integration
export interface Portfolio {
  id: string;
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  avatarUrl: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  duration: string;
  description: string;
  stack: string[];
  achievements: string[];
  portfolioId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string | null;
  portfolioId: string;
  createdAt: string;
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  duration: string;
  portfolioId: string;
  createdAt: string;
}

// API response types
export interface PortfolioResponse {
  success: boolean;
  data?: Portfolio & {
    experiences: Experience[];
    skills: Skill[];
    educations: Education[];
  };
  error?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}