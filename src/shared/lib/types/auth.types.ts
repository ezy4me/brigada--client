export type Role = "customer" | "executor" | "company";

export interface BaseFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CustomerFormData extends BaseFormData {}

export interface ExecutorFormData extends BaseFormData {}

export interface CompanyFormData extends BaseFormData {
  companyName: string;
  inn: string;
  tariff: string;
}

export type FormData = CustomerFormData | ExecutorFormData | CompanyFormData;
