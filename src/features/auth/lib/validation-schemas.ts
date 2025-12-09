import { z } from "zod";

export const baseUserSchema = z
  .object({
    email: z.string()
      .email("Введите корректный email")
      .min(1, "Email обязателен")
      .max(100, "Email слишком длинный")
      .toLowerCase()
      .trim(),
    
    password: z.string()
      .min(6, "Пароль должен быть не менее 6 символов")
      .max(50, "Пароль слишком длинный")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Пароль должен содержать хотя бы одну букву и одну цифру"
      )
      .trim(),
    
    confirmPassword: z.string()
      .min(1, "Подтверждение пароля обязательно")
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export const companySchema = baseUserSchema.omit({ confirmPassword: true }).extend({
  companyName: z.string()
    .min(1, "Наименование компании обязательно")
    .max(100, "Название компании слишком длинное")
    .trim(),
  
  inn: z.string()
    .length(10, "ИНН должен состоять из 10 цифр")
    .regex(/^\d+$/, "ИНН должен содержать только цифры")
    .transform((val) => val.trim()),
  
  tariff: z.string()
    .min(1, "Выберите тариф"),
    
  confirmPassword: z.string()
    .min(1, "Подтверждение пароля обязательно")
    .trim(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string()
    .email("Введите корректный email")
    .min(1, "Email обязателен")
    .max(100, "Email слишком длинный")
    .toLowerCase()
    .trim(),
  
  password: z.string()
    .min(1, "Пароль обязателен")
    .trim(),
});

export const customerSchema = baseUserSchema;
export const executorSchema = baseUserSchema;

export const forgotPasswordSchema = z.object({
  email: z.string()
    .email("Введите корректный email")
    .min(1, "Email обязателен")
    .toLowerCase()
    .trim(),
});

export const resetPasswordSchema = z
  .object({
    password: z.string()
      .min(6, "Пароль должен быть не менее 6 символов")
      .max(50, "Пароль слишком длинный")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Пароль должен содержать хотя бы одну букву и одну цифру"
      )
      .trim(),
    
    confirmPassword: z.string()
      .min(1, "Подтверждение пароля обязательно")
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export const updateProfileSchema = z.object({
  name: z.string()
    .min(1, "Имя обязательно")
    .max(50, "Имя слишком длинное")
    .trim()
    .optional(),
  
  phone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Введите корректный номер телефона")
    .optional()
    .or(z.literal('')),
  
  avatar: z.string().optional(),
});

export type LoginData = z.infer<typeof loginSchema>;
export type BaseUserData = z.infer<typeof baseUserSchema>;
export type CompanyData = z.infer<typeof companySchema>;
export type CustomerData = z.infer<typeof customerSchema>;
export type ExecutorData = z.infer<typeof executorSchema>;
export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
export type UpdateProfileData = z.infer<typeof updateProfileSchema>;

export type RegisterFormData = BaseUserData | CompanyData | CustomerData | ExecutorData;

export const getRoleSchema = (role: string) => {
  switch (role) {
    case 'company':
      return companySchema;
    case 'customer':
      return customerSchema;
    case 'executor':
      return executorSchema;
    default:
      return baseUserSchema;
  }
};

export const defaultLoginData: LoginData = {
  email: '',
  password: '',
};

export const defaultRegisterData: BaseUserData = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const defaultCompanyData: CompanyData = {
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  inn: '',
  tariff: '',
};