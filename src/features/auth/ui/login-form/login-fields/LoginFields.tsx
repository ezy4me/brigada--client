"use client";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { UseFormRegister } from "react-hook-form";

import { LoginData } from "@/features/auth/lib/validation-schemas";
import { Input } from "@/shared/ui/input/Input";

import * as styles from "../loginForm.css";

interface LoginFieldsProps {
  register: UseFormRegister<LoginData>;
  errors: any;
  isLoading: boolean;
  showPassword: boolean;
  onTogglePassword: () => void;
  onForgotPassword: () => void;
}

export const LoginFields = ({
  register,
  errors,
  isLoading,
  showPassword,
  onTogglePassword,
  onForgotPassword,
}: LoginFieldsProps) => {
  return (
    <div className={styles.fieldsContainer}>
      <div className={styles.field}>
        <Input
          label="Email"
          type="email"
          placeholder="Введите ваш email"
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

      <div className={styles.field}>
        <Input
          label="Пароль"
          type={showPassword ? "text" : "password"}
          placeholder="Введите ваш пароль"
          disabled={isLoading}
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button
              type="button"
              onClick={onTogglePassword}
              className={styles.passwordToggle}
              disabled={isLoading}
            >
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
          })}
        />

        <div className={styles.forgotPassword}>
          <button
            type="button"
            onClick={onForgotPassword}
            className={styles.forgotPasswordLink}
            disabled={isLoading}
          >
            Забыли пароль?
          </button>
        </div>
      </div>
    </div>
  );
};
