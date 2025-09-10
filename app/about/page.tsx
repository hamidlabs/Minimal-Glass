"use client";
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import HeroSectionAbout from '@/components/about/HeroSectionAbout';


export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSectionAbout />
    </div>
  )
}
