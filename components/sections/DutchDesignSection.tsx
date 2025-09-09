import React from "react";

export default function DutchDesignSection() {
  return (
    <section className="min-h-screen bg-[#4D4D4D] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl flex items-center justify-center">
        <div >
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left - Section Label with decorative line */}
            <div className="col-span-2 flex items-center">
              <div className="w-12 h-px bg-[#F0E6E2] mr-4"></div>
              <div className="text-sm text-[#F0E6E2] tracking-widest font-light">
                Design
              </div>
            </div>

            {/* Center and Right - Main Content Row */}
            <div className="col-span-10 ">
              <div className="flex  gap-24 mb-8 ">
                {/* Left - Dutch Design Heading */}
                <div>
                  <h2 className="text-6xl font-light text-[#F0E6E2] font-[Gifilka] leading-tight tracking-wide">
                    Dutch
                    <br />
                    Design
                  </h2>
                </div>

                {/* Right - Hand made in Belgium */}
                <div className="mt-20">
                  <h3 className="text-2xl font-light text-[#F0E6E2] font-[Gifilka] leading-tight tracking-wide">
                    Hand made
                    <br />
                    in Belgium
                  </h3>
                </div>
              </div>

              {/* Description Text */}
              <div className="space-y-4 text-[#F0E6E2] text-sm leading-relaxed max-w-2xl">
                <p>
                  Dutch Design by Bas Coppelmans combined with the hard work and
                  pride of our Belgian steelworkers. The best of both worlds,
                  because what's good doesn't have to come from far away.
                
                  Bas, Chief Studio Design, always seeks the perfect balance in
                  minimalism and works unconventionally during his design
                  process.
                
                  Dutch Design by Bas Coppelmans combined with the hard work and
                  pride of our Belgian steelworkers. The best of both worlds,
                  because what's good doesn't have to come from far away. Bas,
                  Chief Studio Design, always seeks the perfect balance in
                  minimalism and works unconventionally during his design
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
