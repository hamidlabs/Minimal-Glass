'use client'

import { useState, useRef } from 'react'
import { Product } from '@/types/product'
import Image from 'next/image'
import { ZoomIn, ZoomOut } from 'lucide-react'

export default function CollectionImage({ product }: { product: Product }) {
	const [isZoomed, setIsZoomed] = useState(false)
	const [position, setPosition] = useState({ x: 50, y: 50 })
	const imageRef = useRef<HTMLDivElement>(null)

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isZoomed || !imageRef.current) return
		
		const rect = imageRef.current.getBoundingClientRect()
		const x = ((e.clientX - rect.left) / rect.width) * 100
		const y = ((e.clientY - rect.top) / rect.height) * 100
		setPosition({ x, y })
	}

	const toggleZoom = () => {
		setIsZoomed(!isZoomed)
		setPosition({ x: 50, y: 50 })
	}

	return (
		<div className="relative bg-accent p-20 h-fit">
			<div 
				ref={imageRef}
				className="relative aspect-square overflow-hidden cursor-zoom-in"
				onMouseMove={handleMouseMove}
				onClick={toggleZoom}
			>
				<Image
					src={product.image}
					alt={product.name}
					fill
					className="object-cover transition-transform duration-300"
					style={{
						transform: `scale(${isZoomed ? 2.5 : 1})`,
						transformOrigin: `${position.x}% ${position.y}%`
					}}
				/>
				
				<button
					onClick={(e) => {
						e.stopPropagation()
						toggleZoom()
					}}
					className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
				>
					{isZoomed ? <ZoomOut className="w-5 h-5 text-white" /> : <ZoomIn className="w-5 h-5 text-white" />}
				</button>
			</div>

			<p className="absolute left-1/2 transform -translate-x-1/2 text-sm tracking-wider text-white mt-4">
				1 — 1
			</p>
		</div>
	)
}
