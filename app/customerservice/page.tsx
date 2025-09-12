
"use client";
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import { CustomerServiceHeroSection } from '@/components/customerservice/CustomerServiceHeroSection'
import FAQAccordion from '@/components/customerservice/FAQAccordionSection'
import ContactSpecialist from '@/components/customerservice/SpecialistSection'
import ContactFormSection from '@/components/customerservice/ContactFormSection'
import Footer from '@/components/shared/Footer'

export default function CustomerService() {
  return (
      <div className='min-h-screen bg-background text-foreground'>
          <Navbar />
          <CustomerServiceHeroSection />
          <FAQAccordion />
          <ContactSpecialist />
          <ContactFormSection />
          <Footer/>
    </div>
  )
}
