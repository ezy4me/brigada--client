"use client";

import { useState, useCallback, useMemo } from "react";

import { UseFormRegister, FieldErrors, Control } from "react-hook-form";

import { CustomerPerformerProfileFormData } from "@/features/profile/lib/validation-schemas";
import { formatPhoneForDisplay, handlePhoneInput } from "@/shared/lib/phone-utils";
import { Input } from "@/shared/ui/input/Input";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileFields.css";

interface ProfileFieldsProps {
  register: UseFormRegister<CustomerPerformerProfileFormData>;
  errors: FieldErrors<CustomerPerformerProfileFormData>;
  userRole: string;
  userEmail: string;
  isLoading: boolean;
  phoneValue: string;
  onPhoneChange: (value: string) => void;
  control: Control<CustomerPerformerProfileFormData>;
}

export const ProfileFields = ({
  register,
  errors,
  userRole,
  userEmail,
  isLoading,
  phoneValue,
  onPhoneChange,
  control,
}: ProfileFieldsProps) => {
  const initialDisplayPhone = useMemo(
    () => (phoneValue ? formatPhoneForDisplay(phoneValue) : "+7"),
    [phoneValue]
  );

  const [displayPhone, setDisplayPhone] = useState(initialDisplayPhone);

  const [prevPhoneValue, setPrevPhoneValue] = useState(phoneValue);

  if (phoneValue !== prevPhoneValue) {
    setDisplayPhone(formatPhoneForDisplay(phoneValue));
    setPrevPhoneValue(phoneValue);
  }

  const handlePhoneInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const result = handlePhoneInput(e.target.value, displayPhone);
      setDisplayPhone(result.displayValue);
      onPhoneChange(result.rawValue);
    },
    [displayPhone, onPhoneChange]
  );

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
          <Input
            label="ID специализации"
            type="text"
            {...register("specializationId")}
            error={!!errors.specializationId}
            helperText={errors.specializationId?.message}
            placeholder="a1b2c3d4-e5f6-7890-abcd-ef1234567890"
            disabled={isLoading}
          />
          <Text size="caption" color="secondary" className={styles.hint}>
            Оставьте пустым, если нет специализации
          </Text>
        </div>
      )}

      <div className={styles.singleField}>
        <label className={styles.selectLabel}>
          <span>Предпочтительный способ связи</span>
          <select {...register("preferedContact")} className={styles.select} disabled={isLoading}>
            <option value="email">Email</option>
            <option value="phone">Телефон</option>
            <option value="t.me">Telegram</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        {errors.preferedContact && (
          <Text size="caption" color="error" className={styles.errorText}>
            Выберите предпочтительный способ связи
          </Text>
        )}
      </div>
    </div>
  );
};