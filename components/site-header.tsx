'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/site';
import { cn } from '@/lib/utils';
import { useScrollOffset } from '@/hooks/use-scroll-offset';

export function SiteHeader() {
  const isScrolled = useScrollOffset();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent transition-all duration-300',
        isScrolled && 'border-border/70 bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-2xl'
      )}
    >
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="flex items-center gap-3 font-semibold tracking-[-0.04em] text-primary">
          <img src="/logo.png" alt="BugNet" className="h-9 w-auto rounded-[6px] sm:h-[36px]" />
          <span className="text-base">BugNet</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/#contact">Start a Project</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-border bg-white text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn('absolute left-0 right-0 top-full z-40 lg:hidden', open ? 'block' : 'hidden')}
      >
        <div className="mx-auto max-w-[1280px] px-4 pb-4 sm:px-6 lg:px-8">
          <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-[24px] border border-border bg-white/95 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <nav aria-label="Mobile primary" className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[16px] px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="mt-4 w-full">
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Start a Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
