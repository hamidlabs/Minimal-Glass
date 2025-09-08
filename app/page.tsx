"use client";

import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CollectionSection from "@/components/sections/CollectionSection";
import AboutSection from "@/components/sections/AboutSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProductsSection from "@/components/sections/ProductsSection";
import PureMasterpieces from "@/components/sections/PureMasterpieces";
import PureMasterpiecesed from "@/components/sections/PureMasterpiecesed";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <ContentSection />

      {/* Category/Feature Boxes */}
      <ProductsSection />

      {/* Products Section */}
      <PureMasterpieces />

      {/* Pure Masterpieces Section */}
      <PureMasterpiecesed/>
      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Collection Section */}
      <CollectionSection />

      {/* About Section */}
      <AboutSection />

      {/* Service Explanation Section */}
      <ServiceSection />
    </div>
  );
}
