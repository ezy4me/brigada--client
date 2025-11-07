"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import * as styles from "./loginForm.css";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export interface LoginFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  loading?: boolean;
  error?: string;
  onForgotPassword?: () => void;
}

export const LoginForm = ({
  onSubmit,
  loading = false,
  error,
  onForgotPassword,
}: LoginFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
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

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    try {
      await onSubmit(formData);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    if (onForgotPassword) {
      onForgotPassword(); 
    } else {
      router.push("/forgot-password"); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
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
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      </div>

      <div className={styles.forgotPassword}>
        <button
          type="button"
          onClick={handleForgotPassword}
          className={styles.forgotPasswordLink}
        >
          Забыли пароль?
        </button>
      </div>

      <Button
        type="submit"
        className={styles.button}
        variant="primary"
        size="md"
        disabled={loading}
      >
        {loading ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
};