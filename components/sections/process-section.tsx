import { MotionCard, MotionGroup, MotionItem, MotionLine, MotionSection } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { processSteps } from '@/lib/site';

export function ProcessSection() {
  return (
    <SectionShell id="process">
      <MotionSection>
        <SectionHeading
          eyebrow="Process"
          title="A focused delivery process built to reduce risk."
          description="Each phase is intentionally simple: we align early, ship in controlled increments, and stay accountable after launch."
        />

        <div className="relative mt-14">
          <MotionLine className="absolute left-0 top-7 hidden h-px w-full origin-left bg-border lg:block" />
          <MotionGroup className="grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <MotionItem key={step.title}>
                <MotionCard className="relative h-full">
                  <div className="rounded-[24px] border border-border bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-border bg-slate-50 text-sm font-semibold text-accent">
                        0{index + 1}
                      </div>
                      <div className="hidden h-px flex-1 bg-border lg:block" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-primary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Step {index + 1}
                    </p>
                  </div>
                </MotionCard>
              </MotionItem>
            ))}
          </MotionGroup>
        </div>
      </MotionSection>
    </SectionShell>
  );
}
