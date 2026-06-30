'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ value, decimals = 0, suffix = '', className }: AnimatedCounterProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setCurrentValue(value);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Number((value * eased).toFixed(decimals)));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [decimals, inView, reduceMotion, value]);

  return (
    <span ref={ref} className={cn(className)}>
      {currentValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

