import {
  Bot,
  Cloud,
  Layers3,
  PenTool,
  Smartphone,
  SquareCode,
} from 'lucide-react';
import type {
  FaqItem,
  NavItem,
  ProcessStep,
  ProjectItem,
  ServiceItem,
  SocialLink,
  StatItem,
  TechnologyItem,
  TestimonialItem
} from '@/types/site';

export const brand = {
  name: 'BugNet',
  email: 'hello@bugnet.tech',
  phone: '+998 90 363 83 33',
  location: 'Fergana, Uzbekistan',
  website: 'https://bugnet.uz'
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export const services: ServiceItem[] = [
  {
    title: 'Custom Software',
    description: 'Mission-critical platforms built with disciplined architecture, clear ownership, and long-term maintainability.',
    icon: SquareCode
  },
  {
    title: 'SaaS Development',
    description: 'Modern product engineering for subscription businesses that need speed, retention, and elegant UX.',
    icon: Layers3
  },
  {
    title: 'Cloud Solutions',
    description: 'Reliable infrastructure, deployment automation, and cost-aware operations across AWS, Azure, and hybrid stacks.',
    icon: Cloud
  },
  {
    title: 'Mobile Apps',
    description: 'Fast, polished mobile experiences for customers and internal teams across iOS and Android.',
    icon: Smartphone
  },
  {
    title: 'AI Integration',
    description: 'Practical AI features that improve workflows, reduce support load, and unlock new product capabilities.',
    icon: Bot
  },
  {
    title: 'UI/UX Design',
    description: 'Precise product design systems, interfaces, and prototypes that feel premium from the first interaction.',
    icon: PenTool
  }
];

export const trustLogos = ['Astra', 'Northstar', 'Helix', 'Everline', 'Vertex', 'Crescent'];

export const stats: StatItem[] = [
  { value: 99.9, label: 'System Uptime', suffix: '%', decimals: 1 },
  { value: 50, label: 'Completed Projects', suffix: '+' },
  { value: 10, label: 'Technologies', suffix: '+' },
  { value: 24, label: 'Support', suffix: '/7' }
];

export const technologies: TechnologyItem[] = [
  { name: 'Python' },
  { name: 'FastAPI' },
  { name: 'Django' },
  { name: '.NET' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Flutter' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'Redis' },
  { name: 'RabbitMQ' },
  { name: 'PostgreSQL' },
  { name: 'AWS' },
  { name: 'Azure' }
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    description: 'We clarify the business model, users, constraints, and the technical outcomes that matter.'
  },
  {
    title: 'Planning',
    description: 'We map scope, architecture, milestones, and delivery risks before a single line is written.'
  },
  {
    title: 'Development',
    description: 'We ship in tight loops with design-aware engineering, regular reviews, and transparent progress.'
  },
  {
    title: 'Deployment',
    description: 'We release with monitoring, rollback paths, and low-drama operational handoff.'
  },
  {
    title: 'Support',
    description: 'We keep the product stable, improve it over time, and remain accountable after launch.'
  }
];

export const projects: ProjectItem[] = [
  {
    category: 'ERP',
    title: 'Operations ERP',
    description: 'An internal platform for finance, procurement, reporting, and approvals with strict access control.',
    image: '/projects/erp.svg'
  },
  {
    category: 'Marketplace',
    title: 'Marketplace Platform',
    description: 'A multi-tenant commerce experience with seller onboarding, search, and payment orchestration.',
    image: '/projects/marketplace.svg'
  },
  {
    category: 'Salon SaaS',
    title: 'Salon SaaS Suite',
    description: 'Scheduling, staff management, customer history, and analytics for a premium service brand.',
    image: '/projects/salon-saas.svg'
  }
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'BugNet delivered the kind of clarity, craftsmanship, and calm execution we expect from a top-tier engineering partner.',
    name: 'Maya Chen',
    role: 'VP of Product',
    company: 'Northstar Capital',
    initials: 'MC'
  },
  {
    quote:
      'They understood our architecture constraints immediately and shipped a platform that felt both refined and resilient.',
    name: 'David Romero',
    role: 'CTO',
    company: 'Apex Commerce',
    initials: 'DR'
  },
  {
    quote:
      'The team was precise, responsive, and deeply thoughtful about performance, which made the whole engagement feel premium.',
    name: 'Elena Park',
    role: 'Head of Operations',
    company: 'Helix Health',
    initials: 'EP'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'What kind of companies does BugNet work with?',
    answer:
      'We work with ambitious startups, established businesses, and enterprise teams that need dependable software execution.'
  },
  {
    question: 'How do you handle discovery and scoping?',
    answer:
      'We run a focused discovery phase to align goals, define scope, surface risks, and make the delivery path clear before implementation.'
  },
  {
    question: 'Do you support existing products?',
    answer:
      'Yes. We can join an existing codebase, improve architecture, ship new features, and help stabilize the product over time.'
  },
  {
    question: 'Can you work with our in-house team?',
    answer:
      'Absolutely. We collaborate well with product, design, and engineering teams and adapt to your preferred delivery workflow.'
  }
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/bugnet' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/bugnet' },
  { label: 'Telegram', href: 'https://t.me/BugNetTech' }
];

export const footerServiceLinks = [
  'Custom Software',
  'SaaS Development',
  'Cloud Solutions',
  'Mobile Apps',
  'AI Integration',
  'UI/UX Design'
];
