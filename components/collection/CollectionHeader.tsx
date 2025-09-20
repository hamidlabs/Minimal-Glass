'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ArrowDownNarrowWide } from 'lucide-react'
import ProductFilters from './ProductFilters'

interface FilterTag {
	label: string
	onRemove: () => void
}

interface CollectionHeaderProps {
	productCount: number
	sortBy: string
	onSortChange: (value: string) => void
	activeFilterTags: FilterTag[]
	onClearFilters: () => void
	showActiveFilters: boolean
}

export default function CollectionHeader({
	productCount,
	sortBy,
	onSortChange,
	activeFilterTags,
	onClearFilters,
	showActiveFilters,
}: CollectionHeaderProps) {
	return (
		<div>
			{/* Main Header */}
			<div className="flex items-center justify-between font-gifilka text-4xl font-light">
				<h2>Collection</h2>
				<h2>{productCount} Products</h2>
			</div>

			{/* Filter and Sort Controls */}
			<div className="flex items-center justify-between mt-7">
				<ProductFilters />

				<Select value={sortBy} onValueChange={onSortChange}>
					<SelectTrigger className="w-[200px]">
						<ArrowDownNarrowWide className="mr-2 h-4 w-4" />
						Sort by
						<SelectValue
							placeholder="Sort by"
							className="text-muted-foreground"
						/>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="newest">Best selling</SelectItem>
						<SelectItem value="oldest">Oldest First</SelectItem>
						<SelectItem value="price-low">Price: Low to High</SelectItem>
						<SelectItem value="price-high">Price: High to Low</SelectItem>
						<SelectItem value="name-asc">Name: A to Z</SelectItem>
						<SelectItem value="name-desc">Name: Z to A</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="border mt-3" />

			{/* Active Filters Display */}
			{showActiveFilters && (
				<div className="mt-4 flex flex-wrap gap-2">
					{activeFilterTags.map((tag, index) => (
						<Badge
							key={index}
							variant="secondary"
							className="flex items-center gap-2 bg-black text-white hover:bg-gray-800"
						>
							{tag.label}
							<button
								onClick={tag.onRemove}
								className="hover:text-red-400 ml-1"
							>
								×
							</button>
						</Badge>
					))}

					<Button
						variant="ghost"
						size="sm"
						onClick={onClearFilters}
						className="text-sm text-gray-500 hover:text-gray-700 underline"
					>
						Clear all
					</Button>
				</div>
			)}
		</div>
	)
}