export interface Product {
  id: string
  name: string
  price: number
  image: string
  productType: ProductType
  collection: Collection
  applications: Application[]
  color: Color
  description?: string
  inStock: boolean
}

export type ProductType = 'Glass' | 'Mesh' | 'Fabric'

export type Collection = 'Essential' | 'Exlusive'

export type Application = 'Wall covering' | 'Window threatments' | 'Glass partitions'

export type Color = 'Silver White' | 'Pearl Black' | 'Cardinal Red' | 'Gold Mist' | 'Inca Silver' | 'Ebony'

export interface ProductFilters {
  productTypes?: ProductType[]
  collections?: Collection[]
  applications?: Application[]
  colors?: Color[]
  search?: string
  priceRange?: {
    min: number
    max: number
  }
}

export type SortOption = 'newest' | 'oldest' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc'