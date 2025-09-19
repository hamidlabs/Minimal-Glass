"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  collection: string;
  applications: string[];
  color: string;
  status: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.collection}</p>
        <p className="text-sm text-gray-500">Color: {product.color}</p>
        <p className="text-base font-bold">${product.price}</p>

        {/* Status */}
        <span
          className={`inline-block px-2 py-1 text-xs rounded-full ${
            product.status === "In Stock"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.status}
        </span>

        {/* Action Button */}
        <div className="pt-2">
          <Button className="w-full">View Details</Button>
        </div>
      </div>
    </div>
  );
}
