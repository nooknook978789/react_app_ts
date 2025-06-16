import type { Product } from "./Product"

export interface HomeProps {
  isMember: boolean
  username?: string
  products?: Product[]
  onProductClick?: (productId: string) => void
}