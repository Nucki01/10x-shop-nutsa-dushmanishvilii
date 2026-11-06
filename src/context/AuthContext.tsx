import { createContext, useContext, useState, type ReactNode } from 'react'
import type { AuthUser } from '../types/user'

// What AuthContext shares with other components (CORE Step 5)
interface AuthContextType {
  user: AuthUser
  login: (username: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider holds the login state in React using useState
export function AuthProvider({ children }: { children: ReactNode }) {
  // By default, the user is a guest (not logged in)
  const [user, setUser] = useState<AuthUser>({
    username: '',
    isLoggedIn: false,
  })

  // Log in: save the username and set isLoggedIn to true
  function login(username: string) {
    setUser({
      username: username.trim(),
      isLoggedIn: true,
    })
  }

  // Log out: reset back to guest state
  function logout() {
    setUser({
      username: '',
      isLoggedIn: false,
    })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Helper hook so any component can easily read `user`, `login`, and `logout`
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
