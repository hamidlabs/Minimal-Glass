"use client";
import React from "react";
import PureMasterpieces from "@/components/sections/PureMasterpieces";
import PureMasterpiecesed from "@/components/sections/PureMasterpiecesed";
import ProductsSection from "@/components/sections/ProductsSection";
import HeroProductImpressionSection from "@/components/impression/HeroProductImpressionSection";
import ContentBlockSection from "@/components/impression/ContentBlockSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CollectionSection from "@/components/sections/CollectionSection";

export default function ProductImpression() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroProductImpressionSection />
      <PureMasterpieces />
      <PureMasterpiecesed />
      <ProductsSection />
      <ContentBlockSection />
      <TestimonialSection />
      <CollectionSection />
    </div>
  );
}
