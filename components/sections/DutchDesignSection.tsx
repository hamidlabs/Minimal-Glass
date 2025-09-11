export default function DutchDesignSection() {
	return (
		<section className="bg-[#4D4D4D] px-6 md:px-20 py-16 md:py-24">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center justify-between">
					{/* Left - Section Label with decorative line */}
					<div className="flex items-center mb-6 md:mb-0 md:col-span-4">
						<div className="w-8 md:w-12 h-px bg-[#F0E6E2] mr-3 md:mr-4"></div>
						<div className="text-xs md:text-sm text-[#F0E6E2] tracking-widest font-light">
							Design
						</div>
					</div>

					{/* Center and Right - Main Content Row */}
					<div className="md:col-span-8">
						<div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-8">
							{/* Left - Dutch Design Heading */}
							<div>
								<h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F0E6E2] font-[Gifilka] leading-tight tracking-wide">
									Dutch
									<br />
									Design
								</h2>
							</div>

							{/* Right - Hand made in Belgium */}
							<div className="mt-6 md:mt-20">
								<h3 className="text-xl sm:text-2xl font-light text-[#F0E6E2] font-[Gifilka] leading-tight tracking-wide">
									Hand made
									<br />
									in Belgium
								</h3>
							</div>
						</div>

						{/* Description Text */}
						<div className="space-y-4 text-[#F0E6E2] text-sm md:text-base leading-relaxed max-w-3xl">
							<p>
								Dutch Design by Bas Coppelmans combined with the hard work and
								pride of our Belgian steelworkers. The best of both worlds,
								because what's good doesn't have to come from far away. Bas,
								Chief Studio Design, always seeks the perfect balance in
								minimalism and works unconventionally during his design process.
								Dutch Design by Bas Coppelmans combined with the hard work and
								pride of our Belgian steelworkers. The best of both worlds,
								because what's good doesn't have to come from far away. Bas,
								Chief Studio Design, always seeks the perfect balance in
								minimalism and works unconventionally during his design process.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
