// nextauth.d.ts
import NextAuth, { DefaultSession } from "next-auth";


interface IUser extends DefaultUser {
  /**
   * Roles del usuario
   */
  roles?: string[];
  /**
   * Agregar cualquier otro campo que tu manejas
   */
}

declare module "next-auth" {
  interface User extends IUser {}

  interface Session {
    user: {
      id: string;
      name:string;
      email: string;
      emailVerified?: boolean;
      role: string;
      image?: string;
      isActive: boolean
    } & DefaultSession['user']
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}