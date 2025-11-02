import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react';
import { heading } from './heading.css';
import { cn } from '@/shared/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'h1' | 'h1Sm' | 'h2' | 'h2Sm' | 'h3';

interface HeadingProps extends ComponentPropsWithoutRef<HeadingLevel> {
  as?: HeadingLevel;
  size?: HeadingSize;
  weight?: 'regular' | 'medium' | 'bold';
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h2', size, weight, className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(heading({ size, weight }), className)}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';