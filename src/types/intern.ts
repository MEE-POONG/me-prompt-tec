/**
 * Intern Types
 * ME PROMPT TECHNOLOGY
 */

export interface InternName {
  first: string;
  last: string;
  display?: string;
}

export interface InternContactInfo {
  email?: string;
  phone?: string;
  address?: {
    line1?: string;
    line2?: string;
    district?: string;
    province?: string;
    postalCode?: string;
    country?: string;
  };
}

export interface InternSkill {
  name: string;
  level?: string; // "beginner" | "intermediate" | "advanced" | "expert"
}

export interface InternEducation {
  school: string;
  faculty?: string;
  major?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  gpa?: number;
}

export interface InternExperience {
  company?: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  responsibilities: string[];
  techStack: string[];
}

export interface InternLink {
  label: string;
  url: string;
}

export interface InternResumeProject {
  name: string;
  description?: string;
  techStack: string[];
  links: InternLink[];
}

export interface InternResume {
  summary?: string;
  skills: InternSkill[];
  educations: InternEducation[];
  experiences: InternExperience[];
  projects: InternResumeProject[];
  links: InternLink[];
}

export interface Intern {
  id: string;
  name: InternName;
  university: string;
  faculty?: string;
  major?: string;
  studentId?: string;
  coopType: 'coop' | 'internship' | 'part_time';
  contact?: InternContactInfo;
  resume?: InternResume;
  avatar?: string;
  portfolioSlug: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  gen: number;
}

export interface InternsResponse {
  success: boolean;
  data: {
    interns: Intern[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}
