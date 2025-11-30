import { z } from "zod";

export const baseUserSchema = z
  .object({
    email: z.string().email("Email некорректен"),
    password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export const companySchema = baseUserSchema.safeExtend({
  companyName: z.string().min(1, "Наименование компании обязательно"),
  inn: z
    .string()
    .length(10, "ИНН должен состоять из 10 цифр")
    .regex(/^\d+$/, "ИНН должен содержать только цифры"),
  tariff: z.string().min(1, "Выберите тариф"),
});

export const loginSchema = z.object({
  email: z.string().email("Email некорректен"),
  password: z.string().min(1, "Пароль обязателен"),
});

export const customerSchema = baseUserSchema;
export const executorSchema = baseUserSchema;

export type LoginData = z.infer<typeof loginSchema>;
export type BaseUserData = z.infer<typeof baseUserSchema>;
export type CompanyData = z.infer<typeof companySchema>;
export type CustomerData = z.infer<typeof customerSchema>;
export type ExecutorData = z.infer<typeof executorSchema>;

export type RegisterFormData = BaseUserData | CompanyData | CustomerData | ExecutorData;
