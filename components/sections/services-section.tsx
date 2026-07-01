import { ArrowUpRight } from 'lucide-react';
import { MotionCard, MotionGroup, MotionItem, MotionSection } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/site';

export function ServicesSection() {
  return (
    <SectionShell id="services">
      <MotionSection>
        <SectionHeading
          eyebrow="Services"
          title="Engineering services designed for lasting confidence."
          description="We combine product thinking, rigorous architecture, and refined execution to help teams build software that scales without losing clarity."
        />

        <MotionGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <MotionItem key={service.title}>
                <MotionCard className="group h-full">
                  <Card className="relative h-full overflow-hidden bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] group-hover:border-slate-300 group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-80" />
                    <CardHeader className="p-5 sm:p-6 lg:p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-border bg-slate-50 text-primary transition-colors group-hover:border-slate-300 group-hover:bg-white">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="mt-5 flex items-center justify-between gap-4 text-[1rem] sm:text-[1.05rem]">
                        {service.title}
                        <ArrowUpRight className="h-4 w-4 text-slate-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </CardTitle>
                      <CardDescription className="text-sm leading-7 sm:text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
                      <div className="flex flex-wrap gap-2 border-t border-border pt-5 text-xs font-medium text-slate-500">
                        <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Strategy</span>
                        <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Build</span>
                        <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Scale</span>
                      </div>
                    </CardContent>
                  </Card>
                </MotionCard>
              </MotionItem>
            );
          })}
        </MotionGroup>
      </MotionSection>
    </SectionShell>
  );
}
