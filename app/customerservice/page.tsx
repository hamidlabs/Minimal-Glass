
"use client";
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import { CustomerServiceSection } from '@/components/customerservice/CustomerServiceSection'
import FAQAccordion from '@/components/customerservice/FAQAccordionSection'

export default function CustomerService() {
  return (
      <div className='min-h-screen bg-background text-foreground'>
          <Navbar />
          <CustomerServiceSection />
          <FAQAccordion />
    </div>
  )
}
