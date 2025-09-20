'use client'

import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
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
	onCardClick?: (productId: string) => void
}

export default function ProductCard({
	product,
	onCardClick,
}: ProductCardProps) {
	const handleCardClick = () => {
		onCardClick?.(product.id)
	}

	return (
		<div
			className="group bg-black rounded-none overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
			onClick={handleCardClick}
		>
			{/* Product Image */}
			<div className="relative aspect-square overflow-hidden">
				<Image
					src={product.image}
					alt={product.name}
					fill
					className="object-cover"
				/>
			</div>

			{/* Product Info Below Image */}
			<div className="p-6 bg-black">
				{/* Product Name */}
				<h3 className="font-gifilka text-3xl capitalize font-light text-white mb-2">
					{product.name}
				</h3>

				{/* Product Details */}
				<div className="flex items-center justify-between">
					<div>
						<p className="text-white/80 text-sm mb-1">
							{product.color} | {product.collection}
						</p>
						<p className="text-white font-medium text-lg">
							€{product.price.toFixed(2)} | {product.applications.length} COLORS
						</p>
					</div>

					{/* Arrow Button */}
					<Button
						size="icon"
						variant="arrow"
						className="group-hover:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					>
						<ArrowUpRight className="size-6" />
					</Button>
				</div>
			</div>
		</div>
	)
}
