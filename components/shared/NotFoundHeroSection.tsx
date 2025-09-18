"use client";

import { Button } from "@/components/ui/button";

export default function NotFoundHeroSection() {
  return (
    <section className="relative min-h-[50vh] bg-[#1A1A1A] pt-0 sm:pt-0">
      <div className="relative z-10 container mx-auto px-4 py-9  rounded-none    ">
        <div className="container mx-auto">
          <div className="text-left  relative sm:ml-38 md:mt-20">
            {/* Desktop Layout */}
            <div className=" sm:flex items-center p-10 h-[400px]">
              {/* Heading + Line */}
              <div className=" sm:mb-0 sm:absolute top-[20%] sm:-left-[50px] ">
                <h1 className="font-[Giplika] text-ternary text-xl sm:text-lg md:text-4xl mb-4 sm:mb-7 sm:w-[350px]">
                  Oops.. this page could not be found
                </h1>
                <div className="mb-6 space-y-2">
                  <p className="text-[#FFFFFF]/50 text-sm sm:text-base  sm:w-[450px] mx-auto sm:mx-0">
                    Sorry, but the page you are looking for does not exist
                    (anymore).We are happy to help you further.
                  </p>
                </div> 
                {/* Back to homepage link */}
                <div className="flex justify-center  sm:justify-start mr-72">
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="group flex items-center text-primary hover:text-white transition-colors duration-300 text-sm sm:text-base "
                  >
                    <svg
                      className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300 sm:mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back to homepage
                  </button>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center absolute left-[200px] ">
                <div className="h-[500px] w-[500px] mt-0 rounded-full bg-transparent border-[1px] border-[#F0E6E2]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
