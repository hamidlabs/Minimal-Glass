import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gray-600 mr-4"></div>
            <div className="text-sm text-gray-400 tracking-wider">About Minimal Glass</div>
          </div>
          <div className="flex-1 px-8">
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-8">
              Minimal Glass, maximum results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 text-sm leading-relaxed">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum. Integer sit eu tempus tortor. Egestas vel velit amet rhoncus ante ut rhoncus. Gravida ut amet molestie vulputate ultrices proin vel eu tellus suscipit sit.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Facilisis pellentesque arcu et sit mollis. Praesent at leo ultrices eros cum eu. Praesent dictum sed arcu sed. Integer lectus velit cras sed convallis sollicitudin. Integer eget. Nibh.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center text-gray-300 hover:text-[#BF8A42] transition-colors text-sm tracking-wide">
                About us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}