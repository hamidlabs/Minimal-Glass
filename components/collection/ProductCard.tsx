'use client'

import { Badge } from '@/components/ui/badge'
import { Heart } from 'lucide-react'
import Image from 'next/image'

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

interface ProductCardProps {
	product: Product
	onFavoriteClick?: (productId: string) => void
	isFavorited?: boolean
}

export default function ProductCard({
	product,
	onFavoriteClick,
	isFavorited = false,
}: ProductCardProps) {
	const handleFavoriteClick = () => {
		onFavoriteClick?.(product.id)
	}

	return (
		<div className="group bg-accent rounded-none overflow-hidden transition-transform duration-300 hover:-translate-y-2 p-5">
			{/* Product Image Container */}
			<div className="relative h-80 overflow-hidden">
				{/* Product Info Header */}
				<div className="flex justify-between items-center">
					<h3 className="text-xs text-ternary font-medium">
						{product.name}
					</h3>
					<span className="text-[#F0E6E299] text-xs">
						€{product.price}
					</span>
				</div>

				{/* Product Image */}
				<div className="relative w-[200px] h-full mx-auto mt-5">
					<Image
						src={product.image}
						alt={product.name}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-300"
					/>

					{/* Overlay for better text visibility */}
					<div className="absolute inset-0 bg-black/20"></div>

					{/* Stock Status Badge */}
					{!product.inStock && (
						<div className="absolute top-2 right-2">
							<Badge variant="destructive" className="text-xs">
								Out of Stock
							</Badge>
						</div>
					)}
				</div>
			</div>

			{/* Product Details Footer */}
			<div className="flex items-center justify-between">
				<div>
					<div className="flex items-center gap-2 mt-5 font-medium text-[#F0E6E299] z-10">
						{product.collection}
						<div>
							<span>|</span>
							<span className="ml-2 text-[#F0E6E2]">
								{product.color}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-1 mt-1 text-xs text-[#F0E6E299]">
						{product.applications.map((app, idx) => (
							<span key={idx}>
								{app}
								{idx < product.applications.length - 1 && ', '}
							</span>
						))}
					</div>
				</div>

				<div>
					<Heart
						className={`mt-5 cursor-pointer transition-colors ${
							isFavorited
								? 'fill-red-500 text-red-500'
								: 'hover:fill-red-500 hover:text-red-500'
						}`}
						onClick={handleFavoriteClick}
					/>
				</div>
			</div>
		</div>
	)
}
