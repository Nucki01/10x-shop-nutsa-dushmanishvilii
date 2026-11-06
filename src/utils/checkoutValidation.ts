import type { ShippingInfo } from '../types/order'

// Error messages for each of the 4 Checkout fields
export interface CheckoutErrors {
  fullName?: string
  email?: string
  address?: string
  city?: string
}

// Simple validation function for the Checkout form (PRD Section P5.2 exact error strings):
// - Full name: at least 3 characters -> "Full name must be at least 3 characters"
// - Email: valid email format -> "Please enter a valid email address"
// - Address: at least 5 characters -> "Address must be at least 5 characters"
// - City: required -> "City is required"
export function validateCheckoutForm(values: ShippingInfo): CheckoutErrors {
  const errors: CheckoutErrors = {}

  if (values.fullName.trim().length < 3) {
    errors.fullName = 'Full name must be at least 3 characters'
  }

  if (!values.email.includes('@') || !values.email.includes('.')) {
    errors.email = 'Please enter a valid email address'
  }

  if (values.address.trim().length < 5) {
    errors.address = 'Address must be at least 5 characters'
  }

  if (!values.city.trim()) {
    errors.city = 'City is required'
  }

  return errors
}
