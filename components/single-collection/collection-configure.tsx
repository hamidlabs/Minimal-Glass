"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useProductStore } from "@/store/product-store";
import CardWrapper from "../cardwrapper";
import CollectionInfo from "./collection-info";
import CollectionImage from "./collection-image";

export default function ProductDetail() {
  const { slug } = useParams();
  const { products, fetchProducts } = useProductStore();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    if (!products.length) fetchProducts();
  }, [products, fetchProducts]);

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <CardWrapper>
      <div className="grid lg:grid-cols-2 gap-12 pt-12">
        <CollectionImage product={product} />
        <CollectionInfo product={product} />
      </div>
    </CardWrapper>
  );
}
