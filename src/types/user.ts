// src/types/user.ts
// TypeScript types for our simple local Login state (CORE Step 3).

export interface AuthUser {
  username: string
  isLoggedIn: boolean
}

export interface LoginFormValues {
  username: string
  password: string
}
