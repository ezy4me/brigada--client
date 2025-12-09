"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button/Button";

import { LoginData, loginSchema } from "../../lib/validation-schemas";

import { LoginFields } from "./login-fields/LoginFields";
import * as styles from "./loginForm.css";

export interface LoginFormProps {
  onSubmit: (data: LoginData) => Promise<void>;
  isLoading?: boolean;
  onForgotPassword?: () => void;
}

export const LoginForm = ({ onSubmit, isLoading = false, onForgotPassword }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit: SubmitHandler<LoginData> = async (data) => {
    setFormError(null);

    try {
      await onSubmit(data);
    } catch (error: any) {
      setFormError(error.message || "Ошибка при входе");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    if (onForgotPassword) {
      onForgotPassword();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form} noValidate>
      <LoginFields
        register={register}
        errors={errors}
        isLoading={isLoading}
        showPassword={showPassword}
        onTogglePassword={togglePasswordVisibility}
        onForgotPassword={handleForgotPassword}
      />

      {formError && <div className={styles.errorText}>{formError}</div>}

      <Button
        type="submit"
        className={styles.button}
        variant="primary"
        size="md"
        disabled={isLoading || !isValid}
      >
        {isLoading ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
};
