import React from "react";
import { Button } from "@/components/ui/button";
const ContactSpecialist = () => {
  return (
    <div className=" bg-secondary  flex items-center justify-center p-12">
      {/* Purple border frame */}
      <div className="w-full max-w-6xl  ">
        <div className="grid grid-cols-1 lg:grid-cols-14 items-center">
          {/* Left side - Contact us section */}
          <div className=" col-span-4  ">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gray-300"></div>
              <h3 className="text-sm font-medium text-ternary tracking-wider uppercase">
                Contact us
              </h3>
            </div>
          </div>

          {/* Right side - Main content */}
          <div className="space-y-8 col-span-10">
            {/* Main heading */}
            <h1 className="text-5xl lg:text-6xl font-light leading-tight font-[Gipilka]">
              Speak to a
              <br />
              <span className="font-[Gipilka] ">specialist</span>
            </h1>

            {/* Description */}
            <p className="text-ternary text-lg leading-relaxed max-w-lg">
              Dutch Design by Bas Coppelmans combined with the hard work and
              pride of our Belgian steelworkers.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="third" size="lg">
                email@email.be
              </Button>

              <Button variant="third" size="lg">
                +32 144 99 777
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSpecialist;
