"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export default function HeroSection({ isMenuOpen = false }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <section className="relative min-h-[50vh] bg-[#1A1A1A] pt-0 sm:pt-0">
      {/* Contact Info - Desktop Only */}
      <div
        className={`absolute top-3 left-0 right-0 text-xs text-gray-400 hidden sm:flex flex-col items-center gap-1 z-20 transition-opacity duration-300 sm:top-4 sm:left-24 sm:flex-row sm:justify-start sm:gap-10 md:p-20 p-6 ${
          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-white">
          NL: <span className="text-[#BF8A42]">31 (0)164220795</span>
        </div>
        <div className="text-white">
          BE: <span className="text-[#BF8A42]">+32 (0)164 99 777</span>
        </div>
      </div>

      <Carousel className="h-full" setApi={setApi}>
        <CarouselContent>
          {[1, 2, 3].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex items-center justify-center min-h-[500px] sm:min-h-[700px]">
                <div className="container mx-auto">
                  <div className="text-left bg-[#444444] relative sm:ml-38 md:mt-20">
                    {/* Mobile Layout */}
                    <div className="block sm:hidden px-6 py-12 min-h-[500px]">
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        {/* Mobile Content */}
                        <div className="max-w-xs">
                          {/* Mobile Contact Info - At the top */}
                          {/* <div className="mb-6 space-y-1">
                            <div className="text-xs text-white">
                              NL: <span className="text-[#BF8A42]">31 (0)164220795</span>
                            </div>
                            <div className="text-xs text-white">
                              BE: <span className="text-[#BF8A42]">+32 (0)164 99 777</span>
                            </div>
                          </div> */}
                          <p className="text-[#F0E6E2] mb-8 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <div className="flex flex-col gap-4 mb-8">
                            <Button
                              size="sm"
                              className="bg-[#F0E6E2] text-sm text-black hover:bg-gray-100 px-8 py-3 rounded-full w-full font-medium"
                            >
                              Discover our collection
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-400 text-sm text-[#F0E6E2] hover:bg-white hover:text-black px-8 py-3 rounded-full bg-transparent w-full font-medium"
                            >
                              Experience the beauty
                            </Button>
                          </div>

                          {/* Mobile Navigation */}
                          <div className="flex items-center justify-center space-x-3 text-white mb-8">
                            <button
                              onClick={() =>
                                api?.scrollTo(
                                  current === 1 ? count - 1 : current - 2
                                )
                              }
                              className="text-xl hover:text-[#BF8A42] transition-colors cursor-pointer font-light"
                            >
                              {current}
                            </button>
                            <div className="w-10 h-0.5 bg-gray-400"></div>
                            <button
                              onClick={() =>
                                api?.scrollTo(current === count ? 0 : current)
                              }
                              className="text-xl hover:text-[#BF8A42] transition-colors cursor-pointer font-light"
                            >
                              {count}
                            </button>
                          </div>

                          {/* Mobile Logo */}
                          <div className="flex justify-center">
                            <img
                              src="brand/logo.png"
                              alt="Minimal Glass Logo"
                              className="h-16 w-auto opacity-90"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:flex items-center p-10 h-[400px]">
                      <div>
                        <div className="w-[300px] ml-24">
                          <h2 className="text-xl md:text-2xl font-light text-[#F0E6E2] mb-6 leading-tight">
                            The most elegant glass you'll ever see
                          </h2>
                          <p className="text-[#F0E6E2] mb-8 text-[14px] leading-relaxed max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              size="xs"
                              className="bg-[#F0E6E2] text-[8px] text-black hover:bg-gray-100 px-4 py-3 rounded-full"
                            >
                              Discover our collection
                            </Button>
                            <Button
                              variant="outline"
                              size="xs"
                              className="border-gray-400 text-[8px] text-[#F0E6E2] hover:bg-white hover:text-black px-4 py-3 rounded-full bg-transparent"
                            >
                              Experience the beauty
                            </Button>
                          </div>

                          {/* Desktop Navigation */}
                          <div className="absolute bottom-20 right-24 flex items-center space-x-2 text-white">
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
                        </div>

                        {/* Desktop Circle */}
                        <div className="flex items-center justify-center absolute -top-[25px] -left-[25px]">
                          <div className="h-[400px] w-[400px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/20"></div>
                        </div>

                        {/* Desktop Logo */}
                        <img
                          src="brand/logo.png"
                          alt="Minimal Glass Logo"
                          className="absolute top-[20%] -left-[128px] h-[100px]"
                        />
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