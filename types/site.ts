import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

export interface TechnologyItem {
  name: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProjectItem {
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

