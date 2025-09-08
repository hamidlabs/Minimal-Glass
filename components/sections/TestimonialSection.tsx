"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export default function TestimonialSection() {
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [testimonialCurrent, setTestimonialCurrent] = useState(0);
  const [testimonialCount, setTestimonialCount] = useState(0);

  const testimonials = [
    { quote: "Alleen maar lof voor de hoge kwaliteit van Minimal Glass", author: "John Doe from Antwerpen, BE" },
    { quote: "Exceptional craftsmanship and attention to detail in every piece", author: "Sarah Johnson from Amsterdam, NL" },
    { quote: "The most beautiful glass installations we've ever seen", author: "Michael Chen from Brussels, BE" },
    { quote: "Outstanding service and premium quality products", author: "Emma Wilson from Rotterdam, NL" },
    { quote: "Minimal Glass exceeded all our expectations completely", author: "David Brown from Ghent, BE" },
  ];

  useEffect(() => {
    if (!testimonialApi) return;
    setTestimonialCount(testimonialApi.scrollSnapList().length);
    setTestimonialCurrent(testimonialApi.selectedScrollSnap() + 1);
    testimonialApi.on("select", () => {
      setTestimonialCurrent(testimonialApi.selectedScrollSnap() + 1);
    });
  }, [testimonialApi]);

  return (
    <section className="relative py-20 px-4 bg-[#1A1A1A] ">
      <div className="container mx-auto bg-[#C4C4C4]/30">
        <Carousel className="w-full" setApi={setTestimonialApi}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[500px]  rounded-none overflow-hidden">
                  <div className="w-full h-full "></div>
                  <div className="absolute bottom-0 left-0 right-80 bg-[#1A1A1A] p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex-1 ">
                        <h3 className="text-lg md:text-4xl font-light text-[#F0E6E2] mb-4 leading-tight font-[Giplika] ">
                          "{testimonial.quote}"
                        </h3>
                        <p className="text-primary text-sm">
                          {testimonial.author}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-[#F0E6E2] ">
                        <button
                          onClick={() =>
                            testimonialApi?.scrollTo(
                              testimonialCurrent === 1
                                ? testimonialCount - 1
                                : testimonialCurrent - 2
                            )
                          }
                          className="text-lg hover:text-primary transition-colors cursor-pointer"
                        >
                          {testimonialCurrent}
                        </button>
                        <div className="w-8 h-0.5 bg-gray-400 "></div>
                        <button
                          onClick={() =>
                            testimonialApi?.scrollTo(
                              testimonialCurrent === testimonialCount
                                ? 0
                                : testimonialCurrent
                            )
                          }
                          className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                        >
                          {testimonialCount}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}