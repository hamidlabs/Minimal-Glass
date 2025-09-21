'use client'
import React, { useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import ProductCollection from '@/components/collection/ProductCollection'
import { useProductStore } from '@/store/product-store'

export default function CollectionPage() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()
	const { filters, setFilters, setSortBy } = useProductStore()

	useEffect(() => {
		const params = new URLSearchParams(searchParams)
		const urlFilters: any = {}

		if (params.get('productTypes')) {
			urlFilters.productTypes = params.get('productTypes')?.split(',')
		}
		if (params.get('collections')) {
			urlFilters.collections = params.get('collections')?.split(',')
		}
		if (params.get('applications')) {
			urlFilters.applications = params.get('applications')?.split(',')
		}
		if (params.get('colors')) {
			urlFilters.colors = params.get('colors')?.split(',')
		}
		if (params.get('search')) {
			urlFilters.search = params.get('search')
		}

		if (Object.keys(urlFilters).length > 0) {
			setFilters(urlFilters)
		}

		if (params.get('sort')) {
			setSortBy(params.get('sort') as any)
		}
	}, [searchParams, setFilters, setSortBy])

	useEffect(() => {
		const params = new URLSearchParams()

		if (filters.productTypes?.length) {
			params.set('productTypes', filters.productTypes.join(','))
		}
		if (filters.collections?.length) {
			params.set('collections', filters.collections.join(','))
		}
		if (filters.applications?.length) {
			params.set('applications', filters.applications.join(','))
		}
		if (filters.colors?.length) {
			params.set('colors', filters.colors.join(','))
		}
		if (filters.search) {
			params.set('search', filters.search)
		}

		const newUrl = params.toString()
			? `${pathname}?${params.toString()}`
			: pathname
		router.replace(newUrl, { scroll: false })
	}, [filters, pathname, router])

	return (
		<div>
			<Navbar />
			<ProductCollection />
		</div>
	)
}
