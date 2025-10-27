"use client";

import { FC, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Accordion as ShadAccordion,
  AccordionItem as ShadAccordionItem,
  AccordionTrigger as ShadAccordionTrigger,
  AccordionContent as ShadAccordionContent,
} from "@radix-ui/react-accordion";
import { cn } from "@/shared/lib/utils";
import { ChevronDown } from "lucide-react";

const accordionItemVariants = cva(
  "border border-neutral-20 rounded-lg overflow-hidden"
);

const accordionTriggerVariants = cva(
  "flex justify-between items-center p-4 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-neutral-10",
        primary: "bg-accent-primary text-white hover:bg-accent-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accordionContentVariants = cva("px-4 pb-4 text-neutral-60");

interface AccordionProps {
  type?: "single" | "multiple";
  children: ReactNode;
  collapsible?: boolean;
  className?: string;
}

export const Accordion: FC<AccordionProps> = ({
  type = "single",
  collapsible = true,
  children,
  className,
}) => {
  return (
    <ShadAccordion
      type={type}
      collapsible={collapsible}
      className={cn("w-full", className)}
    >
      {children}
    </ShadAccordion>
  );
};

interface AccordionItemProps {
  value: string;
  children: ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  value,
  children,
}) => {
  return (
    <ShadAccordionItem value={value} className={accordionItemVariants()}>
      {children}
    </ShadAccordionItem>
  );
};

interface AccordionTriggerProps
  extends VariantProps<typeof accordionTriggerVariants> {
  children: ReactNode;
  className?: string;
}

export const AccordionTrigger: FC<AccordionTriggerProps> = ({
  children,
  variant,
  className,
}) => {
  return (
    <ShadAccordionTrigger
      className={cn(accordionTriggerVariants({ variant }), className)}
    >
      {children}
      <ChevronDown className="transition-transform duration-200 data-[state=open]:rotate-180" />
    </ShadAccordionTrigger>
  );
};

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
}) => {
  return (
    <ShadAccordionContent
      className={cn(accordionContentVariants(), className)}
    >
      {children}
    </ShadAccordionContent>
  );
};
