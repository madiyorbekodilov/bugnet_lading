import { SectionDivider } from '@/components/section-divider';
import { MotionGroup, MotionItem, MotionSection } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { trustLogos } from '@/lib/site';

export function TrustedSection() {
  return (
    <>
      <SectionDivider />
      <SectionShell id="trusted">
        <MotionSection>
          <SectionHeading
            eyebrow="Trusted"
            title="Trusted by ambitious businesses."
            align="center"
          />
          <MotionGroup className="mt-12 rounded-[28px] border border-border bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {trustLogos.map((logo) => (
                <MotionItem key={logo}>
                  <div className="flex h-20 items-center justify-center rounded-[18px] border border-border bg-slate-50 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:border-slate-300 hover:bg-white">
                    {logo}
                  </div>
                </MotionItem>
              ))}
            </div>
          </MotionGroup>
        </MotionSection>
      </SectionShell>
    </>
  );
}
