import { ArrowLeft } from "lucide-react";
import React from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardWrapper from "../cardwrapper";

export default function CollectionProductHeader({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="inset-0 -z-10">
        <Image
          src="/products/bg.jpg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 mt-12 sm:mt-20">
        <nav className="container mx-auto py-3 sm:py-4 px-4 flex items-center justify-between border-b border-gray-600">
          <div className="text-lg sm:text-2xl font-light tracking-[0.1em] sm:tracking-[0.2em]">
            {product.name}
          </div>
          {/* Hide navigation items on mobile, show on larger screens */}
          <div className="hidden lg:flex items-center space-x-4 text-sm font-light tracking-wider">
            <button className="text-ternary transition-colors">
              PRODUCT INFO
            </button>
            <button className="text-ternary transition-colors">
              IMPRESSIONS
            </button>
            <button className="text-ternary transition-colors">
              ORDER SAMPLE
            </button>
            <button className="text-ternary transition-colors">
              CONFIGURE & ORDER
            </button>
          </div>
        </nav>
      </header>

      {/* Back Button */}
      <CardWrapper className="absolute top-12 sm:top-20 left-0 right-0 z-30 pt-16 sm:pt-24 flex items-center justify-between">
        <button className="flex items-center space-x-2 text-ternary transition-colors duration-300">
          <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-light tracking-wider">
            Overview
          </span>
        </button>
        <span className="px-2 sm:px-4 py-1 sm:py-2 text-xs font-medium tracking-wider">
          {product.collection} | {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </CardWrapper>

      {/* Main Content - Centered */}
      <div className="relative z-30 flex items-center justify-center h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] px-4 sm:px-8">
        <div className="text-center">
          {/* Product Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-gifilka tracking-[0.05em] sm:tracking-[0.1em] text-ternary mb-4 sm:mb-6">
            {product.name}
          </h1>

          {/* Product Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0 text-ternary text-sm sm:text-lg font-light tracking-wider mb-8 sm:mb-16">
            <span>{product.color}</span>
            <div className="hidden sm:block text-ternary">|</div>
            <span>{product.collection}</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-30 px-4 sm:px-8">
        <div className="flex flex-col space-y-4 sm:space-y-6 items-center justify-between">
          <div className="font-light tracking-wider text-center">
            <span className="text-base sm:text-lg font-medium text-ternary underline">
              {product.price}
            </span>
            <span className="text-sm sm:text-md ml-2 text-ternary block sm:inline mt-1 sm:mt-0">
              REF: {product.slug}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="border border-ternary px-6 sm:px-8 py-2"
          >
            Configure
          </Button>
        </div>
      </div>
    </div>
  );
}
