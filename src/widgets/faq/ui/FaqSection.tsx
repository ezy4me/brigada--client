"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "../model/faqData";
import { cn } from "@/shared/lib/utils";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 bg-neutral-5">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-semibold mb-24 text-center text-neutral-90 tracking-tight">
          Часто задаваемые вопросы
        </h2>

        <div className="flex flex-col gap-16">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={cn(
                  "bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 border border-transparent",
                  isOpen &&
                    "border-accent-primary shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                )}
              >
                <button
                  onClick={() => toggle(idx)}
                  className={cn(
                    "w-full flex justify-between items-center px-20 py-12 text-left text-lg font-medium transition-colors",
                    "hover:bg-neutral-10 focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                  )}
                >
                  <span className="text-neutral-90">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 text-white",
                      isOpen
                        ? "bg-accent-primary border-accent-primary"
                        : "border-neutral-30 bg-accent-secondary hover:border-accent-primary hover:text-accent-primary"
                    )}
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
                      <div className="px-20 py-12 text-neutral-60 leading-relaxed text-base">
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
