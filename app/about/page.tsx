"use client";
import React from "react";

import HeroSectionAbout from "@/components/about/HeroSectionAbout";
import ContentSectionAbout from "@/components/about/ContentSectionAbout";
import ServiceSection from "@/components/sections/ServiceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContentSection from "@/components/sections/ContentSection";
import DutchDesignSection from "@/components/sections/DutchDesignSection";
import BrandSectionAbout from "@/components/about/BrandSectionAbout";
import TeamSectionAbout from "@/components/about/TeamSectionAbout";
import CardWrapper from "@/components/cardwrapper";

export default function page() {
  return (
    <CardWrapper>
      <HeroSectionAbout />
      <ContentSectionAbout />
      <ServiceSection />
      <TestimonialSection />
      <ContentSection />
      <DutchDesignSection />
      <BrandSectionAbout />
      <TeamSectionAbout />
    </CardWrapper>
  );
}
