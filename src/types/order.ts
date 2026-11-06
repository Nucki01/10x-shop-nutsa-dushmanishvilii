// src/types/order.ts
// TypeScript type for the 4 required Checkout form fields (CORE Step 3 & Step 14).

export interface ShippingInfo {
  fullName: string
  email: string
  address: string
  city: string
}
