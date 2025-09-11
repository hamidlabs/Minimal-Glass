"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function ContentSectionAbout() {
  return (
    <section className="bg-[#1A1A1A] px-6 md:px-20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Heading */}
          <Card className="bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <h2 className="text-[#F0E6E2] font-light text-xl md:text-2xl leading-snug">
                The most elegant <br /> piece of glass you’ll <br /> ever see
              </h2>
            </CardContent>
          </Card>

          {/* Middle Text */}
          <Card className="bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <p className="text-[#F0E6E2]/70 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum.
                Integer sit eu tempus tortor. Egestas vel velit amet feugiat
                cras ultricies. Gravida ut amet molestie vulputate ultrices
                proin vel eu tellus euismod sit.
              </p>
            </CardContent>
          </Card>

          {/* Right Text */}
          <Card className="bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <p className="text-[#F0E6E2]/70 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum.
                Integer sit eu tempus tortor. Egestas vel velit amet feugiat
                cras ultricies. Gravida ut amet molestie vulputate ultrices
                proin vel eu tellus euismod sit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
