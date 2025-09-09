"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export default function HeroSection() {
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
    <section className="relative bg-[#1A1A1A]">
      {/* top contact info */}
      <div className="absolute top-4 left-4 md:top-8 md:left-24 text-xs md:text-sm text-gray-400 flex flex-col md:flex-row gap-2 md:gap-10">
        <div className="text-white">
          NL: <span className="text-[#8F6A42]">31 (0)164220795</span>
        </div>
        <div className="text-white">
          BE: <span className="text-[#8F6A42]">+32 (0)164 99 777</span>
        </div>
      </div>

      <Carousel className="h-full" setApi={setApi}>
        <CarouselContent>
          {[1, 2, 3].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex items-center justify-center min-h-[500px] sm:min-h-[650px] px-4 sm:px-8">
                <div className="container mx-auto">
                  <div className="relative flex flex-col sm:flex-row items-center text-center sm:text-left bg-[#444444] p-6 sm:p-8 h-auto sm:h-[400px] sm:ml-38">
                    <div className="w-full sm:w-[300px] sm:ml-24 relative z-10">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-light text-[#F0E6E2] mb-4 sm:mb-6 leading-tight">
                        The most elegant glass you'll ever see
                      </h2>
                      <p className="text-[#F0E6E2] mb-6 sm:mb-8 text-sm sm:text-[14px] leading-relaxed max-w-md mx-auto sm:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      {/* buttons responsive */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-start">
                        <Button
                          size="xs"
                          className="bg-white text-[10px] sm:text-[12px] text-black hover:bg-gray-100 px-4 py-2 sm:py-3 rounded-full"
                        >
                          Discover our collection
                        </Button>
                        <Button
                          variant="outline"
                          size="xs"
                          className="border-gray-400 text-[10px] sm:text-[12px] text-white hover:bg-white hover:text-black px-4 py-2 sm:py-3 rounded-full bg-transparent"
                        >
                          Experience the beauty
                        </Button>
                      </div>

                      {/* slider count bottom right (hide on small, show on md+) */}
                      <div className="hidden sm:flex absolute bottom-4 sm:bottom-20 right-4 sm:right-24 items-center space-x-2 text-white">
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

                    {/* circle background (hidden on small) */}
                    <div className="hidden sm:flex items-center justify-center absolute -top-[25px] -left-[25px]">
                      <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-transparent border border-[#F0E6E2]/20"></div>
                    </div>

                    {/* logo (resize + reposition) */}
<img
  src="brand/logo.png"
  alt="logo"
  className="
    mx-auto mb-6 h-[50px] relative 
    sm:absolute sm:mb-0 sm:top-[20%] sm:-left-[128px] 
    sm:h-[100px]
  "
/>

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
