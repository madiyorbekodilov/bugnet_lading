'use client';

import type { HTMLMotionProps } from 'framer-motion';
import { LazyMotion, domAnimation, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const fadeVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  show: { opacity: 1, y: 0 }
};

const staggerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function useVariantProps(delay = 0) {
  const reduceMotion = useReducedMotion();

  return {
    initial: reduceMotion ? false : 'hidden',
    whileInView: reduceMotion ? undefined : 'show',
    viewport: reduceMotion ? undefined : { once: true, amount: 0.25 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
    variants: reduceMotion ? undefined : fadeVariants
  };
}

type MotionDivProps = HTMLMotionProps<'div'> & { delay?: number };
type MotionSectionProps = HTMLMotionProps<'section'> & { delay?: number };

export function MotionSection({ children, className, delay = 0, ...props }: MotionSectionProps) {
  const variantProps = useVariantProps(delay);

  return (
    <LazyMotion features={domAnimation}>
      <motion.section className={className} {...variantProps} {...props}>
        {children}
      </motion.section>
    </LazyMotion>
  );
}

export function MotionDiv({ children, className, delay = 0, ...props }: MotionDivProps) {
  const variantProps = useVariantProps(delay);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div className={className} {...variantProps} {...props}>
        {children}
      </motion.div>
    </LazyMotion>
  );
}

export function MotionGroup({ children, className, delay = 0, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={cn(className)}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'show'}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceMotion ? undefined : staggerVariants}
        transition={reduceMotion ? { duration: 0 } : { delay }}
        {...props}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
}

export function MotionItem({ children, className, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : fadeVariants}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, className, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionSpan({ children, className, delay = 0, ...props }: HTMLMotionProps<'span'> & { delay?: number }) {
  const variantProps = useVariantProps(delay);

  return (
    <motion.span className={className} {...variantProps} {...props}>
      {children}
    </motion.span>
  );
}

export function MotionLine({
  className,
  ...props
}: HTMLMotionProps<'div'> & { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={reduceMotion ? undefined : { scaleX: 1 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.6 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      {...props}
    />
  );
}
