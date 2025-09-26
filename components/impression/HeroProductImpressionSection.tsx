'use client'

import type { CarouselApi } from '@/components/ui/carousel'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'

export default function HeroProductImpression({ isMenuOpen = false }) {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) return
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)
		api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
	}, [api])

	return (
		<section className="relative min-h-[50vh] bg-background pt-0 sm:pt-0">
			{/* Contact Info - FIXED FOR MOBILE */}
			<div
				className={`absolute top-24 left-4  right-4 md:top-8 md:left-24 text-xs sm:text-sm z-20 transition-opacity duration-300 ${
					isMenuOpen ? 'md:opacity-0 pointer-events-none' : 'opacity-100'
				}`}
			>
				{/* Mobile Layout - Stacked and Visible */}
				<div className="sm:hidden flex gap-5">
					<div className=" font-medium">
						NL: <span className="text-primary">31 (0)164220795</span>
					</div>
					<div className="text-white font-medium">
						BE: <span className="text-primary">+32 (0)164 99 777</span>
					</div>
				</div>

				{/* Desktop Layout - Side by side */}
				<div className="hidden sm:flex justify-between md:justify-start md:gap-10 md:p-20">
					<div className="">
						NL: <span className="text-primary">31 (0)164220795</span>
					</div>
					<div className="">
						BE: <span className="text-primary">+32 (0)164 99 777</span>
					</div>
				</div>
			</div>

			<Carousel className="h-full" setApi={setApi}>
				<CarouselContent>
					{[1, 2, 3].map(slide => (
						<CarouselItem key={slide}>
							<div
								className={`flex items-center justify-center min-h-[500px] sm:min-h-[700px] mt-24 md:mt-0 `}
							>
								<div className="container mx-auto">
									<div className="text-left bg-secondary relative sm:ml-38 md:mt-20">
										{/* Mobile Layout */}
										<div className="flex flex-col justify-center items-center sm:hidden px-4 py-8">
											<div className="text-center w-full max-w-sm">
												<div className="text-lg font-light text-ternary mb-4 leading-tight flex items-center gap-3 flex-col">
													<h1 className="font-gifilka text-ternary text-lg md:text-3xl mb-4 sm:mb-7">
														Product Impression
													</h1>
													<div className="w-16 sm:w-20 h-0.5 ml-0 sm:ml-12"></div>
												</div>

												{/* Paragraph */}
												<div className="w-full sm:w-[300px] sm:ml-24 mt-6 sm:mt-0">
													<p className="text-tertiary mb-6 text-sm leading-relaxed">
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit, sed do eiusmod tempor incididunt ut labore et
														dolore magna aliqua.
													</p>
												</div>

												{/* Mobile Navigation - ENHANCED */}
												<div className="flex items-center justify-center space-x-3 mb-6">
													<button
														onClick={() =>
															api?.scrollTo(
																current === 1 ? count - 1 : current - 2,
															)
														}
														className="text-3xl font-bold text-tertiary hover:text-primary transition-colors cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
													>
														{current}
													</button>
													<div className="w-12 h-0.5 bg-tertiary drop-shadow-sm"></div>
													<button
														onClick={() =>
															api?.scrollTo(current === count ? 0 : current)
														}
														className="text-3xl font-bold transition-colors  text-ternary hover:text-primary cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
													>
														{count}
													</button>
												</div>
											</div>
										</div>

										{/* Desktop Layout (unchanged) */}
										<div className="hidden sm:flex items-center p-10 h-[400px]">
											<div>
												<div className="w-[300px] ml-24">
													{/* Heading + Line */}
													<div className="mb-6 sm:mb-0 sm:absolute sm:top-[20%] sm:-left-[50px]">
														<h1 className="font-gifilka text-ternary text-lg md:text-4xl mb-4 sm:mb-7">
															Product Impression
														</h1>
														<div className="w-16 sm:w-20 h-0.5  ml-0 sm:ml-12"></div>
													</div>

													{/* Paragraph */}
													<div className="w-full sm:w-[300px] sm:ml-24 mt-6 sm:mt-0">
														<p className=" mb-8 text-sm font-normal leading-relaxed max-w-md">
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
													{/* Desktop Navigation */}
													<div className="absolute bottom-20 right-24 flex items-center space-x-2 ">
														<button
															onClick={() =>
																api?.scrollTo(
																	current === 1 ? count - 1 : current - 2,
																)
															}
															className=" hover:text-primary transition-colors cursor-pointer"
														>
															{current}
														</button>
														<div className="w-8 h-0.5 bg-gray-400"></div>
														<button
															onClick={() =>
																api?.scrollTo(current === count ? 0 : current)
															}
															className=" hover:text-primary transition-colors cursor-pointer"
														>
															{count}
														</button>
													</div>

													{/* Desktop Circle */}
													<div className="flex items-center justify-center absolute -top-[25px] -left-[25px]">
														<div className="h-[400px] w-[400px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/20"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
