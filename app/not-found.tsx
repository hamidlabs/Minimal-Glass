"use client"
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import NotFoundHeroSection from '@/components/shared/NotFoundHeroSection'
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <NotFoundHeroSection />
      <Footer />
    </div>
  );
}

