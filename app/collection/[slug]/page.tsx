"use client";
import CollectionProductHeader from "@/components/single-collection/CollectionProductHero";
import CollectionConfigure from "@/components/single-collection/collection-configure";
import ProductDetails from "@/components/single-collection/product-detail";
import ProductConfigure from "@/components/single-collection/pure-configure"; 
import { useProductStore } from "@/store/product-store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import ContentConfigure from "@/components/single-collection/content-configure";
import ProductCardConfigure from "@/components/single-collection/product-card-configure";

export default function SingleProductPage() {
  const params = useParams();
  const slug = params.slug;
  const { fetchProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(slug);

  const product = products.find((product) => product.slug === slug);
  console.log(product);
  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <CollectionProductHeader product={product} />
      <CollectionConfigure />
      <ProductDetails />
      <ProductConfigure />
      <ContentConfigure />
      <ProductCardConfigure />
    </div>
  );
}
