'use client'
import { useProductStore } from '@/store/product-store'
import { useEffect } from 'react'
import CollectionHeader from './CollectionHeader'
import ProductContainer from './ProductContainer'

export default function ProductCollection() {
	const {
		filteredProducts,
		filters,
		sortBy,
		isLoading,
		setFilters,
		setSortBy,
		clearFilters,
		fetchProducts,
	} = useProductStore()

	useEffect(() => {
		fetchProducts()
	}, [fetchProducts])

	const handleSortChange = (value: string) => {
		setSortBy(value as any)
	}

	const getActiveFiltersCount = () => {
		return Object.values(filters).reduce((count, value) => {
			if (Array.isArray(value)) return count + value.length
			return value ? count + 1 : count
		}, 0)
	}

	const showActiveFilters = getActiveFiltersCount() > 0

	const getActiveFilterTags = () => {
		const tags: Array<{ label: string; onRemove: () => void }> = []

		filters.productTypes?.forEach(type => {
			tags.push({
				label: type,
				onRemove: () =>
					setFilters({
						...filters,
						productTypes: filters.productTypes?.filter(t => t !== type),
					}),
			})
		})

		filters.collections?.forEach(collection => {
			tags.push({
				label: collection,
				onRemove: () =>
					setFilters({
						...filters,
						collections: filters.collections?.filter(c => c !== collection),
					}),
			})
		})

		filters.applications?.forEach(app => {
			tags.push({
				label: app,
				onRemove: () =>
					setFilters({
						...filters,
						applications: filters.applications?.filter(a => a !== app),
					}),
			})
		})

		filters.colors?.forEach(color => {
			tags.push({
				label: color,
				onRemove: () =>
					setFilters({
						...filters,
						colors: filters.colors?.filter(c => c !== color),
					}),
			})
		})

		return tags
	}

	return (
		<section className="bg-background relative">
			<div className="container mx-auto px-4 py-16 md:py-24">
				<CollectionHeader
					productCount={filteredProducts.length}
					sortBy={sortBy}
					onSortChange={handleSortChange}
					activeFilterTags={getActiveFilterTags()}
					onClearFilters={clearFilters}
					showActiveFilters={showActiveFilters}
				/>

				<ProductContainer
					products={filteredProducts}
					isLoading={isLoading}
				/>
			</div>
		</section>
	)
}
