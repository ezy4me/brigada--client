import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Button } from "@/shared/ui/button/Button";
import Link from "next/link";
import { Section } from "@/shared/ui/section/Section";
import { Heading } from "@/shared/ui/heading/Heading";
import * as styles from "./callToAction.css";
import { cn } from "@/shared/lib/utils";

export interface CallToActionProps extends ComponentPropsWithoutRef<'div'> {
  text: string;
  buttonText?: string;
  signupHref?: string;
  className?: string;
}

export const CallToAction = forwardRef<HTMLDivElement, CallToActionProps>(
  (
    {
      text,
      buttonText = "Зарегистрироваться",
      signupHref = "/register",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Section className={styles.section}>
        <div ref={ref} className={cn(styles.container, className)} {...props}>
          <Heading as="h2" className={styles.text}>
            {text}
          </Heading>
          <Link href={signupHref} className={styles.buttonLink}>
            <Button size="lg" variant="primary">
              {buttonText}
            </Button>
          </Link>
        </div>
      </Section>
    );
  }
);

CallToAction.displayName = "CallToAction";