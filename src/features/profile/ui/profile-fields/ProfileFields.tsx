"use client";

import { useState, useCallback, useEffect } from "react";

import { UseFormRegister, FieldErrors } from "react-hook-form";

import { CustomerPerformerProfileFormData } from "@/features/profile/lib/validation-schemas";
import { useSpecializations } from "@/features/specializations/lib/use-specializations";
import { formatPhoneForDisplay, handlePhoneInput } from "@/shared/lib/phone-utils";
import { ContactMethodSelect } from "@/shared/ui/contact-method/ContactMethodSelect";
import { Input } from "@/shared/ui/input/Input";
import { Select } from "@/shared/ui/select/Select";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileFields.css";

interface ProfileFieldsProps {
  register: UseFormRegister<CustomerPerformerProfileFormData>;
  errors: FieldErrors<CustomerPerformerProfileFormData>;
  userRole: string;
  userEmail: string;
  isLoading: boolean;
  phoneValue: string;
  specializationIdValue?: string;
  preferedContactValue?: string;
  onPhoneChange: (value: string) => void;
  onSpecializationChange?: (value: string) => void;
  onContactMethodChange?: (value: "email" | "phone" | "t.me" | "whatsapp") => void;
}

export const ProfileFields = ({
  register,
  errors,
  userRole,
  userEmail,
  isLoading,
  phoneValue,
  specializationIdValue = "",
  preferedContactValue = "email",
  onPhoneChange,
  onSpecializationChange,
  onContactMethodChange,
}: ProfileFieldsProps) => {
  // Используем хук только для исполнителей
  const { specializationOptions, isLoading: isLoadingSpecializations } = useSpecializations(
    userRole === "performer"
  );

  const [displayPhone, setDisplayPhone] = useState("+7");

  // Инициализируем телефон
  useEffect(() => {
    if (phoneValue) {
      setDisplayPhone(formatPhoneForDisplay(phoneValue));
    }
  }, [phoneValue]);

  // Обработчик изменения телефона
  const handlePhoneInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const result = handlePhoneInput(e.target.value, displayPhone);
      setDisplayPhone(result.displayValue);
      onPhoneChange(result.rawValue);
    },
    [displayPhone, onPhoneChange]
  );

  // Обработчик нажатия клавиш
  const handlePhoneKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ];

      const cleaned = displayPhone.replace(/\D/g, "");
      if (cleaned.length >= 11 && /^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    },
    [displayPhone]
  );

  // При фокусе выделяем область для ввода
  const handlePhoneFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (displayPhone === "+7") {
        setTimeout(() => {
          e.target.setSelectionRange(2, 2);
        }, 0);
      }
    },
    [displayPhone]
  );

  return (
    <div className={styles.fields}>
      <div className={styles.fieldGroup}>
        <Input
          label="Фамилия"
          type="text"
          {...register("surname")}
          error={!!errors.surname}
          helperText={errors.surname?.message}
          placeholder="Петров"
          disabled={isLoading}
          required
        />
        <Input
          label="Имя"
          type="text"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          placeholder="Иван"
          disabled={isLoading}
          required
        />
      </div>

      <div className={styles.singleField}>
        <Input
          label="Отчество"
          type="text"
          {...register("patronymic")}
          error={!!errors.patronymic}
          helperText={errors.patronymic?.message}
          placeholder="Иванович"
          disabled={isLoading}
        />
      </div>

      <div className={styles.fieldGroup}>
        <Input
          label="Email"
          type="email"
          value={userEmail}
          disabled
          placeholder="ivan@example.com"
        />
        <Input
          label="Телефон"
          type="tel"
          value={displayPhone}
          onChange={handlePhoneInputChange}
          onKeyDown={handlePhoneKeyDown}
          onFocus={handlePhoneFocus}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          placeholder="+7 (999) 123-45-67"
          disabled={isLoading}
          required
          maxLength={18}
        />
      </div>

      {userRole === "performer" && (
        <div className={styles.singleField}>
          <Select
            label="Специализация"
            options={specializationOptions}
            value={specializationIdValue}
            onChange={(value) => {
              if (onSpecializationChange) {
                onSpecializationChange(value);
              } else {
                const event = {
                  target: {
                    name: "specializationId",
                    value: value || "",
                  },
                };
                register("specializationId").onChange(event as any);
              }
            }}
            placeholder={
              isLoadingSpecializations ? "Загрузка специализаций..." : "Выберите специализацию"
            }
            searchable={true}
            error={!!errors.specializationId}
            helperText={errors.specializationId?.message}
            disabled={isLoading || isLoadingSpecializations}
          />
          <Text size="caption" color="secondary" className={styles.hint}>
            Выберите специализацию из списка или оставьте пустым
          </Text>
        </div>
      )}

      <div className={styles.singleField}>
        <ContactMethodSelect
          value={preferedContactValue}
          onChange={(value) => {
            if (onContactMethodChange) {
              onContactMethodChange(value as any);
            } else {
              const event = {
                target: {
                  name: "preferedContact",
                  value: value,
                },
              };
              register("preferedContact").onChange(event as any);
            }
          }}
          error={!!errors.preferedContact}
          helperText={errors.preferedContact?.message}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};
