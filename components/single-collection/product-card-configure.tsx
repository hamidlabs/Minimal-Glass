"use client";
import ProductCard from "../collection/ProductCard";
import { useProductStore } from "@/store/product-store";

import { Button } from "@/components/ui/button";

export default function ProductCardConfigure() {
  const { products, fetchProducts } = useProductStore();

  return (
    <section className=" bg-background ">
      <div className="container mx-auto  px-4 py-16 md:py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-[Giplika] text-ternary">
            Related articles
          </h2>
          <Button variant="outline" size="sm">
            View collection
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
