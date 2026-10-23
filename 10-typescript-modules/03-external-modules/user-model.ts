export interface User {
  id: number;
  name: string;
  active: boolean;
}

export type UserRole =
  | "admin"
  | "user"
  | "guest";

export const defaultRole:
  UserRole =
  "user";
