import { Quote } from 'lucide-react';
import { MotionCard, MotionGroup, MotionItem, MotionSection } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/site';

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials">
      <MotionSection>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by leaders who value clear execution."
          description="Short feedback from teams that care about quality, reliability, and a calm delivery process."
          align="center"
        />

        <MotionGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <MotionItem key={testimonial.name}>
              <MotionCard className="h-full">
                <Card className="h-full border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-primary">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-xs text-muted">
                            {testimonial.role} · {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Quote className="h-5 w-5 text-slate-300" />
                    </div>
                    <div className="mt-6 inline-flex items-center rounded-full border border-border bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      5 stars
                    </div>
                    <p className="mt-6 text-sm leading-7 text-muted">“{testimonial.quote}”</p>
                    <div className="mt-6 text-sm text-accent">
                      <span aria-label="5 out of 5 stars">★★★★★</span>
                    </div>
                  </CardContent>
                </Card>
              </MotionCard>
            </MotionItem>
          ))}
        </MotionGroup>
      </MotionSection>
    </SectionShell>
  );
}

