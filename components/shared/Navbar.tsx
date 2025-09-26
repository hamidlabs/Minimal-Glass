'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import { ShoppingCart, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import CardWrapper from '../cardwrapper'
interface ProductCardProps {
	product: Product
	onCardClick?: (productId: string) => void
}
export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className="relative">
			<header
				className={cn(
					'bg-background border-b border-gray-800 fixed top-0 left-0 right-0 z-50',
					isMenuOpen ? 'bg-[#F0E6E2] text-black' : '',
				)}
			>
				<CardWrapper>
					<div className="flex items-center justify-between">
						{/* Left Navigation (hidden on mobile) */}
						<nav className="hidden md:flex items-center space-x-8">
							<Link
								href="/"
								className={cn(
									'transition-colors text-sm font-medium',
									pathname === '/'
										? 'text-primary'
										: 'text-ternary hover:text-primary',
								)}
							>
								MINIMAL GLASS
							</Link>

							<Link
								href="/collection"
								className={cn(
									'transition-colors text-sm font-medium',
									pathname === '/collection'
										? 'text-primary'
										: 'text-ternary hover:text-primary',
								)}
							>
								COLLECTION
							</Link>
						</nav>
						{/* Center Logo */}
						<div
							className={cn(
								'text-xl sm:text-2xl font-bold text-primary',
								isMenuOpen ? 'text-black' : '',
							)}
						>
							<Image
								src="/brand/navbar-logo.png"
								alt="logo"
								height={50}
								width={50}
							/>
						</div>

						{/* Right Icons */}

						<div className="flex items-center space-x-2 sm:space-x-4">
							<Button
								variant="ghost"
								size="icon"
								className={cn(
									'text-gray-300 hover:text-white',
									isMenuOpen ? 'text-black hover:text-black' : '',
								)}
							>
								<User className="h-5 w-5" />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								className={cn(
									'text-gray-300 hover:text-white',
									isMenuOpen ? 'text-black hover:text-black' : '',
								)}
							>
								<ShoppingCart className="h-5 w-5" />
							</Button>

							{/* Toggle Button */}
							<Button
								variant="ghost"
								size="icon"
								className={cn(
									'text-gray-300 hover:text-white',
									isMenuOpen ? 'text-black hover:text-black' : '',
								)}
								onClick={toggleMenu}
							>
								{isMenuOpen ? (
									<X className="h-5 w-5" />
								) : (
									<div className="flex flex-col space-y-1">
										<div className="w-5 h-0.5 bg-current"></div>
										<div className="w-5 h-0.5 bg-current"></div>
									</div>
								)}
							</Button>
						</div>
					</div>
				</CardWrapper>

				{/* Floating Mobile / Desktop Menu */}
				<div
					className={cn(
						'absolute left-0 right-0 top-full bg-[#F0E6E2] text-gray-900 border-t border-gray-300 shadow-lg overflow-hidden transition-all duration-500 ease-in-out',
						isMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
					)}
				>
					<div className="container mx-auto px-4 py-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
							{/* Section 1 */}
							<nav className="flex flex-col  text-2xl font-light font-[Gifilka] text-primary md:text-3xl leading-relaxed sm:space-y-2">
								<a
									href="/"
									className="text-primary hover:underline transition-colors py-1"
								>
									Home
								</a>
								<a
									href="/impression"
									className="text-primary hover:underline transition-colors py-1"
								>
									Discover
								</a>
								<a
									href="/collection"
									className="text-primary hover:underline transition-colors py-1"
								>
									Collection
								</a>
								<a
									href="about"
									className="text-primary hover:underline transition-colors py-1"
								>
									About us
								</a>
							</nav>

							{/* Section 2 */}
							<div>
								<h3 className="text-sm font-medium mb-3 flex items-center ">
									Popular models
								</h3>

								<ul className="space-y-2 sm:space-y-3 text-sm text-secondary">
									{[
										'model-no-01',
										'model-no-50',
										'model-no-73',
										'model-no-67',
										'model-no-85',
										'model-no-91',
									].map(product => {
										const slug = product.toLowerCase().replace(/\s+/g, '-')
										return (
											<li key={product}>
												<Link
													href={`/collection/${slug}`}
													className="hover:text-primary"
												>
													{product}
												</Link>
											</li>
										)
									})}
								</ul>
							</div>

							{/* Section 3 */}
							<div>
								<h3 className="text-sm font-medium mb-3 flex items-center">
									Customer service
								</h3>
								<ul className="space-y-2 sm:space-y-3 text-sm text-secondary">
									{[
										'Contact us',
										'FAQ',
										'Order process',
										'Payment & shipment',
										'Warranty',
										'Become a dealer',
										'Request a quote',
									].map(item => (
										<li key={item}>
											<a href="/customerservice" className="hover:text-primary">
												{item}
											</a>
										</li>
									))}
								</ul>
							</div>

							{/* Section 4 */}
							<div>
								<ul className=" text-sm text-secondary space-y-2 sm:space-y-3">
									<li>
										<Link className="text-sm text-secondary" href="/privacy">
											Privacy statement
										</Link>
									</li>

									<li>
										<a href="#" className="hover:text-primary">
											General terms and conditions
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        {" "}
        <Button
          onClick={toggleMenu}
          className="w-20 h-20 rounded-full bg-gray-600 text-white shadow-lg flex flex-col items-center justify-center"
        >
          {" "}
          <Image
            src="/brand/navbar-logo.png"
            alt="menu"
            width={30}
            height={30}
          />{" "}
          <span className="text-sm font-semibold ">MENU</span>{" "}
        </Button>{" "}
      </div> */}
		</div>
	)
}
