'use client'

import { Product } from '@/types/product'
import {
	ZoomIn,
	ZoomOut,
	ChevronLeft,
	ChevronRight,
	ArrowLeft,
	ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function CollectionImage({ product }: { product: Product }) {
	const [isZoomed, setIsZoomed] = useState(false)
	const [position, setPosition] = useState({ x: 50, y: 50 })
	const [currentImage, setCurrentImage] = useState(0)
	const imageRef = useRef<HTMLDivElement>(null)

	// Mock multiple images - replace with actual product images array
	const images = [product.image, product.image, product.image]

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

	const nextImage = () => {
		setCurrentImage(prev => (prev + 1) % images.length)
	}

	const prevImage = () => {
		setCurrentImage(prev => (prev - 1 + images.length) % images.length)
	}

	return (
		<div className="relative bg-accent p-4 md:p-20 h-fit max-w-[90vw] ">
			<div
				ref={imageRef}
				className="relative aspect-square overflow-hidden cursor-zoom-in"
				onMouseMove={handleMouseMove}
				onClick={toggleZoom}
			>
				<Image
					src={images[currentImage]}
					alt={product.name}
					fill
					className="object-cover transition-transform duration-300"
					style={{
						transform: `scale(${isZoomed ? 2.5 : 1})`,
						transformOrigin: `${position.x}% ${position.y}%`,
					}}
				/>

				<button
					onClick={e => {
						e.stopPropagation()
						toggleZoom()
					}}
					className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
				>
					{isZoomed ? (
						<ZoomOut className="w-5 h-5 text-white" />
					) : (
						<ZoomIn className="w-5 h-5 text-white" />
					)}
				</button>
			</div>

			{/* Navigation Arrows - Outside image container */}
			<button
				onClick={e => {
					e.stopPropagation()
					prevImage()
				}}
				className="absolute left-10 top-1/2 -translate-y-1/2 p-4 bg-ternary/20 backdrop-blur-xl rounded-full hover:bg-ternary/80 transition-colors z-50"
			>
				<ArrowLeft className="w-6 h-6 text-white" />
			</button>

			<button
				onClick={e => {
					e.stopPropagation()
					nextImage()
				}}
				className="absolute right-10 top-1/2 -translate-y-1/2 p-4 bg-ternary/20 backdrop-blur-xl rounded-full hover:bg-ternary/80 transition-colors z-50"
			>
				<ArrowRight className="w-6 h-6 text-white" />
			</button>

			<p className="absolute left-1/2 transform -translate-x-1/2 text-sm tracking-wider text-white mt-4">
				{currentImage + 1} — {images.length}
			</p>
		</div>
	)
}
