'use client'
import { useProductStore } from '@/store/product-store'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SingleProductPage() {
	const params = useParams()
	const slug = params.slug
	const { fetchProducts, products, isLoading } = useProductStore()

	useEffect(() => {
		fetchProducts()
	}, [])

	console.log(slug)

	const product = products.find(product => product.slug === slug)

	if (isLoading) return <div>Loading...</div>
	if (!product) return <div>Product not found</div>

	return (
		<div>
			{product.name}
			<img src={product.image} alt={product.name} />
			<p>{product.description}</p>
			<p>{product.price}</p>
			<p>{product.collection}</p>
			<p>{product.productType}</p>
			<p>{product.color}</p>
			<p>{product.applications}</p>
			<p>{product.inStock}</p>
		</div>
	)
}
