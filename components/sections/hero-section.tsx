import Link from 'next/link';
import { ArrowRight, CircleCheck, Sparkles } from 'lucide-react';
import { BackgroundPattern } from '@/components/background-pattern';
import { Button } from '@/components/ui/button';
import { HeroIllustration } from '@/components/hero-illustration';
import { MotionDiv, MotionGroup, MotionItem, MotionSection } from '@/components/motion';
import { SectionShell } from '@/components/section-shell';

export function HeroSection() {
  return (
    <SectionShell
      id="home"
      className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16"
      contentClassName="relative"
    >
      <BackgroundPattern className="opacity-40" patternId="bugnet-grid-hero" />
      <MotionSection className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <MotionGroup className="relative z-10 max-w-3xl space-y-6 sm:space-y-7 lg:space-y-9">
            <MotionItem>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-muted shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                International software engineering company
              </div>
            </MotionItem>

            <MotionItem>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.07em] text-primary sm:text-5xl lg:text-7xl">
                Building Software
                <br />
                That Businesses Trust.
              </h1>
            </MotionItem>

            <MotionItem>
              <p className="max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:text-xl">
                We build scalable software products, cloud infrastructure and AI-powered solutions for ambitious companies.
              </p>
            </MotionItem>

            <MotionItem>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/#contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href="/#services">View Services</Link>
                </Button>
              </div>
            </MotionItem>

            <MotionItem>
              <div className="grid gap-3 sm:grid-cols-3">
                {['Architecture-led delivery', 'Design-aware execution', 'Built for enterprise scale'].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-11 items-center gap-2 rounded-[18px] border border-border bg-white px-4 py-3 text-sm text-muted shadow-sm"
                  >
                    <CircleCheck className="h-4 w-4 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </MotionItem>
          </MotionGroup>

          <MotionDiv className="relative">
            <HeroIllustration />
          </MotionDiv>
        </div>
      </MotionSection>
    </SectionShell>
  );
}
