import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useConfiguratorStore } from '@/store/configurator-store'
import { Product } from '@/types/product'
import { Calculator, ChevronDown, Clock, Truck } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ProductInfoProps {
	product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
	const {
		configuration,
		configurationOptions,
		isCalculating,
		initializeConfiguration,
		updateDimensions,
		updateGlassType,
		updateGlassTreatment,
		updateMesh,
	} = useConfiguratorStore()

	const [showPriceBreakdown, setShowPriceBreakdown] = useState(false)

	useEffect(() => {
		initializeConfiguration(product)
	}, [product, initializeConfiguration])

	const getCurrentGlassType = () => {
		return configurationOptions.glassTypes.find(
			gt => gt.value === configuration?.selections.glassType.type,
		)
	}

	const getAvailableColors = () => {
		const currentGlassType = getCurrentGlassType()
		return currentGlassType ? currentGlassType.colors : []
	}

	const getAvailableThicknesses = () => {
		const currentGlassType = getCurrentGlassType()
		return currentGlassType ? currentGlassType.thicknesses : []
	}

	const isConfigurationComplex = () => {
		if (!configuration) return false

		const complexFactors = {
			// Custom shape requires drawing
			hasCustomShape: configuration.selections.dimensions.shape === 'Custom',

			// Large format glass requires drawing
			isLargeFormat: configuration.selections.dimensions.width > 3000 || configuration.selections.dimensions.height > 2500,

			// Premium glass types often need detailed specs
			isPremiumGlass: ['Designer glass', 'Acoustic glass', 'Low-E glass'].includes(configuration.selections.glassType.type),

			// Custom cutouts always require drawing
			hasCustomCutouts: configuration.selections.glassTreatment.cutOuts === 'Custom cutouts',

			// Multiple premium finishes combined
			hasMultiplePremiumFinishes: [
				configuration.selections.glassTreatment.glassFinishing !== 'Standard',
				configuration.selections.glassTreatment.polishing !== 'Standard',
				configuration.selections.glassTreatment.cornerFinishing !== 'Standard',
				configuration.selections.glassTreatment.sideFinishing !== 'Standard'
			].filter(Boolean).length >= 2
		}

		// Show dimensional drawing if any complex factor is true
		return Object.values(complexFactors).some(factor => factor)
	}

	const formatPrice = (price: number) => {
		return price.toLocaleString('en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
	}

	if (!configuration) {
		return (
			<div className="flex items-center justify-center p-8 text-gray-500">
				Loading configurator...
			</div>
		)
	}

	return (
		<div className="space-y-6 text-ternary">
			{/* Header */}
			<div className="flex items-center justify-between">
				<h1 className="text-3xl font-light tracking-wide font-gifilka">
					{product.name}
				</h1>
				<span className="text-xs text-white/55">
					{product.inStock ? 'In Stock' : 'Out of Stock'}
				</span>
			</div>

			<div className="space-y-2">
				<p className="text-xs text-white/55 tracking-wider flex items-center gap-3">
					BASE PRICE EUR
					<span className="text-ternary">
						{formatPrice(configuration.basePrice)}
					</span>
				</p>
				{isCalculating ? (
					<div className="flex items-center gap-2 text-sm text-blue-400">
						<Calculator className="w-4 h-4 animate-pulse" />
						Calculating price...
					</div>
				) : (
					<div className="space-y-1">
						<p className="text-lg font-medium text-ternary flex items-center gap-2">
							TOTAL: €{formatPrice(configuration.totalPrice)}
							<button
								onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
								className="text-xs text-gray-400 hover:text-white transition-colors"
							>
								{showPriceBreakdown ? 'Hide' : 'Show'} breakdown
							</button>
						</p>
						{showPriceBreakdown && (
							<div className="text-xs text-gray-400 space-y-1 bg-black/20 p-3 rounded">
								<div className="flex justify-between">
									<span>Base Price:</span>
									<span>€{formatPrice(configuration.basePrice)}</span>
								</div>
								<div className="flex justify-between">
									<span>Configuration Adjustments:</span>
									<span>
										€{formatPrice(configuration.totalPrice - configuration.basePrice)}
									</span>
								</div>
								<div className="flex justify-between">
									<span>Subtotal:</span>
									<span>€{formatPrice(configuration.totalPrice)}</span>
								</div>
								<div className="flex justify-between">
									<span>
										VAT ({Math.round((product.vatRate || 0.21) * 100)}%):
									</span>
									<span>€{formatPrice(configuration.vatAmount)}</span>
								</div>
								<div className="flex justify-between font-medium border-t border-gray-600 pt-1">
									<span>Final Price:</span>
									<span>€{formatPrice(configuration.finalPrice)}</span>
								</div>
							</div>
						)}
					</div>
				)}
			</div>

			{/* Action Buttons */}
			<div className="flex gap-3">
				<Button variant="outline" size="sm">
					Product information
				</Button>
				<Button variant="white" size="sm">
					Order Sample
				</Button>
			</div>

			{/* Configurator Sections */}
			<div className="space-y-0">
				{/* Dimensions */}
				<div className="border-b border-gray-800">
					<Accordion type="single" collapsible>
						<AccordionItem value="dimensions" className="border-none">
							<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
								Dimensions
							</AccordionTrigger>
							<AccordionContent className="pb-4 space-y-4 bg-accent/30">
								<div className="space-y-4">
									{/* Shape Selection */}
									<div>
										<label className="text-xs text-primary mb-2 block">
											Shape
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
												value={configuration.selections.dimensions.shape}
												onChange={e => updateDimensions({ shape: e.target.value as 'Square' | 'Rectangle' | 'Custom' })}
											>
												{configurationOptions.dimensionShapes.map(shape => {
													const modifier = shape.pricingRule.modifier
													const priceEffect = modifier === 0 ? '' : ` (+${(modifier * 100).toFixed(0)}%)`
													return (
														<option
															key={shape.value}
															value={shape.value}
															className="bg-gray-800"
														>
															{shape.label}{priceEffect}
														</option>
													)
												})}
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
									</div>

									{/* Width & Height Input */}
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="text-xs text-primary block mb-1">
												Width (MM)
											</label>
											<Input
												type="number"
												variant="bottom-border"
												value={configuration.selections.dimensions.width}
												onChange={e => updateDimensions({ width: parseInt(e.target.value) || 0 })}
												min={500}
												max={5000}
												placeholder="Enter width"
											/>
										</div>
										<div>
											<label className="text-xs text-primary block mb-1">
												Height (MM)
											</label>
											<Input
												type="number"
												variant="bottom-border"
												value={configuration.selections.dimensions.height}
												onChange={e => updateDimensions({ height: parseInt(e.target.value) || 0 })}
												min={500}
												max={5000}
												placeholder="Enter height"
											/>
										</div>
									</div>

									{/* Size Info */}
									<div className="flex items-center gap-6 text-sm text-gray-300">
										<span>
											Area: {((configuration.selections.dimensions.width * configuration.selections.dimensions.height) / 1000000).toFixed(2)} m²
										</span>
										<span>
											Ratio: {(configuration.selections.dimensions.width / configuration.selections.dimensions.height).toFixed(2)}:1
										</span>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				{/* Glass Type */}
				<div className="border-b border-gray-800">
					<Accordion type="single" collapsible>
						<AccordionItem value="glass-type" className="border-none">
							<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
								Glass Type
							</AccordionTrigger>
							<AccordionContent className="pb-4 space-y-4 bg-accent/30">
								<div>
									<label className="text-xs text-primary mb-2 block">
										Type
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassType.type}
											onChange={e => {
												const newGlassType = configurationOptions.glassTypes.find(gt => gt.value === e.target.value)
												if (newGlassType) {
													updateGlassType({
														type: e.target.value,
														color: newGlassType.colors[0],
														thickness: newGlassType.thicknesses[0]
													})
												}
											}}
										>
											{configurationOptions.glassTypes.map(type => {
												const modifier = type.pricingRule.modifier
												const priceEffect = modifier === 0 ? '' : ` (+${(modifier * 100).toFixed(0)}%)`
												return (
													<option
														key={type.value}
														value={type.value}
														className="bg-gray-800"
													>
														{type.label}{priceEffect}
													</option>
												)
											})}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>

								<div>
									<label className="text-xs text-primary mb-2 block">
										Color
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassType.color}
											onChange={e => updateGlassType({ color: e.target.value })}
										>
											{getAvailableColors().map(color => (
												<option
													key={color}
													value={color}
													className="bg-gray-800"
												>
													{color}
												</option>
											))}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>

								<div>
									<label className="text-xs text-primary mb-2 block">
										Thickness
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassType.thickness}
											onChange={e => updateGlassType({ thickness: e.target.value })}
										>
											{getAvailableThicknesses().map(thickness => (
												<option
													key={thickness}
													value={thickness}
													className="bg-gray-800"
												>
													{thickness}
												</option>
											))}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				{/* Glass Treatment */}
				<div className="border-b border-gray-800">
					<Accordion type="single" collapsible>
						<AccordionItem value="glass-treatment" className="border-none">
							<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
								Glass Treatment
							</AccordionTrigger>
							<AccordionContent className="pb-4 space-y-4 bg-accent/30">
								{/* Glass Finishing */}
								<div>
									<label className="text-xs text-primary mb-2 block">
										Glass Finishing
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassTreatment.glassFinishing}
											onChange={e => updateGlassTreatment({ glassFinishing: e.target.value })}
										>
											{configurationOptions.glassTreatmentOptions.glassFinishing.map(finishing => {
												const modifier = finishing.pricingRule.modifier
												const priceEffect = modifier === 0 ? '' : ` (+${(modifier * 100).toFixed(0)}%)`
												return (
													<option
														key={finishing.value}
														value={finishing.value}
														className="bg-gray-800"
													>
														{finishing.label}{priceEffect}
													</option>
												)
											})}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>

								{/* Polishing */}
								<div>
									<label className="text-xs text-primary mb-2 block">
										Polishing
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassTreatment.polishing}
											onChange={e => updateGlassTreatment({ polishing: e.target.value })}
										>
											{configurationOptions.glassTreatmentOptions.polishing.map(polishing => {
												const modifier = polishing.pricingRule.modifier
												const priceEffect = modifier === 0 ? '' : ` (+${(modifier * 100).toFixed(0)}%)`
												return (
													<option
														key={polishing.value}
														value={polishing.value}
														className="bg-gray-800"
													>
														{polishing.label}{priceEffect}
													</option>
												)
											})}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>

								{/* Corner Finishing */}
								<div>
									<label className="text-xs text-primary mb-2 block">
										Corner Finishing
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassTreatment.cornerFinishing}
											onChange={e => updateGlassTreatment({ cornerFinishing: e.target.value })}
										>
											{configurationOptions.glassTreatmentOptions.cornerFinishing.map(corner => {
												const modifier = corner.pricingRule.modifier
												const priceEffect = modifier === 0 ? '' : ` (+${(modifier * 100).toFixed(0)}%)`
												return (
													<option
														key={corner.value}
														value={corner.value}
														className="bg-gray-800"
													>
														{corner.label}{priceEffect}
													</option>
												)
											})}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>

								{/* Side Finishing */}
								<div>
									<label className="text-xs text-primary mb-2 block">
										Side Finishing
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassTreatment.sideFinishing}
											onChange={e => updateGlassTreatment({ sideFinishing: e.target.value })}
										>
											{configurationOptions.glassTreatmentOptions.sideFinishing.map(side => {
												const modifier = side.pricingRule.modifier
												const priceEffect = modifier === 0 ? '' : ` (+${(modifier * 100).toFixed(0)}%)`
												return (
													<option
														key={side.value}
														value={side.value}
														className="bg-gray-800"
													>
														{side.label}{priceEffect}
													</option>
												)
											})}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>

								{/* Cut-outs */}
								<div>
									<label className="text-xs text-primary mb-2 block">
										Cut-outs
									</label>
									<div className="relative">
										<select
											className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
											value={configuration.selections.glassTreatment.cutOuts}
											onChange={e => updateGlassTreatment({ cutOuts: e.target.value })}
										>
											{configurationOptions.glassTreatmentOptions.cutOuts.map(cutOut => {
												const baseAddition = cutOut.pricingRule.baseAddition
												const priceEffect = baseAddition ? ` (+€${baseAddition})` : ''
												return (
													<option
														key={cutOut.value}
														value={cutOut.value}
														className="bg-gray-800"
													>
														{cutOut.label}{priceEffect}
													</option>
												)
											})}
										</select>
										<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				{/* Mesh - Only show for products with mesh */}
				{product.mesh && product.mesh.material !== 'None' && (
					<div className="border-b border-gray-800">
						<Accordion type="single" collapsible>
							<AccordionItem value="mesh" className="border-none">
								<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
									Mesh
								</AccordionTrigger>
								<AccordionContent className="pb-4 space-y-4 bg-accent/30">
									{/* Mesh Color */}
									<div>
										<label className="text-xs text-primary mb-2 block">
											Colour
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
												value={configuration.selections.mesh?.color || 'Silver'}
												onChange={e => updateMesh({ color: e.target.value })}
											>
												{configurationOptions.meshOptions.colors.map(color => (
													<option
														key={color}
														value={color}
														className="bg-gray-800"
													>
														{color}
													</option>
												))}
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
									</div>

									{/* Mesh Direction */}
									<div>
										<label className="text-xs text-primary mb-2 block">
											Mesh Direction
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-3 py-2 text-sm text-white placeholder:text-gray-400 appearance-none pr-10 focus:outline-none focus:border-gray-400 transition-colors"
												value={configuration.selections.mesh?.direction || 'Vertical'}
												onChange={e => updateMesh({ direction: e.target.value })}
											>
												{configurationOptions.meshOptions.directions.map(direction => (
													<option
														key={direction}
														value={direction}
														className="bg-gray-800"
													>
														{direction}
													</option>
												))}
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				)}

				{/* Dimensional Drawing - Only show for complex configurations */}
				{isConfigurationComplex() && (
					<div className="border-b border-gray-800">
						<Accordion type="single" collapsible>
							<AccordionItem
								value="dimensional-drawing"
								className="border-none"
							>
								<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
									Dimensional Drawing
								</AccordionTrigger>
								<AccordionContent className="pb-4 bg-accent/30">
									<div className="space-y-4">
										<p className="text-sm text-gray-300 leading-relaxed">
											Due to the complexity of your configuration, we need a dimensional drawing to ensure precise manufacturing. This may include custom dimensions, premium materials, or specialized treatments that require detailed specifications.
										</p>
										<p className="text-xs text-yellow-400">
											Final pricing will be confirmed after reviewing your drawing. Any adjustments will be communicated before production.
										</p>

										<div className="relative">
											<div className="flex items-center gap-3 p-3 border-0 border-b border-gray-600 bg-transparent">
												<div className="text-gray-400">
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
														/>
													</svg>
												</div>
												<Input
													type="text"
													variant="bottom-border"
													placeholder="Upload drawing file"
													className="flex-1 border-0 p-0"
													readOnly
												/>
												<Button
													variant="outline"
													size="sm"
													className="rounded-full text-xs px-4 py-1 border-gray-600 hover:bg-gray-800"
												>
													Browse
												</Button>
											</div>
											<p className="text-xs text-gray-500 mt-2">
												Select a JPG, JPEG, PNG, PDF, DWG, or DXF file
											</p>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				)}
			</div>

			{/* Pricing */}
			<div className="text-right space-y-2 pt-6">
				<div className="space-y-1">
					<p className="text-xs text-gray-400">Excl. VAT & delivery costs</p>
					<p className="text-4xl font-light text-ternary">
						€{formatPrice(configuration.totalPrice)}
					</p>
					<p className="text-xs text-gray-400">
						{Math.round((product.vatRate || 0.21) * 100)}% VAT: €{formatPrice(configuration.vatAmount)}
					</p>
				</div>

				<div className="text-sm text-gray-300 border-t border-gray-700 pt-2">
					<p className="font-medium">
						Final Price: €{formatPrice(configuration.finalPrice)}
					</p>
				</div>

				<div className="flex items-center justify-end gap-2 text-xs text-gray-400">
					<Truck className="w-3 h-3" />
					<span>Free delivery over €1000</span>
				</div>

				<div className="flex items-center justify-end gap-2 text-xs text-gray-400">
					<Clock className="w-3 h-3" />
					<span>Made to order in {product.deliveryTime || '30 working days'}</span>
				</div>
			</div>

			{/* Add to Cart Button */}
			<Button className="w-full rounded-full bg-white text-black hover:bg-gray-200 py-3 font-medium">
				Add to Cart - €{formatPrice(configuration.finalPrice)}
			</Button>

			{/* Summary Info */}
			<div className="text-xs text-gray-400 text-center space-y-1">
				<p>Est. delivery: {product.deliveryTime || '30 working days'}</p>
			</div>
		</div>
	)
}