// src/features/auth/lib/use-register-form.ts
"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Role } from "@/features/role-selector/ui/RoleSelector";

import { BaseUserData, CompanyData, getRoleSchema } from "./validation-schemas";

// Объединяем типы
export type RegisterFormFields = BaseUserData & Partial<CompanyData>;

export const useRegisterForm = (
  onSubmit: (data: RegisterFormFields, role: string) => Promise<void>
) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Конвертируем Role в строку для API (performer вместо executor)
  const roleString =
    selectedRole === "companies"
      ? "company"
      : selectedRole === "customers"
        ? "customer"
        : selectedRole === "executors"
          ? "performer"
          : null;

  const schema = roleString ? getRoleSchema(roleString) : null;

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<RegisterFormFields>({
    resolver: schema ? zodResolver(schema) : undefined,
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      companyName: "",
      inn: "",
      tariff: "",
    },
  });

  const handleRoleChange = (role: Role) => {
    setSelectedRole(role);
    setServerError(null);

    // Сбрасываем специфичные для роли поля
    const currentValues = watch();
    reset({
      ...currentValues,
      companyName: "",
      inn: "",
      tariff: "",
    });
  };

  const setFormValue = (name: keyof RegisterFormFields, value: any) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleFormSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    if (!selectedRole || !roleString) {
      setServerError("Пожалуйста, выберите роль");
      return;
    }

    setIsLoading(true);
    setServerError(null);

    try {
      await onSubmit(data, roleString);
    } catch (error: any) {
      setServerError(error.message || "Ошибка регистрации");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    selectedRole,
    isLoading,
    serverError,
    errors,
    register,
    handleSubmit: rhfHandleSubmit(handleFormSubmit),
    handleRoleChange,
    setFormValue,
    watch,
  };
};
