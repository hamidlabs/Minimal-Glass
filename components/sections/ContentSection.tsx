import { ArrowRight } from "lucide-react";

export default function ContentSection() {
  return (
    <section className="py-20 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-xl text-center">
        <p className="text-third text-lg font-normal md:text-3xl leading-tight mb-8 text-pretty font-[Giplika]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet."
        </p>
        <a href="#" className="inline-flex items-center text-primary hover:text-[#BF8A42] transition-colors text-sm tracking-wide">
          Discover our collection
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
}