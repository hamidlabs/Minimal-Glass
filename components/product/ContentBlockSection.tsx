import React from "react";

export default function ContentBlockSection() {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Content Blocks */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Small Block */}
          <div className="bg-[#C4C4C4]/30 rounded-none  sm:h-64 md:h-[350px]  w-full md:w-1/3 relative overflow-hidden">
            <div className="absolute inset-0"></div>
          </div>

          {/* Large Block */}
          <div className="bg-[#C4C4C4]/30 rounded-none h-64 sm:h-80 md:h-[400px] w-full md:flex-1 relative overflow-hidden">
            <div className="absolute inset-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
