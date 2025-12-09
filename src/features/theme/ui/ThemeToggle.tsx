"use client";

import dynamic from "next/dynamic";

import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "@/shared/ui/button/Button";
import { Dropdown } from "@/shared/ui/dropdown/Dropdown";

import { Theme } from "../lib/ThemeContext";
import { useTheme } from "../lib/use-theme";

import * as styles from "./themeToggle.css";

const ThemeToggleContent = dynamic(() => Promise.resolve(() => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const themeOptions = [
    {
      label: "Светлая",
      value: "light" as Theme,
      icon: <Sun size={16} />,
    },
    {
      label: "Темная",
      value: "dark" as Theme,
      icon: <Moon size={16} />,
    },
    {
      label: "Системная",
      value: "system" as Theme,
      icon: <Monitor size={16} />,
    },
  ];

  return (
    <Dropdown
      trigger={
        <Button
          variant="ghost"
          size="sm"
          icon={resolvedTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          className={styles.themeButton}
          aria-label={`Текущая тема: ${resolvedTheme === "dark" ? "Темная" : "Светлая"}. Изменить тему`}
        />
      }
      items={themeOptions.map((option) => ({
        label: option.label,
        value: option.value,
        icon: option.icon,
        onSelect: () => setTheme(option.value),
      }))}
      align="end"
    />
  );
}), {
  ssr: false, 
});

export function ThemeToggle() {
  return <ThemeToggleContent />;
}