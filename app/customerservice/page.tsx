"use client";
import React from "react";
import { CustomerServiceHeroSection } from "@/components/customerservice/CustomerServiceHeroSection";
import FAQAccordion from "@/components/customerservice/FAQAccordionSection";
import ContactSpecialist from "@/components/customerservice/SpecialistSection";
import ContactFormSection from "@/components/customerservice/ContactFormSection";
import CardWrapper from "@/components/cardwrapper";

export default function CustomerService() {
  return (
    <CardWrapper>
      <CustomerServiceHeroSection />
      <FAQAccordion />
      <ContactSpecialist />
      <ContactFormSection />
    </CardWrapper>
  );
}
