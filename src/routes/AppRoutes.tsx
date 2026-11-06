import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { CatalogPage } from '../pages/CatalogPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { LoginPage } from '../pages/LoginPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProtectedRoute } from './ProtectedRoute'

// Application Route Map (PRD Section A1.2, P0.1 & P0.2)
// - Public routes: /, /login, /products/:id, /cart, *
// - Protected route: /checkout (wrapped in <ProtectedRoute> so guests go to /login first)
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
