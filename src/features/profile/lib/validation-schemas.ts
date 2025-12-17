// features/profile/lib/validation-schemas.ts
import { z } from "zod";

// Функция для безопасного получения preferedContact
export const safePreferedContact = (value: unknown): "email" | "phone" | "t.me" | "whatsapp" => {
  const allowed = ["email", "phone", "t.me", "whatsapp"] as const;
  if (typeof value === "string" && allowed.includes(value as any)) {
    return value as (typeof allowed)[number];
  }
  return "email";
};

// Схема для customer/performer профилей
export const customerPerformerProfileSchema = z.object({
  surname: z.string().min(1, "Фамилия обязательна").max(100, "Фамилия слишком длинная").trim(),

  name: z.string().min(1, "Имя обязательно").max(100, "Имя слишком длинное").trim(),

  patronymic: z.string().max(100, "Отчество слишком длинное").trim().optional().or(z.literal("")),

  phone: z
    .string()
    .min(1, "Телефон обязателен")
    .regex(/^\+7\d{10}$/, "Телефон должен быть в формате +7XXXXXXXXXX")
    .trim(),

  preferedContact: z.enum(["email", "phone", "t.me", "whatsapp"]),

  specializationId: z
    .string()
    .uuid("ID специализации должен быть в формате UUID")
    .optional()
    .or(z.literal("")),
});

export type CustomerPerformerProfileFormData = z.infer<typeof customerPerformerProfileSchema>;

// Схема для company профиля
export const companyProfileSchema = z.object({
  name: z
    .string()
    .min(1, "Название компании обязательно")
    .max(200, "Название компании слишком длинное")
    .trim(),

  shortName: z
    .string()
    .max(100, "Краткое название слишком длинное")
    .trim()
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .min(1, "Телефон обязателен")
    .regex(/^\+7\d{10}$/, "Телефон должен быть в формате +7XXXXXXXXXX")
    .trim(),

  address: z.string().min(1, "Адрес обязателен").max(500, "Адрес слишком длинный").trim(),

  inn: z
    .string()
    .min(1, "ИНН обязателен")
    .regex(/^\d{10}$/, "ИНН должен содержать 10 цифр")
    .trim(),

  ogrn: z
    .string()
    .regex(/^\d{13}$/, "ОГРН должен содержать 13 цифр")
    .trim()
    .optional()
    .or(z.literal("")),

  ogrnip: z
    .string()
    .regex(/^\d{15}$/, "ОГРНИП должен содержать 15 цифр")
    .trim()
    .optional()
    .or(z.literal("")),

  representativeFullName: z
    .string()
    .min(1, "ФИО представителя обязательно")
    .max(200, "ФИО представителя слишком длинное")
    .trim(),

  representativePhone: z
    .string()
    .min(1, "Телефон представителя обязателен")
    .regex(/^\+7\d{10}$/, "Телефон должен быть в формате +7XXXXXXXXXX")
    .trim(),

  preferedContact: z.enum(["email", "phone", "t.me", "whatsapp"]),
});

export type CompanyProfileFormData = z.infer<typeof companyProfileSchema>;
