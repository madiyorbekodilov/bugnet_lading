import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function SectionShell({ id, children, className, contentClassName }: SectionShellProps) {
  return (
    <section id={id} className={cn('relative scroll-mt-28 py-20 sm:py-24 lg:py-36', className)}>
      <div className={cn('mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8', contentClassName)}>{children}</div>
    </section>
  );
}
