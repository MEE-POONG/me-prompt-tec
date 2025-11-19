/**
 * Project Types
 * ME PROMPT TECHNOLOGY
 */

export type ProjectStatus = 'planning' | 'in_progress' | 'completed' | 'on_hold';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectAttachment {
  type: 'image' | 'video' | 'file';
  url: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  description?: string;
  status: ProjectStatus;
  startDate?: string;
  endDate?: string;
  clientName?: string;
  clientSector?: string;
  tags: string[];
  techStack: string[];
  cover?: string;
  gallery: ProjectAttachment[];
  links: ProjectLink[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectsResponse {
  success: boolean;
  data: {
    projects: Project[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}
