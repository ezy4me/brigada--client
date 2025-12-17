"use client";

import { useState } from "react";

import { RoleSelector, Role } from "@/features/role-selector/ui/RoleSelector";
import { Button } from "@/shared/ui/button/Button";

import { useRegisterForm, RegisterFormFields } from "../../lib/use-register-form";

import { BaseFields } from "./register-fields/BaseFields";
import { CompanyFields } from "./register-fields/CompanyFields";
import * as styles from "./registerForm.css";

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormFields, role: string) => Promise<void>;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const {
    selectedRole,
    isLoading,
    serverError,
    errors,
    register,
    handleSubmit,
    handleRoleChange,
    setFormValue,
    watch,
  } = useRegisterForm(onSubmit);

  const selectedTariff = watch("tariff");

  const handleTariffSelect = (value: string) => {
    setFormValue("tariff", value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      return;
    }

    handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form} noValidate>
      <div className={styles.roleSelectorWrapper}>
        <RoleSelector initialRole={selectedRole || undefined} onRoleChange={handleRoleChange} />
      </div>

      {selectedRole && (
        <>
          <BaseFields
            register={register}
            errors={errors}
            isLoading={isLoading}
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
          />

          {selectedRole === "companies" && (
            <CompanyFields
              register={register}
              errors={errors}
              isLoading={isLoading}
              selectedTariff={selectedTariff || ""}
              onTariffSelect={handleTariffSelect}
            />
          )}

          <div className={styles.terms}>
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              disabled={isLoading}
              required
            />
            <label htmlFor="terms" className={styles.termsLabel}>
              Я согласен с условиями пользовательского соглашения и политикой конфиденциальности
            </label>
          </div>

          {serverError && <div className={styles.errorText}>{serverError}</div>}

          <Button
            type="submit"
            className={styles.button}
            variant="primary"
            size="md"
            disabled={isLoading || !selectedRole || !agreedToTerms}
          >
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
          </Button>
        </>
      )}
    </form>
  );
};
