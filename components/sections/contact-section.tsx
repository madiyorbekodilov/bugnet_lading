import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { SectionShell } from '@/components/section-shell';
import { MotionSection } from '@/components/motion';
import { brand } from '@/lib/site';
import Link from 'next/link';

export const ContactSection: React.FC = () => {
  return (
    <SectionShell id="contact" className="bg-white">
      <MotionSection className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">Contact</h2>
            <p className="mt-3 text-base leading-7 text-muted">
              Connect with BugNet — let’s discuss your next ambitious project.
            </p>
          </div>

          <div className="grid gap-4">
            <a href={`mailto:${brand.email}`} aria-label="Email" className="group flex flex-col gap-4 rounded-[20px] border border-border bg-slate-50 p-4 transition-colors hover:bg-white sm:flex-row sm:items-center">
              <div className="rounded-lg bg-[#F8FAFF] p-3">
                <Mail className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="mt-1 font-medium">{brand.email}</div>
              </div>
            </a>

            <a href={`tel:+998903638333`} aria-label="Phone" className="group flex flex-col gap-4 rounded-[20px] border border-border bg-slate-50 p-4 transition-colors hover:bg-white sm:flex-row sm:items-center">
              <div className="rounded-lg bg-[#F8FAFF] p-3">
                <Phone className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="mt-1 font-medium">+998 90 363 83 33</div>
              </div>
            </a>

            <a href="https://t.me/BugNetTech" target="_blank" rel="noreferrer" aria-label="Telegram" className="group flex flex-col gap-4 rounded-[20px] border border-border bg-slate-50 p-4 transition-colors hover:bg-white sm:flex-row sm:items-center">
              <div className="rounded-lg bg-[#F8FAFF] p-3">
                <Send className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Telegram</div>
                <div className="mt-1 font-medium">@BugNetTech</div>
              </div>
            </a>
          </div>
        </div>

        <div className="rounded-[24px] border border-border bg-[#FAFBFF] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-primary">Ready to get started?</h3>
          <p className="mt-2 text-base leading-7 text-muted">Share a few details and we’ll reach out to schedule a call.</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={`mailto:${brand.email}`} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-white sm:w-auto">
              <Send className="h-4 w-4" />
              <span>Start a Conversation</span>
            </Link>

            <Link href="/" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm text-primary sm:w-auto">
              Learn more
            </Link>
          </div>
        </div>
      </MotionSection>
    </SectionShell>
  );
};
