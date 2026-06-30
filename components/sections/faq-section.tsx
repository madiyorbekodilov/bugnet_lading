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

        <div className="mt-12 grid gap-6">
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
        </div>
      </MotionSection>
    </SectionShell>
  );
}
