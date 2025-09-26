"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "../collection/ProductCard";
import { useProductStore } from "@/store/product-store";
import { useEffect } from "react";

export default function CollectionSection() {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className=" bg-background ">
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
            <h2 className="text-lg md:text-3xl font-[Giplika] text-ternary leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
          </div>

          <div className="max-w-xs md:max-w-[200px]">
            <p className="text-[#F0E6E2]/50 text-sm leading-relaxed">
              Minimal glass creates custom-made glass doors, room dividers and
              more cabinets in all shapes and sizes. Get inspired.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products.slice(0, 3).map((product) => (
           <ProductCard key={product.id} product={product} /> 
          ))}
        </div>
      </div>
    </section>
  );
}
