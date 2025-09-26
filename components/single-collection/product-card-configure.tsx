"use client";
import ProductCard from "../collection/ProductCard";
import { useProductStore } from "@/store/product-store";

import { Button } from "@/components/ui/button";

export default function ProductCardConfigure() {
  const { products, fetchProducts } = useProductStore();


  return (
    <section className=" bg-background ">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-pretty font-[Giplika] text-ternary">Related articles</h2>
        <Button
        >View collection</Button>

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
