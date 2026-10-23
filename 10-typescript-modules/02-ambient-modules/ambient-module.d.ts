declare module "math-library" {
  export function add(
    a: number,
    b: number
  ): number;

  export function subtract(
    a: number,
    b: number
  ): number;
}

declare module "app-config" {
  export const appName: string;
  export const version: string;
  export const debug: boolean;
}

declare module "user-library" {
  export interface User {
    id: number;
    name: string;
    active: boolean;
  }

  export function getUser(
    id: number
  ): User;
}

declare module "status-library" {
  export type Status =
    | "idle"
    | "loading"
    | "success"
    | "error";

  export function getStatus(): Status;
}
