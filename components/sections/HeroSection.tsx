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
      <div className="absolute top-4 left-4 md:top-8   text-xs md:text-sm text-gray-400 flex flex-col md:flex-row gap-2 md:gap-10 z-10  justify-center items-center ">

        <div className="flex flex-col md:flex-row gap-2 md:gap-10 ">
          <div className="text-white">
          NL: <span className="text-primary">31 (0)164220795</span>
        </div>
        <div className="text-white">
          BE: <span className="text-primary">+32 (0)164 99 777</span>
        </div>
        </div>
        
      </div>

      <Carousel className="h-full" setApi={setApi}>
        <CarouselContent>
          {[1, 2, 3].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex items-center justify-center min-h-[400px] md:min-h-[650px] px-4 md:px-8">
                <div className="container mx-auto">
                  <div className="text-left bg-[#444444] p-4 md:p-8 relative h-auto md:h-[400px] md:ml-38 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-[300px] md:ml-24">
                      <h2 className="text-lg md:text-2xl font-light text-[#F0E6E2] mb-4 md:mb-6 leading-tight">
                        The most elegant glass you'll ever see
                      </h2>
                      <p className="text-[#F0E6E2] mb-6 md:mb-8 text-sm md:text-[14px] leading-relaxed max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          size="xs"
                          className="bg-white text-[10px] md:text-[8px] text-black hover:bg-gray-100 px-4 py-2 md:py-3 rounded-full"
                        >
                          Discover our collection
                        </Button>
                        <Button
                          variant="outline"
                          size="xs"
                          className="border-gray-400 text-[10px] md:text-[8px] text-white hover:bg-white hover:text-black px-4 py-2 md:py-3 rounded-full bg-transparent"
                        >
                          Experience the beauty
                        </Button>
                      </div>
                      <div className="absolute bottom-6 md:bottom-20 right-6 md:right-24 flex items-center space-x-2 text-white">
                        <button
                          onClick={() =>
                            api?.scrollTo(
                              current === 1 ? count - 1 : current - 2
                            )
                          }
                          className="text-sm md:text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                        >
                          {current}
                        </button>
                        <div className="w-6 md:w-8 h-0.5 bg-gray-400"></div>
                        <button
                          onClick={() =>
                            api?.scrollTo(current === count ? 0 : current)
                          }
                          className="text-sm md:text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                        >
                          {count}
                        </button>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center absolute -top-[25px] -left-[25px]">
                      <div className="h-[400px] w-[400px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/20"></div>
                    </div>
                    <img
                      src="brand/logo.png"
                      alt=""
                      className="absolute top-[10%] md:top-[20%] -left-[90px]  md:-left-[128px] h-[1-0px] md:h-[100px]"
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
