"use client";

import { FC, ReactNode, useEffect } from "react";

import { X } from "lucide-react";
import { createPortal } from "react-dom";

import { Button } from "@/shared/ui/button/Button";
import { Heading } from "@/shared/ui/heading/Heading";

import * as styles from "./drawer.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  position?: "left" | "right" | "top" | "bottom";
}

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  position = "right",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const drawerContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.drawer({ size, position })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          {title && (
            <Heading as="h2" className={styles.title}>
              {title}
            </Heading>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className={styles.closeButton}
          >
            <X size={24} />
          </Button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
};