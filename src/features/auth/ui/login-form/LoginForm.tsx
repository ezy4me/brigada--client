"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/shared/ui/input/input";
import { Button } from "@/shared/ui/button/button";
import { Card, CardContent } from "@/shared/ui/card/card";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import * as styles from "./LoginForm.css";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
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

    setLoading(true);
    setErrors({});

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Login attempt:", formData);
      router.push('/');
    } catch (err) {
      setErrors({ general: "Ошибка подключения" });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
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
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="/forgot-password" className={styles.forgotPasswordLink}>
              Забыли пароль?
            </a>
          </div>

          {errors.general && (
            <div className={styles.errorText}>{errors.general}</div>
          )}

          <Button
            type="submit"
            className={styles.button}
            variant="default"
            size="md"
            disabled={loading}
          >
            {loading ? "Вход..." : "Войти"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};