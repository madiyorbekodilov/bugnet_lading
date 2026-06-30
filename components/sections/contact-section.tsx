import React from 'react';
import { Mail, Phone, MapPin, SquareCode, Users, Send } from 'lucide-react';
import { SectionShell } from '@/components/section-shell';
import { MotionSection } from '@/components/motion';
import { brand, socialLinks } from '@/lib/site';
import Link from 'next/link';

export const ContactSection: React.FC = () => {
  return (
    <SectionShell className="bg-white">
      <MotionSection className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-3 text-gray-600">Connect with BugNet — letâ€™s discuss your next ambitious project.</p>

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

            <a href={`tel:${brand.phone}`} aria-label="Phone" className="group flex items-start gap-4">
              <div className="rounded-lg bg-[#F8FAFF] p-3">
                <Phone className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="mt-1 font-medium">{brand.phone}</div>
              </div>
            </a>

            <div className="group flex items-start gap-4">
              <div className="rounded-lg bg-[#F8FAFF] p-3">
                <MapPin className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="mt-1 font-medium">{brand.location}</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-gray-50"
                >
                  <span className="inline-flex items-center gap-2">
                    {s.label === 'GitHub' ? (
                      <SquareCode className="h-4 w-4" />
                    ) : s.label === 'LinkedIn' ? (
                      <Users className="h-4 w-4" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    <span>{s.label}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-[#FAFBFF] p-8">
          <h3 className="text-lg font-semibold">Ready to get started?</h3>
          <p className="mt-2 text-gray-600">Share a few details and weâ€™ll reach out to schedule a call.</p>

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
