"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
    <section className="relative min-h-[80vh] bg-[#1A1A1A]">
      <div className="absolute top-8 left-4 md:left-24 text-sm text-gray-400 space-y-1 flex flex-col md:flex-row gap-4 md:gap-10 z-50">
        <div className="text-white font-semibold">
          NL: <span className="text-[#8F6A42]">31 (0)164220795</span>
        </div>
        <div className="text-white font-semibold">
          BE: <span className="text-[#8F6A42]">+32 (0)164 99 777</span>
        </div>
      </div>

      <Carousel className="h-full" setApi={setApi}>
        <CarouselContent>
          {[1, 2, 3].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex items-center justify-center min-h-[650px] pt-16">
                <div className="container mx-auto px-4">
                  <div className="text-left bg-[#444444] p-8 relative h-[400px] md:ml-38 flex items-center">
                    <div className="relative w-full">
                      <div className="w-full md:w-[300px] md:ml-24">
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
                            className="bg-white text-[8px] text-black hover:bg-gray-100 px-4 py-3 rounded-full"
                          >
                            Discover our collection
                          </Button>
                          <Button
                            variant="outline"
                            size="xs"
                            className="border-gray-400 text-[8px] text-white hover:bg-white hover:text-black px-4 py-3 rounded-full bg-transparent"
                          >
                            Experience the beauty
                          </Button>
                        </div>
                        <div className="absolute bottom-4 md:bottom-20 right-4 md:right-24 flex items-center space-x-2 text-white">
                          <button
                            onClick={() => api?.scrollPrev()}
                            className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                          >
                            {current}
                          </button>
                          <div className="w-8 h-0.5 bg-gray-400"></div>
                          <button
                            onClick={() => api?.scrollNext()}
                            className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                          >
                            {count}
                          </button>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center justify-center absolute -top-[25px] -left-[25px]">
                        <div className="h-[400px] w-[400px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/20"></div>
                      </div>
                      <img
                        src="/brand/logo.png" // Assuming the logo is in public/brand directory
                        alt="Logo"
                        className="absolute top-4 right-4 md:top-[20%] md:-left-[128px] h-12 md:h-[100px]"
                      />
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