"use client";

import { useState } from "react";
import Image from "next/image";

export default function CollectionSection() {
  const products = [
    {
      id: 1,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      collection: "Essential collection",
      status: "In Stock",
      image: "brand/Mask-group.png",
    },
    {
      id: 2,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      collection: "Essential collection",
      status: "In Stock",
      image: "brand/Mask-group.png",
    },
    {
      id: 3,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      collection: "Essential collection",
      status: "In Stock",
      image: "brand/Mask-group.png",
    },
  ];

  return (
    <section className=" bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 mb-12 md:mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-12 md:w-16 h-0.5 bg-gray-600 mr-2"></div>
            <div className="text-xs md:text-sm text-third tracking-wider">
              Our Collection
            </div>
          </div>

          <div className="max-w-xs md:max-w-sm">
            <h2 className="text-lg md:text-3xl font-[Giplika] text-third leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
          </div>

          <div className="max-w-xs md:max-w-[200px]">
            <p className="text-[#F0E6E2]/40 text-sm leading-relaxed">
              Minimal glass creates custom-made glass doors, room dividers and
              more cabinets in all shapes and sizes. Get inspired.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-[#0000004D] rounded-none overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Product Image Container */}
              <div className="relative h-80 overflow-hidden">
                {/* Collection Badge */}
                <span className="absolute top-5 left-20 md:left-2 text-xs font-medium py-1 px-2 text-[#F0E6E299] md:ml-20 z-10">
                  {product.collection} | {product.status}
                </span>

                {/* Product Image */}
                <div className="relative w-[200px] h-full mx-auto mt-16">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Product Name Overlay */}
                {/* <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-lg font-medium bg-black/50 backdrop-blur-sm py-2 mx-8 rounded">
                    {product.name}
                  </p>
                </div> */}
              </div>

              {/* Product Info */}
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xs text-[#F0E6E2] font-medium">
                  {product.name}
                </h3>
                <span className="text-[#F0E6E299] text-xs">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
