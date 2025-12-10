export interface User {
  id: string;
  email: string;
  name?: string;
  role: "customer" | "performer" | "company";
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
  role: "customer" | "performer" | "company";
  companyName?: string;
  inn?: string;
}

export interface RegisterResponse {
  message: string;
  user?: User;
  accessToken?: string;
  expiresIn?: number;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}
