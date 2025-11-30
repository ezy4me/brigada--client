import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/shared/lib/utils";

import { switchRoot, switchThumb } from "./switch.css";


export interface SwitchProps extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => (
    <SwitchPrimitive.Root
      ref={ref}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={cn(switchRoot({ checked }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb className={cn(switchThumb({ checked: checked ?? false }))} />
    </SwitchPrimitive.Root>
  )
);

Switch.displayName = SwitchPrimitive.Root.displayName;
