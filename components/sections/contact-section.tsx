import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { SectionShell } from '@/components/section-shell';
import { MotionSection } from '@/components/motion';
import { brand } from '@/lib/site';
import Link from 'next/link';

export const ContactSection: React.FC = () => {
  return (
    <SectionShell className="bg-white">
      <MotionSection className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-3 text-gray-600">Connect with BugNet — let’s discuss your next ambitious project.</p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${brand.email}`} aria-label="Email" className="group flex items-start gap-4">
              <div className="rounded-lg bg-[#F8FAFF] p-3">
                <Mail className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="mt-1 font-medium">{brand.email}</div>
              </div>
            </a>

            <a href={`tel:+998903638333`} aria-label="Phone" className="group flex items-start gap-4">
              <div className="rounded-lg bg-[#F8FAFF] p-3">
                <Phone className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="mt-1 font-medium">+998 90 363 83 33</div>
              </div>
            </a>

            <a href="https://t.me/BugNetTech" target="_blank" rel="noreferrer" aria-label="Telegram" className="group flex items-start gap-4">
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

        <div className="rounded-2xl border border-border bg-[#FAFBFF] p-8">
          <h3 className="text-lg font-semibold">Ready to get started?</h3>
          <p className="mt-2 text-gray-600">Share a few details and we’ll reach out to schedule a call.</p>

          <div className="mt-6 flex items-center gap-3">
            <Link href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-white">
              <Send className="h-4 w-4" />
              <span>Start a Conversation</span>
            </Link>

            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm">
              Learn more
            </Link>
          </div>
        </div>
      </MotionSection>
    </SectionShell>
  );
};
