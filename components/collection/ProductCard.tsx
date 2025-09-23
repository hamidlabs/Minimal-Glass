"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  onCardClick?: (productId: string) => void;
}

export default function ProductCard({
  product,
  onCardClick,
}: ProductCardProps) {
  const handleCardClick = () => {
    onCardClick?.(product.id);
  };

  return (
    <div
      className="group bg-black rounded-none overflow-hidden transition-all duration-300 hover:scale-105"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="p-6 bg-black">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Product Info Below Image */}
      <div className="p-6 bg-black">
        {/* Product Details Group 1 */}
        <div className="mb-8">
          {/* Product Name */}
          <h3 className="font-gifilka text-3xl capitalize font-light text-white mb-2">
            {product.name}
          </h3>

          {/* Color and Collection */}
          <p className="text-white/80 text-sm">
            {product.color} | {product.collection}
          </p>
        </div>

        {/* Product Details Group 2 with Button */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white font-medium text-lg">
              €{product.price.toFixed(2)} M2 | {product.applications.length}{" "}
              COLORS
            </p>
          </div>

          {/* Arrow Button */}
          <Link href={`/collection/${product.slug}`}>
            <Button
              size="icon"
              variant="arrow"
              className="group-hover:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight className="size-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
