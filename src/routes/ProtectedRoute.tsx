import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// ProtectedRoute Component (PRD Step 6 & Section P0.2)
// Checks if the user is logged in via AuthContext:
// - If guest (`!user.isLoggedIn`), redirects to `/login` and remembers the current path (`state={{ from: location.pathname }}`)
//   so LoginPage can send the user right back to `/checkout` after signing in.
// - If logged in, renders the protected child page (`children`).
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}
