"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button/Button";
import { useLoginForm } from "../../lib/use-login-form";
import { LoginFields } from "./login-fields/LoginFields";
import { LoginData } from "../../lib/validation-schemas";
import * as styles from "./loginForm.css";

export interface LoginFormProps {
  onSubmit: (data: LoginData) => Promise<void>;
  onForgotPassword?: () => void;
}

export const LoginForm = ({ onSubmit, onForgotPassword }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    isLoading,
    serverError,
    errors,
    register,
    handleSubmit,
  } = useLoginForm(onSubmit);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    if (onForgotPassword) {
      onForgotPassword();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <LoginFields
        register={register}
        errors={errors}
        isLoading={isLoading}
        showPassword={showPassword}
        onTogglePassword={togglePasswordVisibility}
        onForgotPassword={handleForgotPassword}
      />

      {serverError && !errors.email && !errors.password && (
        <div className={styles.errorText}>{serverError}</div>
      )}

      <Button
        type="submit"
        className={styles.button}
        variant="primary"
        size="md"
        disabled={isLoading}
      >
        {isLoading ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
};