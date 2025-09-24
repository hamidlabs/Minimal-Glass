import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
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
		updateAdditionalServices,
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
										€
										{formatPrice(
											configuration.totalPrice - configuration.basePrice,
										)}
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

			{/* Accordions */}
			<div className="space-y-0">
				{/* Dimensions */}
				{product.dimensions && (
					<div>
						<Accordion type="single" collapsible>
							<AccordionItem value="dimensions" className="border-none">
								<AccordionTrigger className="text-ternary text-lg hover:no-underline bg-accent/30">
									Dimensions
								</AccordionTrigger>
								<AccordionContent className="pb-4 bg-accent/30">
									<div className="space-y-3">
										<div className="relative">
											<select
												className="w-full text-ternary border-b border-gray-600 rounded px-3 py-2 text-sm appearance-none pr-10 focus:outline-none focus:border-gray-400"
												value={`${configuration.selections.dimensions.width}x${configuration.selections.dimensions.height}`}
												onChange={e => {
													const [width, height] = e.target.value
														.split('x')
														.map(Number)
													updateDimensions({ width, height })
												}}
											>
												{configurationOptions.dimensionPricing.standardSizes.map(
													sizeOption => {
														const size = parseInt(sizeOption.size)
														const modifier = sizeOption.modifier
														const priceEffect =
															modifier === 0
																? ''
																: modifier > 0
																? ` (+${(modifier * 100).toFixed(0)}%)`
																: ` (${(modifier * 100).toFixed(0)}%)`
														return (
															<option
																key={sizeOption.size}
																value={`${size}x${Math.round(size * 0.75)}`}
																className="bg-gray-800"
															>
																{sizeOption.size} x {Math.round(size * 0.75)} MM
																{priceEffect}
															</option>
														)
													},
												)}
												<option value="custom" className="bg-gray-800">
													Custom Dimensions
												</option>
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
										<div className="space-y-3">
											<div className="flex items-center gap-6">
												<div className="flex items-center gap-2">
													<div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
														<span className="text-xs">📐</span>
													</div>
													<span className="text-sm">
														Width: {configuration.selections.dimensions.width}{' '}
														MM
													</span>
												</div>
												<div className="flex items-center gap-2">
													<div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
														<span className="text-xs">📏</span>
													</div>
													<span className="text-sm">
														Height: {configuration.selections.dimensions.height}{' '}
														MM
													</span>
												</div>
											</div>

											{/* Custom Dimension Inputs */}
											{configuration.selections.dimensions.customDimensions && (
												<div className="grid grid-cols-2 gap-4">
													<div>
														<label className="text-xs text-gray-400 block mb-1">
															Custom Width (MM)
														</label>
														<input
															type="number"
															className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white"
															value={
																configuration.selections.dimensions
																	.customDimensions.width
															}
															onChange={e =>
																updateDimensions({
																	customDimensions: {
																		...configuration.selections.dimensions
																			.customDimensions,
																		width: parseInt(e.target.value),
																	},
																})
															}
														/>
													</div>
													<div>
														<label className="text-xs text-gray-400 block mb-1">
															Custom Height (MM)
														</label>
														<input
															type="number"
															className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white"
															value={
																configuration.selections.dimensions
																	.customDimensions.height
															}
															onChange={e =>
																updateDimensions({
																	customDimensions: {
																		...configuration.selections.dimensions
																			.customDimensions,
																		height: parseInt(e.target.value),
																	},
																})
															}
														/>
													</div>
												</div>
											)}
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				)}

				{/* Glass Type */}
				{product.glassType && (
					<div className="border-b border-gray-800">
						<Accordion type="single" collapsible>
							<AccordionItem value="glass-type" className="border-none">
								<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
									Glass type
								</AccordionTrigger>
								<AccordionContent className="pb-4 space-y-4">
									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Type
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={configuration.selections.glassType.type}
												onChange={e => {
													const newGlassType =
														configurationOptions.glassTypes.find(
															gt => gt.value === e.target.value,
														)
													if (newGlassType) {
														updateGlassType({
															type: e.target.value,
															color: newGlassType.colors[0],
															thickness: newGlassType.thicknesses[0],
														})
													}
												}}
											>
												{configurationOptions.glassTypes.map(type => {
													const modifier = type.pricingRule.modifier
													const priceEffect =
														modifier === 0
															? ''
															: ` (+${(modifier * 100).toFixed(0)}%)`
													return (
														<option
															key={type.value}
															value={type.value}
															className="bg-gray-800"
														>
															{type.label}
															{priceEffect}
														</option>
													)
												})}
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
											<span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
												Standard
											</span>
										</div>
									</div>

									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Color
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={configuration.selections.glassType.color}
												onChange={e =>
													updateGlassType({ color: e.target.value })
												}
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
											<span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
												Standard
											</span>
										</div>
									</div>

									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Thickness
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={configuration.selections.glassType.thickness}
												onChange={e =>
													updateGlassType({ thickness: e.target.value })
												}
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
											<span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
												Standard
											</span>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				)}

				{/* Glass Treatment */}
				{product.glasstreatment && (
					<div className="border-b border-gray-800">
						<Accordion type="single" collapsible>
							<AccordionItem value="glass-treatment" className="border-none">
								<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
									Glass treatment
								</AccordionTrigger>
								<AccordionContent className="pb-4 space-y-4">
									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Treatment Option
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={configuration.selections.glassTreatment.selected}
												onChange={e =>
													updateGlassTreatment({ selected: e.target.value })
												}
											>
												{configurationOptions.glassTreatments.map(treatment => {
													const modifier = treatment.pricingRule.modifier
													const baseAddition =
														treatment.pricingRule.baseAddition
													let priceEffect = ''
													if (modifier > 0)
														priceEffect = ` (+${(modifier * 100).toFixed(0)}%)`
													if (baseAddition)
														priceEffect += ` (+€${baseAddition})`
													return (
														<option
															key={treatment.value}
															value={treatment.value}
															className="bg-gray-800"
														>
															{treatment.label}
															{priceEffect}
														</option>
													)
												})}
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
											<span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
												Standard
											</span>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				)}

				{/* Mesh */}
				{product.mesh && product.mesh.material !== 'None' && (
					<div className="border-b border-gray-800">
						<Accordion type="single" collapsible>
							<AccordionItem value="mesh" className="border-none">
								<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
									Mesh
								</AccordionTrigger>
								<AccordionContent className="pb-4 space-y-4">
									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Material
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={
													configuration.selections.mesh?.material ||
													product.mesh?.material
												}
												onChange={e => updateMesh({ material: e.target.value })}
											>
												{configurationOptions.meshOptions.materials.map(
													material => {
														const modifier = material.pricingRule.modifier
														const priceEffect =
															modifier === 0
																? ''
																: ` (+${(modifier * 100).toFixed(0)}%)`
														return (
															<option
																key={material.value}
																value={material.value}
																className="bg-gray-800"
															>
																{material.label}
																{priceEffect}
															</option>
														)
													},
												)}
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
									</div>

									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Colour
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
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
											<span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
												Standard
											</span>
										</div>
									</div>

									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Mesh direction
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={
													configuration.selections.mesh?.pattern ||
													product.mesh?.pattern
												}
												onChange={e => updateMesh({ pattern: e.target.value })}
											>
												{configurationOptions.meshOptions.patterns.map(
													pattern => (
														<option
															key={pattern}
															value={pattern}
															className="bg-gray-800"
														>
															{pattern}
														</option>
													),
												)}
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
											<span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
												Standard
											</span>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				)}

				{/* Additional Services */}
				<div className="border-b border-gray-800">
					<Accordion type="single" collapsible>
						<AccordionItem value="additional-services" className="border-none">
							<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
								Additional Services
							</AccordionTrigger>
							<AccordionContent className="pb-4 space-y-4">
								<div className="grid grid-cols-1 gap-4">
									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Edge Finishing
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={
													configuration.selections.additionalServices
														?.polishing || 'Standard'
												}
												onChange={e =>
													updateAdditionalServices({
														polishing: e.target.value,
													})
												}
											>
												<option value="Standard" className="bg-gray-800">
													Standard
												</option>
												<option value="polished-edges" className="bg-gray-800">
													Polished Edges (+8%)
												</option>
												<option value="beveled-edges" className="bg-gray-800">
													Beveled Edges (+12%)
												</option>
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
									</div>

									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Corner Finishing
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={
													configuration.selections.additionalServices
														?.cornerFinishing || 'Standard'
												}
												onChange={e =>
													updateAdditionalServices({
														cornerFinishing: e.target.value,
													})
												}
											>
												<option value="Standard" className="bg-gray-800">
													Standard Corners
												</option>
												<option value="rounded-corners" className="bg-gray-800">
													Rounded Corners (+15%)
												</option>
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
									</div>

									<div>
										<label className="text-xs text-gray-400 mb-2 block">
											Custom Cutouts
										</label>
										<div className="relative">
											<select
												className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
												value={
													configuration.selections.additionalServices
														?.cutOuts || 'None'
												}
												onChange={e =>
													updateAdditionalServices({ cutOuts: e.target.value })
												}
											>
												<option value="None" className="bg-gray-800">
													No Cutouts
												</option>
												<option value="custom-cutouts" className="bg-gray-800">
													Custom Cutouts (+€75)
												</option>
											</select>
											<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
										</div>
									</div>

									<div className="flex items-center gap-3">
										<input
											type="checkbox"
											id="installation"
											checked={
												configuration.selections.additionalServices
													?.installation || false
											}
											onChange={e =>
												updateAdditionalServices({
													installation: e.target.checked,
												})
											}
											className="rounded border-gray-700 bg-transparent"
										/>
										<label
											htmlFor="installation"
											className="text-sm text-gray-300"
										>
											Professional Installation (+€200)
										</label>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				{/* Dimensional Drawing */}
				{product.dimensionalDrawing && product.dimensionalDrawing.available && (
					<div className="border-b border-gray-800">
						<Accordion type="single" collapsible>
							<AccordionItem
								value="dimensional-drawing"
								className="border-none"
							>
								<AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
									Dimensional drawing
								</AccordionTrigger>
								<AccordionContent className="pb-4">
									<div className="space-y-4">
										<p className="text-sm text-gray-300 leading-relaxed">
											Due to the complexity of your application, you need to
											upload a dimensional drawing. Based on this drawing, we
											will determine the final price. Any increase or decrease
											in price will be settled afterwards.
										</p>

										<div className="relative">
											<div className="flex items-center gap-3 p-3 border border-gray-700 rounded bg-transparent">
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
												<input
													type="text"
													placeholder="Field name"
													className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
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
						{Math.round((product.vatRate || 0.21) * 100)}% VAT: €
						{formatPrice(configuration.vatAmount)}
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
					<span>
						Made to order in {product.deliveryTime || '30 working days'}
					</span>
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
