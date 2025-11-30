export type UserRole = "customer" | "executor" | "company" | "guest";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Session {
  user: AuthUser;
  expires: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role: UserRole;
  companyName?: string;
  inn?: string;
  tariff?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  bio?: string;
  rating?: number;
  completedOrders?: number;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  avatar?: string;
  bio?: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
  confirmPassword: string;
}

export type AuthStatus = "authenticated" | "unauthenticated" | "loading";

export interface AuthState {
  status: AuthStatus;
  user: AuthUser | null;
}

export type Permission =
  | "view_orders"
  | "create_orders"
  | "manage_orders"
  | "view_profile"
  | "edit_profile";

export interface RolePermissions {
  customer: Permission[];
  executor: Permission[];
  company: Permission[];
  guest: Permission[];
}

export type { UserRole as OrderUserRole, UserRole as HeroFinderUserRole } from "./user.types";
