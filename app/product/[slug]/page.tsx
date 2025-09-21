"use client";

import CollectionProductHeader from "@/components/product/CollectionProductHeader";
import Navbar from "@/components/shared/Navbar";
import { useProductStore } from "@/store/product-store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import PureMasterpieces from "@/components/sections/PureMasterpieces";

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
    <div className="">
      <Navbar />
      <CollectionProductHeader product={product} />
    </div>
  );
}
