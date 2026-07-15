export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  category?: "software" | "mobile" | "ai" | "hardware" | string;
  stars?: number;
  forks?: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  type: "work" | "volunteer" | "education";
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Education {
  institution: string;
  degree: string;
  program: string;
  period: string;
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
  placeholder?: boolean;
  category?: "certification" | "award";
  description?: string;
  skills?: string[];
  status?: "Completed" | "In Progress" | "Honored";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Activity {
  title: string;
  image: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  featured?: boolean;
  content?: string;
  takeaways?: string[];
}
