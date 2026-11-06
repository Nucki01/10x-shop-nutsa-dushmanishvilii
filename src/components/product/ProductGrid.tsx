import type { Product } from '../../types/product'
import { ProductCard } from './ProductCard'

// Props for ProductGrid (CORE Step 8 & P2.3)
interface ProductGridProps {
  products: Product[]
}

// ProductGrid Component
// Uses .map() to render a ProductCard for each product in a responsive Tailwind grid:
// - Mobile: 1 column (grid-cols-1)
// - Tablet: 2 columns (sm:grid-cols-2)
// - Desktop: 4 columns (lg:grid-cols-4)
export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
