import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react';
import { text } from './text.css';
import { cn } from '@/shared/lib/utils';

type TextSize = 'body1' | 'body2' | 'caption';
type TextColor = 'primary' | 'secondary' | 'inverted' | 'error' | 'success';
type TextWeight = 'regular' | 'medium' | 'bold';

interface TextOwnProps {
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
}

type TextProps<E extends ElementType = 'p'> = TextOwnProps &
  Omit<ComponentPropsWithoutRef<E>, keyof TextOwnProps> & {
    as?: E;
  };

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Tag = 'p', size, color, weight, className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(text({ size, color, weight }), className)}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
export type { TextProps, TextSize, TextColor, TextWeight };