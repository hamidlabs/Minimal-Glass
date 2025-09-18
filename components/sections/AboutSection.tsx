import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-center">
        {/* Left line + text */}
        <div className="flex items-center mb-6 md:mb-0 md:mr-8">
          <div className="hidden md:block w-16 h-0.5 bg-gray-600 mr-4"></div>
          <div className="text-sm text-ternary tracking-wider">
            About Minimal Glass
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 w-full max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-ternary leading-snug mb-4">
            Minimal Glass, maximum results
          </h2>

          {/* Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-sm leading-relaxed">
            <div>
              <p className="text-ternary">
                Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum.
                Integer sit eu tempus tortor. Egestas vel velit amet rhoncus
                ante ut rhoncus. Gravida ut amet molestie vulputate ultrices
                proin vel eu tellus suscipit sit.
              </p>
            </div>
            <div>
              <p className="text-[#F0E6E2]/50">
                Lorem ipsum dolor sit amet consectetur. Facilisis pellentesque
                arcu et sit mollis. Praesent at leo ultrices eros cum eu.
                Praesent dictum sed arcu sed. Integer lectus velit cras sed
                convallis sollicitudin. Integer eget. Nibh.
              </p>
            </div>
          </div>

          {/* Link */}
          <div className="mt-6 md:mt-4">
            <a
              href="#"
              className="inline-flex items-center text-ternary hover:text-primary transition-colors underline text-sm tracking-wide"
            >
              About us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
