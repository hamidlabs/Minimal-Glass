"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export default function HeroSectionAbout({ isMenuOpen = false }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <section className="relative min-h-[50vh] bg-[#1A1A1A]">
      {/* Contact Info */}
    
      <div
        className={`absolute top-4 left-4 right-4 
  flex flex-col sm:flex-row gap-2 sm:gap-10 
  text-xs sm:text-sm text-white md:p-20 z-10 
  transition-opacity duration-300 
  ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div>
          NL:{" "}
          <a href="tel:+31164220795" className="text-[#BF8A42] font-medium">
            +31 (0)164 22 07 95
          </a>
        </div>
        <div>
          BE:{" "}
          <a href="tel:+3216499777" className="text-[#BF8A42] font-medium">
            +32 (0)164 99 777
          </a>
        </div>
      </div>

      <Carousel className="h-full" setApi={setApi}>
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex items-center justify-center min-h-[500px] sm:min-h-[700px]">
                <div className="container mx-auto">
                  <div className="relative bg-[#444444] sm:ml-38 md:mt-20">
                    {/* Content */}
                    <div className="relative sm:flex items-center p-6 sm:p-10 h-[400px]">
                      <div>
                        {/* Heading + Line */}
                        <div className="mb-6 sm:mb-0 sm:absolute sm:top-[20%] sm:-left-[50px]">
                          <h1 className="font-[Giplika] text-[#F0E6E2] text-lg md:text-3xl mb-4 sm:mb-7">
                            About Minimal Glass
                          </h1>
                          <div className="w-16 sm:w-20 h-0.5 bg-[#F0E6E2] ml-0 sm:ml-12"></div>
                        </div>

                        {/* Paragraph */}
                        <div className="w-full sm:w-[300px] sm:ml-24 mt-6 sm:mt-0">
                          <p className="text-[#F0E6E2] mb-8 text-sm font-normal leading-relaxed max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>

                        {/* Indicator + Navigation */}
                        <div className="absolute bottom-6 right-6 sm:bottom-20 sm:right-24 flex items-center space-x-2 text-white">
                          <button
                            onClick={() =>
                              api?.scrollTo(
                                current === 1 ? count - 1 : current - 2
                              )
                            }
                            className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                          >
                            {current}
                          </button>
                          <div className="w-8 h-0.5 bg-gray-400"></div>
                          <button
                            onClick={() =>
                              api?.scrollTo(current === count ? 0 : current)
                            }
                            className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                          >
                            {count}
                          </button>
                        </div>

                        {/* Circle Decoration */}
                        <div className="absolute -top-[30px] -left-[30px] sm:-top-[25px] sm:-left-[25px]">
                          <div className="h-[220px] w-[220px] sm:h-[400px] sm:w-[400px] rounded-full border border-[#F0E6E2]/20"></div>
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
  );
}
