import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[20px] text-sm font-medium transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:-translate-y-0.5 touch-manipulation',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow-[0_1px_2px_rgba(15,23,42,0.08)] hover:bg-primary/95 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)]',
        secondary: 'border border-border bg-white text-primary shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:shadow-md',
        ghost: 'bg-transparent text-primary hover:bg-slate-100'
      },
      size: {
        default: 'h-11 px-5',
        lg: 'h-14 px-6 text-[15px]',
        sm: 'h-11 px-4 text-sm'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
