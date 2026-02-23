export type Role = "user" | "admin";

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  role: Role;
}

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  role: Role;
  updated_at: string;
}
