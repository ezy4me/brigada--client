import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/utils";

import * as styles from "./loader.css";

interface LoaderProps extends ComponentPropsWithoutRef<"div"> {
  size?: "sm" | "md" | "lg";
  variant?: "dots" | "spinner";
}

const Loader = ({ size = "md", variant = "spinner", className, ...props }: LoaderProps) => {
  const sizeClass = styles.size({ size, variant });

  return <div className={cn(sizeClass, className)} {...props} />;
};

export { Loader };