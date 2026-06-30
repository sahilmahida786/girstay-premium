export interface User {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  avatarUrl: string | null;
  role: UserRole;
  isVerified: boolean;
  createdAt: string;
}

export type UserRole =
  | "super_admin"
  | "owner"
  | "manager"
  | "staff"
  | "customer";

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}
