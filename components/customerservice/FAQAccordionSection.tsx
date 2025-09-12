import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQAccordion = () => {
  const [expandedItems, setExpandedItems] = useState(new Set([3])); // Pre-expand third item

  const faqItems = [
    {
      id: 1,
      question: "This is a question",
      answer:
        "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      question: "This is a question",
      answer:
        "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      question: "This is a question",
      answer:
        "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      question: "This is a question",
      answer:
        "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      question: "This is a question",
      answer:
        "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 flex justify-center self-start items-center gap-2">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-2">
          <div className="w-20 h-0.5 bg-gray-400"></div>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            Order process
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => {
            const isExpanded = expandedItems.has(item.id);
            const isLast = index === faqItems.length - 1;

            return (
              <div key={item.id} className="group">
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 text-left hover:bg-gray-800/30 transition-colors duration-200 flex items-center justify-between border-b border-gray-700/50"
                >
                  <span className="text-gray-200 font-normal text-base">
                    {item.question}
                  </span>

                  <div className="flex items-center space-x-4">
                    {/* Golden dot indicator for expanded items */}
                    {isExpanded && (
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    )}

                    {/* Plus/Minus icon */}
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-200">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-6 border-b border-gray-700/50">
                    <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
