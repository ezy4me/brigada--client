import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button, ButtonProps } from '../button/Button'; 
import { cn } from '@/shared/lib/utils';
import { content, item as itemStyle } from './dropdown.css';

export interface DropdownItem {
  label: string;
  value: string;
  onSelect?: () => void;
}

export interface DropdownProps {
  triggerVariant?: ButtonProps['variant'];
  triggerSize?: ButtonProps['size'];
  triggerLeftIcon?: ButtonProps['leftIcon'];
  triggerRightIcon?: ButtonProps['rightIcon'];
  triggerText?: string; 
  items: DropdownItem[];
  className?: string;
}

export const Dropdown = ({ 
  triggerVariant = 'primary', 
  triggerSize = 'md', 
  triggerLeftIcon, 
  triggerRightIcon, 
  triggerText, 
  items, 
  className 
}: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          leftIcon={triggerLeftIcon}
          rightIcon={triggerRightIcon}
          className={className} 
          type="button" 
        >
          {triggerText}
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={cn(content, className)}>
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className={itemStyle}
              onSelect={item.onSelect}
            >
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};