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
      <div className=" inset-0 -z-10">
        <Image
          src="/products/bg.jpg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 mt-20">
        <nav className="container mx-auto py-4 px-4 flex items-center justify-between  border-b border-gray-600 ">
          <div className="text-2xl font-light tracking-[0.2em]">
            {product.name}
          </div>
          <div className="flex items-center space-x-4 text-sm font-light tracking-wider">
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

      <CardWrapper className="absolute top-20 left-0 right-0 z-30 pt-24 flex items-center justify-between">
        <button className="flex items-center space-x-2 text-ternary transition-colors duration-300">
          <ArrowLeft size={16} />
          <span className="text-sm font-light tracking-wider">Overview</span>
        </button>
        <span className="px-4 py-2 text-xs font-medium tracking-wider">
          {product.collection} | {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </CardWrapper>

      {/* Main Content - Centered */}
      <div className="relative z-30 flex items-center justify-center h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] px-8">
        <div className="text-center">
          {/* Product Title */}
          <h1 className="text-6xl md:text-8xl font-gifilka tracking-[0.1em] text-ternary mb-6">
            {product.name}
          </h1>

          {/* Product Details */}
          <div className="flex items-center justify-center space-x-4 text-ternary text-lg font-light tracking-wider mb-16">
            <span>{product.color}</span>
            <div className="text-ternary">|</div>
            <span>{product.collection}</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-8 left-0 right-0 z-30 px-8">
        <div className="flex flex-col space-y-6 items-center justify-between">
          <div className="font-light tracking-wider">
            <span className="text-lg font-medium text-ternary underline">
              {product.price}
            </span>
            <span className="text-md ml-2 text-ternary">
              REF: {product.slug}
            </span>
          </div>
          <Button variant="ghost" size="sm" className="border border-ternary">
            Configure
          </Button>
        </div>
      </div>
    </div>
  );
}
