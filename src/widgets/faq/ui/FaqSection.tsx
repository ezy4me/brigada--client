"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "../model/faqData";
import * as styles from "./faq.css";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Часто задаваемые вопросы
        </h2>

        <div className={styles.accordionList}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={styles.accordionItem}
                data-state={isOpen ? "open" : "closed"}
              >
                <button
                  onClick={() => toggle(idx)}
                  className={styles.accordionTrigger}
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.triggerIconWrapper}
                  >
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.25} />
                    ) : (
                      <Plus size={18} strokeWidth={2.25} />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className={styles.accordionContentInner}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};