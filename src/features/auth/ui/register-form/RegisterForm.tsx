"use client";

import { useState } from "react";
import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import * as styles from "./registerForm.css";
import {
  Role,
  RoleSelector,
} from "@/features/role-selector/ui/RoleSelector";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  general?: string;
}

export interface RegisterFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  selectedRole: Role | null;
  onRoleChange: (role: Role) => void;
  loading?: boolean;
  error?: string;
}

export const RegisterForm = ({
  onSubmit,
  selectedRole,
  onRoleChange,
  loading = false,
  error,
}: RegisterFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const validate = (data: FormData, role: Role | null): FormErrors => {
    const newErrors: FormErrors = {};

    if (!role) {
      newErrors.general = "Пожалуйста, выберите роль";
    }

    if (!data.fullName.trim()) {
      newErrors.fullName = "Имя обязательно";
    }

    if (!data.email) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email некорректен";
    }

    if (!data.password) {
      newErrors.password = "Пароль обязателен";
    } else if (data.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Подтвердите пароль";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    if (!agreedToTerms) {
      newErrors.general = "Необходимо согласие с условиями";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(formData, selectedRole);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    try {
      await onSubmit(formData);
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.roleSelectorWrapper}>
        <RoleSelector
          initialRole={selectedRole || undefined}
          onRoleChange={onRoleChange}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="Имя"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
          disabled={loading}
          leftIcon={<User size={16} />}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email || !!error}
          helperText={errors.email || error}
          disabled={loading}
          leftIcon={<Mail size={16} />}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="Пароль"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          disabled={loading}
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.passwordToggle}
              aria-label={
                showPassword ? "Скрыть пароль" : "Показать пароль"
              }
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="Подтвердите пароль"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          disabled={loading}
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className={styles.passwordToggle}
              aria-label={
                showConfirmPassword ? "Скрыть пароль" : "Показать пароль"
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          }
        />
      </div>

      <div className={styles.terms}>
        <input
          type="checkbox"
          id="terms"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          disabled={loading}
        />
        <label htmlFor="terms" className={styles.termsLabel}>
          Я согласен с условиями пользовательского соглашения и политикой
          конфиденциальности
        </label>
      </div>

      <Button
        type="submit"
        className={styles.button}
        variant="primary"
        size="md"
        disabled={loading || !selectedRole}
      >
        {loading ? "Регистрация..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
};
