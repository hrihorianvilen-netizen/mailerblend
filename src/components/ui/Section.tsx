import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  contained?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, contained = true, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-12 md:py-16 lg:py-20', className)}
        {...props}
      >
        {contained ? <Container>{children}</Container> : children}
      </section>
    );
  }
);

Section.displayName = 'Section';
