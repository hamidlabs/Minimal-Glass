"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import PureMasterpieces from "@/components/sections/PureMasterpieces";
import PureMasterpiecesed from "@/components/sections/PureMasterpiecesed";
import ProductsSection from "@/components/sections/ProductsSection";
import HeroProductImpressionSection from "@/components/product/HeroProductImpressionSection";
import ContentBlockSection from "@/components/product/ContentBlockSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CollectionSection from "@/components/sections/CollectionSection";
import Footer from "@/components/shared/Footer";

export default function ProductImpression() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroProductImpressionSection />
      <PureMasterpieces />
      <PureMasterpiecesed />
      <ProductsSection />
      <ContentBlockSection />
      <TestimonialSection />
      <CollectionSection />
      <Footer />
    </div>
  ); 
}
