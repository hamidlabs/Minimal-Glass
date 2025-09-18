// app/components/BrandValues.tsx
import React from "react";

const brandValues = [
  {
    title: "Brand value title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum. Integer sit eu tempus tortor. Egestas vel velit amet feugiat cras ultricies.",
  },
  {
    title: "Brand value title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum. Integer sit eu tempus tortor. Egestas vel velit amet feugiat cras ultricies.",
  },
  {
    title: "Brand value title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum. Integer sit eu tempus tortor. Egestas vel velit amet feugiat cras ultricies.",
  },
  {
    title: "Brand value title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit sem eget ac ipsum. Integer sit eu tempus tortor. Egestas vel velit amet feugiat cras ultricies.",
  },
];

export default function BrandSectionAbout() {
  return (
    <section className="bg-background py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Title */}
        <div className="col-span-1 flex items-start">
          <h2 className="text-2xl md:text-3xl font-light text-ternary">
            Our brand values
          </h2>
        </div>

        {/* Right Content */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {brandValues.map((item, index) => (
            <div key={index}>
              <h3 className="text-primary font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-ternary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
