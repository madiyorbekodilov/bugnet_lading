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

        <MotionGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {technologies.map((item) => (
            <MotionItem key={item.name}>
              <MotionCard className="h-full">
                <div className="flex h-28 flex-col items-start justify-between rounded-[24px] border border-border bg-white px-5 py-5 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-slate-300">
                  <span className="h-2 w-2 rounded-full bg-accent/80" />
                  <span className="text-sm font-medium tracking-[-0.02em] text-primary">{item.name}</span>
                </div>
              </MotionCard>
            </MotionItem>
          ))}
        </MotionGroup>
      </MotionSection>
    </SectionShell>
  );
}
