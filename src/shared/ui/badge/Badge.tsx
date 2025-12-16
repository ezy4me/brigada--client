import { cx } from 'class-variance-authority';

import * as styles from './badge.css';

export type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'error' | 'secondary';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cx(
        styles.badge({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};