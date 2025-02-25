export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  location: Location;
  email: string;
  website: string;
  avatar: string;
  socialLinks: SocialLinks;
}

export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  country: string;
  region: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  frontendMentor: string;
  freeCodeCamp: string;
}

export interface Skill {
  name: string;
  icon: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
  summary: string;
}

export interface Language {
  language: string;
  fluency: string;
  level: number;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  experience: Experience[];
  languages: Language[];
  education: Education[];
}
