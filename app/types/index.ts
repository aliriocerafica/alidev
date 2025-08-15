// Shared TypeScript interfaces for the portfolio application

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
  ariaLabel?: string;
}

export interface Certificate {
  id: string;
  title: string;
  image: string;
  viewUrl: string;
  issueDate?: string;
  issuer?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image: string;
  figmaUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string[];
}

export interface TechSkill {
  id: string;
  name: string;
  icon: string;
  category?: 'frontend' | 'backend' | 'design' | 'other';
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  startYear: number;
  endYear: number;
  image: string;
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
}

export interface BaseComponentProps {
  className?: string;
  id?: string;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  showDivider?: boolean;
}
