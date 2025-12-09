export interface User {
  id: string; 
  email: string;
  name?: string; 
  role: 'executor' | 'customer' | 'company';
  avatar?: string;
  phone?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string; 
  expiresIn: number;
}

export interface RegisterRequest {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  role: 'executor' | 'customer' | 'company';
  phone?: string;
  agree_to_terms: boolean;
}

export interface RegisterResponse {
  message: string;
  user: User;
  accessToken?: string;
  expiresIn?: number;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}