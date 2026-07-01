import { MotionCard, MotionGroup, MotionItem, MotionSection } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { technologies } from '@/lib/site';

export function TechStackSection() {
  return (
    <SectionShell id="tech-stack">
      <MotionSection>
        <SectionHeading
          eyebrow="Tech stack"
          title="A modern stack for dependable delivery."
          description="We choose tools that improve velocity without sacrificing maintainability, security, or performance."
        />

        <MotionGroup className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 sm:gap-4">
          {technologies.map((item) => (
            <MotionItem key={item.name}>
              <MotionCard className="h-full">
                <div className="flex min-h-24 flex-col items-start justify-between rounded-[24px] border border-border bg-white px-4 py-4 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-slate-300 sm:min-h-28 sm:px-5 sm:py-5">
                  <span className="h-2 w-2 rounded-full bg-accent/80" />
                  <span className="text-sm font-medium tracking-[-0.02em] text-primary sm:text-[15px]">{item.name}</span>
                </div>
              </MotionCard>
            </MotionItem>
          ))}
        </MotionGroup>
      </MotionSection>
    </SectionShell>
  );
}
