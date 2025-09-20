'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { useProductStore } from '@/store/product-store'
import {
	Application,
	Collection,
	Color,
	ProductFilters as FiltersType,
	ProductType,
} from '@/types/product'
import { ListFilter, X } from 'lucide-react'
import { useState } from 'react'

interface FilterGroupProps {
	title: string
	options: readonly string[]
	selectedValues: string[]
	onToggle: (value: string) => void
}

const FilterGroup = ({
	title,
	options,
	selectedValues,
	onToggle,
}: FilterGroupProps) => (
	<div className="space-y-3">
		<h3 className="font-medium text-sm text-gray-700">{title}</h3>
		<div className="flex flex-wrap gap-2">
			{options.map(option => {
				const isSelected = selectedValues.includes(option)
				return (
					<Badge
						key={option}
						variant={isSelected ? 'default' : 'outline'}
						className={`cursor-pointer transition-colors text-black ${
							isSelected
								? 'bg-black text-white hover:bg-gray-800'
								: 'hover:bg-gray-100'
						}`}
						onClick={() => onToggle(option)}
					>
						{option}
						{isSelected && <X className="ml-1 h-3 w-3" />}
					</Badge>
				)
			})}
		</div>
	</div>
)

export default function ProductFilters() {
	const [isOpen, setIsOpen] = useState(false)
	const { filters, setFilters, clearFilters } = useProductStore()

	const productTypes: readonly ProductType[] = ['Glass', 'Mesh', 'Fabric']
	const collections: readonly Collection[] = ['Essential', 'Exlusive']
	const applications: readonly Application[] = [
		'Wall covering',
		'Window threatments',
		'Glass partitions',
	]
	const colors: readonly Color[] = [
		'Silver White',
		'Pearl Black',
		'Cardinal Red',
		'Gold Mist',
		'Inca Silver',
		'Ebony',
	]

	const handleFilterChange = (filterType: keyof FiltersType, value: string) => {
		const currentValues = (filters[filterType] as string[]) || []
		const newValues = currentValues.includes(value)
			? currentValues.filter(v => v !== value)
			: [...currentValues, value]

		setFilters({
			...filters,
			[filterType]: newValues.length > 0 ? newValues : undefined,
		})
	}

	const handleClearFilters = () => {
		clearFilters()
	}

	const hasActiveFilters = Object.values(filters).some(value =>
		Array.isArray(value) ? value.length > 0 : Boolean(value),
	)

	const activeFilterCount = Object.values(filters).reduce((count, value) => {
		if (Array.isArray(value)) return count + value.length
		return value ? count + 1 : count
	}, 0)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" className="relative border-none">
					<ListFilter className="mr-2 h-4 w-4" />
					Filters
					{activeFilterCount > 0 && (
						<Badge
							variant="destructive"
							className="ml-2 h-5 w-5 rounded-full p-0 text-xs"
						>
							{activeFilterCount}
						</Badge>
					)}
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="w-[400px] sm:w-[540px] bg-ternary pl-6"
			>
				<SheetHeader className="space-y-0">
					<div className="flex items-center justify-between">
						<SheetTitle className="text-black">Filters</SheetTitle>
						<div className="flex items-center space-x-2">
							{hasActiveFilters && (
								<Button
									variant="ghost"
									size="sm"
									onClick={handleClearFilters}
									className="text-black hover:text-gray-700"
								>
									Clear filters
								</Button>
							)}
							<SheetClose asChild>
								<Button
									variant="ghost"
									size="sm"
									className="text-black hover:text-gray-700 flex items-center"
								>
									Close
									<X className="ml-1 h-4 w-4" />
								</Button>
							</SheetClose>
						</div>
					</div>
				</SheetHeader>

				<div className="mt-6 space-y-6">
					<FilterGroup
						title="Product type"
						options={productTypes}
						selectedValues={filters.productTypes || []}
						onToggle={value => handleFilterChange('productTypes', value)}
					/>

					<Separator />

					<FilterGroup
						title="Collection"
						options={collections}
						selectedValues={filters.collections || []}
						onToggle={value => handleFilterChange('collections', value)}
					/>

					<Separator />

					<FilterGroup
						title="Applications"
						options={applications}
						selectedValues={filters.applications || []}
						onToggle={value => handleFilterChange('applications', value)}
					/>

					<Separator />

					<FilterGroup
						title="Color"
						options={colors}
						selectedValues={filters.colors || []}
						onToggle={value => handleFilterChange('colors', value)}
					/>
				</div>

				<div className="absolute bottom-0 left-0 right-0 p-6 bg-ternary border-t">
					<Button
						className="w-full bg-amber-700 hover:bg-amber-800 text-white"
						onClick={() => setIsOpen(false)}
					>
						Apply filters
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	)
}
