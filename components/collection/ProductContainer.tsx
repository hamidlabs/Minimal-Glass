'use client'

import ProductCard from './ProductCard'

interface Product {
	id: string
	name: string
	price: number
	image: string
	collection: string
	color: string
	applications: string[]
	inStock: boolean
}

interface ProductContainerProps {
	products: Product[]
	isLoading?: boolean
	onCardClick?: (productId: string) => void
}

export default function ProductContainer({
	products,
	isLoading = false,
	onCardClick,
}: ProductContainerProps) {
	if (isLoading) {
		return (
			<div className="text-center py-12">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
				<p className="mt-4 text-gray-600">Loading products...</p>
			</div>
		)
	}

	if (products.length === 0) {
		return (
			<div className="col-span-full text-center py-12">
				<h3 className="text-xl font-medium text-gray-500 mb-2">
					No products found
				</h3>
				<p className="text-gray-400">
					Try adjusting your filters to see more products
				</p>
			</div>
		)
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					onCardClick={onCardClick}
				/>
			))}
		</div>
	)
}