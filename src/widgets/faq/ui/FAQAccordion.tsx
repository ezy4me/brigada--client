"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { faqItems } from "../model/faqData";

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-3 max-w-4xl mx-auto">
      {faqItems.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={cn(
              "overflow-hidden bg-white border border-neutral-200 transition-all duration-300 hover:shadow-md",
              isOpen ? "rounded-2xl shadow-lg" : "rounded-full"
            )}
          >
            <button
              onClick={() => toggle(idx)}
              className={cn(
                "w-full flex justify-between items-center px-6 py-5 font-semibold text-neutral-900 transition-all duration-300 group",
                "hover:bg-accent-primary/5 rounded-full",
                isOpen && "bg-accent-primary/10 rounded-t-2xl rounded-b-none"
              )}
            >
              <span className="text-left text-lg pr-4 group-hover:text-accent-primary transition-colors">
                {item.question}
              </span>
              <div className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                isOpen 
                  ? "bg-accent-primary text-white transform rotate-180 scale-110" 
                  : "bg-neutral-100 text-neutral-600 group-hover:bg-accent-primary group-hover:text-white"
              )}>
                {isOpen ? (
                  <Minus className="w-4 h-4 transition-transform duration-300" />
                ) : (
                  <Plus className="w-4 h-4 transition-transform duration-300" />
                )}
              </div>
            </button>
            
            <div
              className={cn(
                "transition-all duration-500 ease-in-out overflow-hidden",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className={cn(
                "px-6 pb-6 text-neutral-600 leading-relaxed text-base transition-opacity duration-300",
                isOpen ? "opacity-100 delay-150" : "opacity-0"
              )}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};