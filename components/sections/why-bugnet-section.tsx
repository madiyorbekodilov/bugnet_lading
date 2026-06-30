import { CircleCheck, Sparkles } from 'lucide-react';
import { AnimatedCounter } from '@/components/animated-counter';
import { MotionGroup, MotionItem, MotionSection } from '@/components/motion';
import { SectionDivider } from '@/components/section-divider';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { stats } from '@/lib/site';

export function WhyBugNetSection() {
  return (
    <>
      <SectionDivider />
      <SectionShell id="about">
        <MotionSection>
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="About"
                title="A company built for engineering depth, trust, and precision."
                description="BugNet exists to help serious businesses ship software that feels intentional at every layer — from architecture to interface to operational reliability."
              />
              <div className="rounded-[28px] border border-border bg-white p-7 shadow-[0_14px_50px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Clear decisions. Calm delivery. Durable systems.
                </div>
                <div className="mt-5 grid gap-4">
                  {[
                    'Architecture that stays understandable as the product grows.',
                    'Interfaces that feel refined for customers and internal teams.',
                    'Operational discipline for long-term confidence.'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-muted">
                      <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <MotionGroup className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <MotionItem key={stat.label}>
                  <div className="rounded-[24px] border border-border bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                    <div className="text-5xl font-semibold tracking-[-0.06em] text-primary sm:text-6xl">
                      <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                    </div>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-muted">{stat.label}</p>
                    <div className="mt-5 h-px w-full bg-border" />
                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Built for serious teams that need dependable outcomes, not noisy process.
                    </p>
                  </div>
                </MotionItem>
              ))}
            </MotionGroup>
          </div>
        </MotionSection>
      </SectionShell>
    </>
  );
}
