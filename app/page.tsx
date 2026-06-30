import { ContactSection } from '@/components/sections/contact-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TechStackSection } from '@/components/sections/tech-stack-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { TrustedSection } from '@/components/sections/trusted-section';
import { WhyBugNetSection } from '@/components/sections/why-bugnet-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <WhyBugNetSection />
      <TechStackSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

