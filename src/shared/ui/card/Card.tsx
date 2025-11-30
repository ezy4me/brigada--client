import { ComponentProps, ElementRef, forwardRef } from "react";

import { cn } from "@/shared/lib/utils";

import { card, cardHeader, cardTitle, cardDescription, cardContent, cardFooter } from "./card.css";

export interface CardProps extends ComponentProps<"div"> {}
export const Card = forwardRef<ElementRef<"div">, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(card, className)} {...props} />
));
Card.displayName = "Card";

export interface CardTitleProps extends ComponentProps<"h3"> {}
export const CardTitle = forwardRef<ElementRef<"h3">, CardTitleProps>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn(cardTitle, className)} {...props} />
);
CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps extends ComponentProps<"p"> {}
export const CardDescription = forwardRef<ElementRef<"p">, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn(cardDescription, className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export interface CardContentProps extends ComponentProps<"div"> {}
export const CardContent = forwardRef<ElementRef<"div">, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(cardContent, className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export interface CardFooterProps extends ComponentProps<"div"> {}
export const CardFooter = forwardRef<ElementRef<"div">, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(cardFooter, className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export interface CardHeaderProps extends ComponentProps<"div"> {}
export const CardHeader = forwardRef<ElementRef<"div">, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(cardHeader, className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";
