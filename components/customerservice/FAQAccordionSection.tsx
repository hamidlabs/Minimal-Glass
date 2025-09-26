import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQAccordion = () => {
	// Pre-expand specific items to match the screenshot
	const [expandedItems, setExpandedItems] = useState(new Set([]))

	const faqSections = [
		{
			title: 'Order process',
			items: [
				{
					id: 1,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				},
				{
					id: 2,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 3,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				},
				{
					id: 4,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 5,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
			],
		},
		{
			title: 'Shipment & payment',
			items: [
				{
					id: 6,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 7,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 8,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				},
				{
					id: 9,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 10,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
			],
		},
		{
			title: 'Warranty information',
			items: [
				{
					id: 11,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 12,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 13,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				},
				{
					id: 14,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 15,
					question: 'This is a question',
					answer:
						'Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.',
				},
			],
		},
	]

	const toggleItem = id => {
		const newExpanded = new Set(expandedItems)
		if (newExpanded.has(id)) {
			newExpanded.delete(id)
		} else {
			newExpanded.add(id)
		}
		setExpandedItems(newExpanded)
	}

	return (
		<div className="min-h-[600px] bg-background  ">
			<div className="container mx-auto px-6 py-8 max-w-7xl space-y-0 ">
				{faqSections.map((section, sectionIndex) => (
					<div key={section.title} className="relative mb-10">
						{/* Consistent flex layout for all sections */}
						<div className="p-8 md:flex justify-center self-center items-start md:gap-9">
							{/* Section Header - Fixed width for alignment */}
							<div className="mb-8 md:mb-0 flex items-center gap-3 md:min-w-[250px]">
								<div className="w-16 h-px "></div>
								<h2 className="text-sm font-medium tracking-wider whitespace-nowrap">
									{section.title}
								</h2>
							</div>

							{/* FAQ Items - Consistent width */}
							<div className="space-y-0 flex-1 md:max-w-[800px] ">
								{section.items.map((item, index) => {
									const isExpanded = expandedItems.has(item.id)

									return (
										<div key={item.id} className="group">
											{/* Question Button */}
											<button
												onClick={() => toggleItem(item.id)}
												className="w-full py-5 text-left  transition-colors duration-200 flex items-center justify-between border-b border-[#333333] cursor-pointer"
											>
												<span className=" font-normal text-base">
													{item.question}
												</span>

												<div className="flex items-center space-x-4 align-center">
													{/* Plus/Minus icon */}
													<div className="w-8 h-8 bg-background rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
														{isExpanded ? (
															<Minus className="w-6 h-6 text-primary" />
														) : (
															<Plus className="w-6 h-6 text-primary" />
														)}
													</div>
												</div>
											</button>

											{/* Expandable Content */}
											<div
												className={`overflow-hidden transition-all duration-300 ease-in-out ${
													isExpanded
														? 'max-h-96 opacity-100'
														: 'max-h-0 opacity-0'
												}`}
											>
												<div className="py-5 border-b border-gray-700/30">
													<p className="text-[#FFFFFF]/50 text-sm leading-relaxed max-w-3xl">
														{item.answer}
													</p>
												</div>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FAQAccordion
