"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/shared/ui/card/Card";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { ArrowRight } from "lucide-react";
import * as styles from "./verify.css";

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      console.log("Verification code:", fullCode);
      // router.push('/dashboard');
    }
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <div className={styles.page}>
      <Section className={styles.section}>
        <div className={styles.container}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Heading as="h1" className={styles.title}>
                Подтверждение аккаунта
              </Heading>
              <Text className={styles.description}>
                Мы отправили 6-значный код на вашу почту.
              </Text>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.codeInputs}>
                  {code.map((digit, index) => (
                    <div key={index} className={styles.inputWrapper}>
                      <input
                        ref={(el) => {
                          inputsRef.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]{1}"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className={styles.codeInput}
                      />
                    </div>
                  ))}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  rightIcon={<ArrowRight size={20} />}
                >
                  Подтвердить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
