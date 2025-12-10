// src/features/auth/ui/register-form/register-fields/BaseFields.tsx
"use client";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { UseFormRegister } from "react-hook-form";

import { RegisterFormFields } from "@/features/auth/lib/use-register-form";
import { Input } from "@/shared/ui/input/Input";

import * as styles from "../registerForm.css";

interface BaseFieldsProps {
  register: UseFormRegister<RegisterFormFields>;
  errors: any;
  isLoading: boolean;
  showPassword: boolean;
  onTogglePassword: () => void;
}

export const BaseFields = ({
  register,
  errors,
  isLoading,
  showPassword,
  onTogglePassword,
}: BaseFieldsProps) => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <Input
          label="Email"
          type="email"
          placeholder="example@email.com"
          disabled={isLoading}
          leftIcon={<Mail size={16} />}
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный формат email",
            },
          })}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="Пароль"
          type={showPassword ? "text" : "password"}
          placeholder="Не менее 6 символов, буквы и цифры"
          disabled={isLoading}
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button type="button" onClick={onTogglePassword} className={styles.passwordToggle}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)/,
              message: "Пароль должен содержать буквы и цифры",
            },
          })}
        />
      </div>
    </>
  );
};
