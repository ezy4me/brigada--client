import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Role } from "@/features/role-selector/ui/RoleSelector";

import {
  baseUserSchema,
  companySchema,
  customerSchema,
  executorSchema,
} from "./validation-schemas";

export type RegisterFormFields = {
  email: string;
  password: string;
  confirmPassword: string;
  companyName?: string;
  inn?: string;
  tariff?: string;
};

export const useRegisterForm = (
  onSubmit: (data: RegisterFormFields, role: Role) => Promise<void>
) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const getValidationSchema = () => {
    switch (selectedRole) {
      case "companies":
        return companySchema;
      case "customers":
        return customerSchema;
      case "executors":
        return executorSchema;
      default:
        return baseUserSchema;
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(getValidationSchema()),
    mode: "onChange",
  });

  const handleRoleChange = (role: Role) => {
    setSelectedRole(role);
    setServerError(null);
    reset();
  };

  const onFormSubmit = async (data: RegisterFormFields) => {
    if (!selectedRole) return;

    setIsLoading(true);
    setServerError(null);

    try {
      await onSubmit(data, selectedRole);
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Произошла ошибка при регистрации");
    } finally {
      setIsLoading(false);
    }
  };

  const setFormValue = (name: keyof RegisterFormFields, value: any) => {
    setValue(name, value, { shouldValidate: true });
  };

  return {
    selectedRole,
    isLoading,
    serverError,
    errors,
    register,
    handleSubmit: handleSubmit(onFormSubmit),
    handleRoleChange,
    setFormValue,
    watch,
    trigger,
  };
};
