import { ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "@/shared/lib/utils";

import { Button, ButtonProps } from "../button/Button";

import { content, item as itemStyle } from "./dropdown.css";

export interface DropdownItem {
  label: string;
  value: string;
  icon?: ReactNode;
  onSelect?: () => void;
}

export interface DropdownProps {
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
  triggerLeftIcon?: ButtonProps["leftIcon"];
  triggerRightIcon?: ButtonProps["rightIcon"];
  triggerText?: string;
  trigger?: ReactNode;
  items: DropdownItem[];
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const Dropdown = ({
  triggerVariant = "primary",
  triggerSize = "md",
  triggerLeftIcon,
  triggerRightIcon,
  triggerText,
  trigger,
  items,
  className,
  align = "end",
  sideOffset = 8,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger ? (
          <div>{trigger}</div>
        ) : (
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
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(content, className)}
          align={align}
          sideOffset={sideOffset}
        >
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className={cn(itemStyle, className)}
              onSelect={item.onSelect}
            >
              {item.icon && <span style={{ marginRight: "8px" }}>{item.icon}</span>}
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
