"use client";

import CollectionProductHeader from "@/components/product/collectionproduct";
import Navbar from "@/components/shared/Navbar";
import { useProductStore } from "@/store/product-store";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function SingleProductPage() {
  const params = useParams();
  const slug = params.slug;
  const { fetchProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(slug);

  const product = products.find((product) => product.slug === slug);

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Navbar />
      <CollectionProductHeader product={product} />
    </div>
  );
}
