import { create } from 'zustand'
import { Product, ProductFilters, SortOption } from '@/types/product'

interface ProductState {
  products: Product[]
  filteredProducts: Product[]
  filters: ProductFilters
  sortBy: SortOption
  isLoading: boolean
  setFilters: (filters: ProductFilters) => void
  setSortBy: (sort: SortOption) => void
  clearFilters: () => void
  applyFiltersAndSort: () => void
  fetchProducts: () => Promise<void>
}

const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Essential Glass Panel',
    price: 299,
    image: '/images/glass-panel-1.jpg',
    productType: 'Glass',
    collection: 'Essential',
    applications: ['Wall covering', 'Glass partitions'],
    color: 'Silver White',
    description: 'Premium glass panel for modern interiors',
    inStock: true
  },
  {
    id: '2',
    name: 'Mesh Window Screen',
    price: 159,
    image: '/images/mesh-screen-1.jpg',
    productType: 'Mesh',
    collection: 'Essential',
    applications: ['Window threatments'],
    color: 'Pearl Black',
    description: 'Durable mesh screen for windows',
    inStock: true
  },
  {
    id: '3',
    name: 'Luxury Fabric Covering',
    price: 399,
    image: '/images/fabric-cover-1.jpg',
    productType: 'Fabric',
    collection: 'Exlusive',
    applications: ['Wall covering'],
    color: 'Cardinal Red',
    description: 'Premium fabric for wall applications',
    inStock: false
  },
  {
    id: '4',
    name: 'Gold Mist Glass',
    price: 449,
    image: '/images/glass-gold-1.jpg',
    productType: 'Glass',
    collection: 'Exlusive',
    applications: ['Wall covering', 'Glass partitions'],
    color: 'Gold Mist',
    description: 'Elegant gold tinted glass',
    inStock: true
  },
  {
    id: '5',
    name: 'Inca Silver Mesh',
    price: 199,
    image: '/images/mesh-silver-1.jpg',
    productType: 'Mesh',
    collection: 'Essential',
    applications: ['Window threatments', 'Glass partitions'],
    color: 'Inca Silver',
    description: 'Silver finished mesh material',
    inStock: true
  },
  {
    id: '6',
    name: 'Ebony Fabric Panel',
    price: 359,
    image: '/images/fabric-ebony-1.jpg',
    productType: 'Fabric',
    collection: 'Exlusive',
    applications: ['Wall covering'],
    color: 'Ebony',
    description: 'Dark ebony fabric panel',
    inStock: true
  }
]

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  filteredProducts: [],
  filters: {},
  sortBy: 'newest',
  isLoading: false,

  setFilters: (filters) => {
    set({ filters })
    get().applyFiltersAndSort()
  },

  setSortBy: (sortBy) => {
    set({ sortBy })
    get().applyFiltersAndSort()
  },

  clearFilters: () => {
    set({ filters: {} })
    get().applyFiltersAndSort()
  },

  applyFiltersAndSort: () => {
    const { products, filters, sortBy } = get()
    let filtered = [...products]

    if (filters.productTypes?.length) {
      filtered = filtered.filter(product =>
        filters.productTypes!.includes(product.productType)
      )
    }

    if (filters.collections?.length) {
      filtered = filtered.filter(product =>
        filters.collections!.includes(product.collection)
      )
    }

    if (filters.applications?.length) {
      filtered = filtered.filter(product =>
        product.applications.some(app => filters.applications!.includes(app))
      )
    }

    if (filters.colors?.length) {
      filtered = filtered.filter(product =>
        filters.colors!.includes(product.color)
      )
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower)
      )
    }

    if (filters.priceRange) {
      filtered = filtered.filter(product =>
        product.price >= filters.priceRange!.min &&
        product.price <= filters.priceRange!.max
      )
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'oldest':
        filtered.reverse()
        break
      case 'newest':
      default:
        break
    }

    set({ filteredProducts: filtered })
  },

  fetchProducts: async () => {
    set({ isLoading: true })

    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      set({ products: dummyProducts })
      get().applyFiltersAndSort()
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      set({ isLoading: false })
    }
  }
}))