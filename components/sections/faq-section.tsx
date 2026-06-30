'use client';

import Link from 'next/link';
import { MotionSection } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faqs } from '@/lib/site';

export function FaqSection() {
  return (
    <SectionShell id="faq">
      <MotionSection>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions, answered clearly."
          description="If you need more detail, we can walk through the scope and delivery model in a short call."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.34fr] lg:items-start">
          <div className="rounded-[24px] border border-border bg-white px-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-[24px] border border-border bg-slate-50 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Need clarity?</p>
            <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-primary">
              We&apos;ll help you scope the right engagement.
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Share your goals and timeline. We&apos;ll reply with a concise plan and next steps.
            </p>
            <Button asChild className="mt-6 w-full">
              <Link href="mailto:hello@bugnet.dev">hello@bugnet.dev</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </SectionShell>
  );
}
