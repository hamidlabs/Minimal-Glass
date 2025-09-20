import { Product, ProductFilters, SortOption } from '@/types/product'
import { create } from 'zustand'

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
		name: 'Model No.01',
		price: 905,
		image: '/products/Mask group.png',
		productType: 'Mesh',
		collection: 'Essential',
		applications: ['Wall covering', 'Glass partitions'],
		color: 'Silver White',
		description: 'Premium mesh panel for modern interiors',
		inStock: true,
	},
	{
		id: '2',
		name: 'Model No.73',
		price: 905,
		image: '/products/Mask group-1.png',
		productType: 'Mesh',
		collection: 'Essential',
		applications: ['Window threatments'],
		color: 'Inca Silver',
		description: 'Elegant silver mesh screen',
		inStock: true,
	},
	{
		id: '3',
		name: 'Model No.50',
		price: 1200,
		image: '/products/Mask group-2.png',
		productType: 'Glass',
		collection: 'Exlusive',
		applications: ['Wall covering'],
		color: 'Gold Mist',
		description: 'Luxury glass panel with golden finish',
		inStock: false,
	},
	{
		id: '4',
		name: 'Model No.85',
		price: 780,
		image: '/products/Mask group-3.png',
		productType: 'Mesh',
		collection: 'Essential',
		applications: ['Wall covering', 'Glass partitions'],
		color: 'Pearl Black',
		description: 'Dark mesh panel for contemporary spaces',
		inStock: true,
	},
	{
		id: '5',
		name: 'Model No.42',
		price: 1450,
		image: '/products/Mask group-4.png',
		productType: 'Glass',
		collection: 'Exlusive',
		applications: ['Window threatments', 'Glass partitions'],
		color: 'Cardinal Red',
		description: 'Premium red-tinted glass panel',
		inStock: true,
	},
	{
		id: '6',
		name: 'Model No.67',
		price: 650,
		image: '/products/Mask group-5.png',
		productType: 'Fabric',
		collection: 'Essential',
		applications: ['Wall covering'],
		color: 'Ebony',
		description: 'Dark fabric panel for wall applications',
		inStock: true,
	},
	{
		id: '7',
		name: 'Model No.91',
		price: 890,
		image: '/products/Mask group-6.png',
		productType: 'Mesh',
		collection: 'Essential',
		applications: ['Wall covering', 'Window threatments'],
		color: 'Silver White',
		description: 'Versatile white mesh panel',
		inStock: true,
	},
	{
		id: '8',
		name: 'Model No.28',
		price: 1680,
		image: '/products/Mask group-7.png',
		productType: 'Glass',
		collection: 'Exlusive',
		applications: ['Glass partitions'],
		color: 'Pearl Black',
		description: 'Premium black glass partition',
		inStock: false,
	},
	{
		id: '9',
		name: 'Model No.15',
		price: 520,
		image: '/products/Mask group-8.png',
		productType: 'Fabric',
		collection: 'Essential',
		applications: ['Wall covering'],
		color: 'Inca Silver',
		description: 'Silver fabric wall covering',
		inStock: true,
	},
	{
		id: '10',
		name: 'Model No.34',
		price: 1950,
		image: '/products/Mask group-9.png',
		productType: 'Glass',
		collection: 'Exlusive',
		applications: ['Wall covering', 'Glass partitions'],
		color: 'Gold Mist',
		description: 'Luxury gold glass for high-end applications',
		inStock: true,
	},
	{
		id: '11',
		name: 'Model No.56',
		price: 750,
		image: '/products/Mask group-10.png',
		productType: 'Mesh',
		collection: 'Essential',
		applications: ['Window threatments'],
		color: 'Cardinal Red',
		description: 'Red mesh for window applications',
		inStock: true,
	},
	{
		id: '12',
		name: 'Model No.78',
		price: 1320,
		image: '/products/Mask group-11.png',
		productType: 'Fabric',
		collection: 'Exlusive',
		applications: ['Wall covering'],
		color: 'Ebony',
		description: 'Premium ebony fabric panel',
		inStock: true,
	},
	{
		id: '13',
		name: 'Model No.92',
		price: 840,
		image: '/products/Mask group-12.png',
		productType: 'Mesh',
		collection: 'Essential',
		applications: ['Wall covering', 'Window threatments', 'Glass partitions'],
		color: 'Silver White',
		description: 'Multi-purpose silver mesh panel',
		inStock: true,
	},
]

export const useProductStore = create<ProductState>((set, get) => ({
	products: [],
	filteredProducts: [],
	filters: {},
	sortBy: 'newest',
	isLoading: false,

	setFilters: filters => {
		set({ filters })
		get().applyFiltersAndSort()
	},

	setSortBy: sortBy => {
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
				filters.productTypes!.includes(product.productType),
			)
		}

		if (filters.collections?.length) {
			filtered = filtered.filter(product =>
				filters.collections!.includes(product.collection),
			)
		}

		if (filters.applications?.length) {
			filtered = filtered.filter(product =>
				product.applications.some(app => filters.applications!.includes(app)),
			)
		}

		if (filters.colors?.length) {
			filtered = filtered.filter(product =>
				filters.colors!.includes(product.color),
			)
		}

		if (filters.search) {
			const searchLower = filters.search.toLowerCase()
			filtered = filtered.filter(
				product =>
					product.name.toLowerCase().includes(searchLower) ||
					product.description?.toLowerCase().includes(searchLower),
			)
		}

		if (filters.priceRange) {
			filtered = filtered.filter(
				product =>
					product.price >= filters.priceRange!.min &&
					product.price <= filters.priceRange!.max,
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
	},
}))
