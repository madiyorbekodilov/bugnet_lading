import { cn } from '@/lib/utils';

interface BackgroundPatternProps {
  className?: string;
  patternId?: string;
}

export function BackgroundPattern({ className, patternId = 'bugnet-grid' }: BackgroundPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full opacity-60', className)}
      viewBox="0 0 1200 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={patternId} width="72" height="72" patternUnits="userSpaceOnUse">
          <path d="M64 0H0V64" stroke="#E2E8F0" strokeOpacity="0.5" strokeWidth="1" />
          <circle cx="0" cy="0" r="1.5" fill="#2563EB" fillOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="1200" height="1200" fill={`url(#${patternId})`} />
    </svg>
  );
}
