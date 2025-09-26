'use client'

import { Product } from '@/types/product'
import CardWrapper from '../cardwrapper'

export default function ProductDetails({ product }: { product: Product }) {
	if (!product) return <div>Product not found</div>

	return (
		<CardWrapper>
			<div className="bg-background py-12">
				{/* Product Information */}
				<section>
					<h2 className="text-xl font-semibold mb-4">Product information</h2>
					<p className="text-ternary leading-relaxed">{product.description}</p>
				</section>

				{/* Technical specifications + Model */}
				<div className="grid md:grid-cols-2 mt-12">
					{/* Technical specifications */}
					<div className="bg-background border-t">
						<div className="mt-6">
							<h3 className="text-lg font-semibold mb-4">
								Technical specifications
							</h3>
							<div className="space-y-3 text-gray-300">
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Collection</div>
									<div>{product.collection}</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Color Name</div>
									<div>{product.color}</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Weave</div>
									<div>
										{product.specifications?.weave || product.glassType?.type}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Width</div>
									<div>{product.dimensions?.width} MM</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Weight</div>
									<div>
										{product.specifications?.weight ||
											product.glassType?.thickness}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Minimal Size</div>
									<div>
										{product.specifications?.minimalSize ||
											product.dimensions?.standardSizes?.[2]}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Maximal Size</div>
									<div>
										{product.specifications?.maximalSize ||
											product.dimensions?.standardSizes?.[0]}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Pricing</div>
									<div>
										{product.specifications?.pricing || `€${product.price}`}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Shipping</div>
									<div>
										{product.specifications?.shipping || product.deliveryTime}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Certification</div>
									<div>
										{product.specifications?.certification ||
											`VAT ${(product.vatRate || 0) * 100}%`}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Model */}
					<div className="bg-background border-t">
						<div className="mt-6">
							<h3 className="text-lg font-semibold mb-4">Model</h3>
							<div className="space-y-4 text-gray-300">
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Application</div>
									<div>
										{product.model?.application ||
											product.applications.join(', ')}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">Usage</div>
									<div>
										{product.model?.usage || 'Not recommended for outdoor use'}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="font-medium text-gray-400">
										Cleaning &amp; Care
									</div>
									<div>
										{product.model?.cleaningCare ||
											'Soft and Dry methods - Avoid scratching and applying weight - Use of chemicals not recommended as it may damage the surface of the glass'}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CardWrapper>
	)
}
