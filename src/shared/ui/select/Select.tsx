import { forwardRef, useMemo, useState, useRef, useEffect } from "react";

import { ChevronDown, Search } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import * as styles from "./select.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  searchable?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Выберите...",
      searchable = false,
      error = false,
      helperText,
      label,
      size = "md",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const selectedOption = useMemo(
      () => options.find((option) => option.value === value),
      [options, value]
    );

    const filteredOptions = useMemo(() => {
      if (!searchable || !search) return options;
      return options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()));
    }, [options, search, searchable]);

    const handleSelect = (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
      setSearch("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!isOpen) {
        if (e.key === "Enter" || e.key === " ") {
          setIsOpen(true);
          e.preventDefault();
        }
        return;
      }

      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          setSearch("");
          break;
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          if (filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex].value);
          }
          e.preventDefault();
          break;
      }
    };

    useEffect(() => {
      if (isOpen && searchable && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [isOpen, searchable]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setSearch("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className={cn(styles.container, className)} ref={containerRef}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.wrapper}>
          <button
            type="button"
            className={cn(
              styles.trigger,
              error && styles.triggerError,
              disabled && styles.triggerDisabled,
              styles[size]
            )}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            {...props}
          >
            <span className={styles.value}>{selectedOption?.label || placeholder}</span>
            <ChevronDown className={cn(styles.icon, isOpen && styles.iconOpen)} size={16} />
          </button>

          {isOpen && (
            <div className={styles.dropdown}>
              {searchable && (
                <div className={styles.searchContainer}>
                  <Search className={styles.searchIcon} size={16} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.searchInput}
                    placeholder="Поиск..."
                    onKeyDown={(e) => {
                      // Обработка клавиш для input
                      if (e.key === "Escape") {
                        setIsOpen(false);
                        setSearch("");
                      } else if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setHighlightedIndex(0);
                        const firstOption = filteredOptions[0];
                        if (firstOption) {
                          // Можно перевести фокус на первый элемент
                        }
                      }
                    }}
                  />
                </div>
              )}

              <div className={styles.optionsList}>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <button
                      key={option.value}
                      type="button"
                      className={cn(
                        styles.option,
                        value === option.value && styles.optionSelected,
                        highlightedIndex === index && styles.optionHighlighted
                      )}
                      onClick={() => handleSelect(option.value)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      {option.label}
                    </button>
                  ))
                ) : (
                  <div className={styles.noResults}>Ничего не найдено</div>
                )}
              </div>
            </div>
          )}
        </div>

        {helperText && (
          <div className={cn(styles.helperText, error && styles.helperTextError)}>{helperText}</div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
