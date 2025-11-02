import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as styles from './section.css';
import { cn } from '@/shared/lib/utils';

export interface SectionProps extends ComponentPropsWithoutRef<'section'> {}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn(styles.section, className)} {...props}>
        <div className={styles.container}>{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';