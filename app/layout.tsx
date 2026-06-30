import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bugnet.uz'),
  title: {
    default: 'BugNet — Software Engineering Company',
    template: '%s | BugNet'
  },
  description:
    'BugNet builds scalable software, SaaS platforms, cloud infrastructure and AI-powered solutions.',
  openGraph: {
    type: 'website',
    url: 'https://bugnet.uz',
    title: 'BugNet',
    description: 'Building Software That Businesses Trust.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'BugNet landing page preview' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BugNet',
    description: 'Building Software That Businesses Trust.',
    images: ['/og-image.svg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body>
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
