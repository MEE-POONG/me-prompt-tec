/**
 * Member Types
 * ME PROMPT TECHNOLOGY
 */

export interface MemberName {
  first: string;
  last: string;
  display?: string;
}

export interface MemberSocial {
  facebook?: string;
  x?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface MemberSkill {
  name: string;
  level?: string; // "beginner" | "intermediate" | "advanced" | "expert"
}

export interface Member {
  id: string;
  name: MemberName;
  title?: string;
  department?: string;
  bio?: string;
  photo?: string;
  socials?: MemberSocial;
  skills: MemberSkill[];
  slug: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MembersResponse {
  success: boolean;
  data: {
    members: Member[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}