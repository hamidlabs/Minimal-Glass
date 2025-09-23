"use client";
import CollectionProductHeader from "@/components/single-collection/CollectionProductHero";
import { useProductStore } from "@/store/product-store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import CardWrapper from "@/components/cardwrapper";

export default function SingleProductPage() {
  const params = useParams();
  const slug = params.slug;
  const { fetchProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(slug);

  const product = products.find((product) => product.slug === slug);
console.log(product)
  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <CollectionProductHeader product={product} />
    </div>
  );
}
