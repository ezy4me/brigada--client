import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Button } from "@/shared/ui/button/Button";
import * as styles from "./callToAction.css";
import Link from "next/link";
import { Section } from "@/shared/ui/section/Section";
import { Heading } from "@/shared/ui/heading/Heading";

export interface CallToActionProps
  extends ComponentPropsWithoutRef<"div"> {
  text: string;
  signupHref?: string;
  className?: string;
}

export const CallToAction = forwardRef<HTMLDivElement, CallToActionProps>(
  ({ text, signupHref = "/register", className, ...props }, ref) => {
    return (
      <Section className={styles.wrapper}>
        <div className={styles.container}>
          <Heading size="h4" className={styles.text}>{text}</Heading>
          <Link href={signupHref} className={styles.buttonLink}>
            <Button size="lg" variant="primary">
              Регистрация
            </Button>
          </Link>
        </div>
      </Section>
    );
  }
);

CallToAction.displayName = "CallToAction";
