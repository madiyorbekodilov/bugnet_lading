import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <div className={align === 'center' ? 'mx-auto mb-4 inline-flex items-center gap-3' : 'mb-4 inline-flex items-center gap-3'}>
          <span className="h-px w-8 bg-border" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-pretty text-base leading-8 text-muted sm:text-lg', align === 'center' && 'mx-auto max-w-2xl')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
