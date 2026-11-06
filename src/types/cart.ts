// src/types/cart.ts
// TypeScript type for a single item inside the Shopping Cart (CORE Step 3).

export interface CartItem {
  productId: number
  title: string
  thumbnail: string
  price: number
  discountPercentage: number
  stock: number
  quantity: number
}
