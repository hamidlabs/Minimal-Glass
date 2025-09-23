"use client";
import React from "react";
import PureMasterpieces from "@/components/sections/PureMasterpieces";
import PureMasterpiecesed from "@/components/sections/PureMasterpiecesed";
import ProductsSection from "@/components/sections/ProductsSection";
import HeroProductImpressionSection from "@/components/impression/HeroProductImpressionSection";
import ContentBlockSection from "@/components/impression/ContentBlockSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CollectionSection from "@/components/sections/CollectionSection";
import CardWrapper from "@/components/cardwrapper";

export default function ProductImpression() {
  return (
    <CardWrapper>
      <HeroProductImpressionSection />
      <PureMasterpieces />
      <PureMasterpiecesed />
      <ProductsSection />
      <ContentBlockSection />
      <TestimonialSection />
      <CollectionSection />
    </CardWrapper>
  );
}
