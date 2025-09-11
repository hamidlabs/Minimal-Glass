"use client";
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import HeroSectionAbout from '@/components/about/HeroSectionAbout';
import ContentSectionAbout from '@/components/about/ContentSectionAbout';
import ServiceSection from '@/components/sections/ServiceSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ContentSection from '@/components/sections/ContentSection';
import DutchDesignSection from '@/components/sections/DutchDesignSection';
import BrandSectionAbout from '@/components/about/BrandSectionAbout';
import TeamSectionAbout from '@/components/about/TeamSectionAbout';
import Footer from '@/components/shared/Footer';


export default function page() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />
      <HeroSectionAbout />
      <ContentSectionAbout />
      <ServiceSection />
      <TestimonialSection />
      <ContentSection />
      <DutchDesignSection />
      <BrandSectionAbout />
      <TeamSectionAbout />
      <Footer />
    </div>
  )
}
