
"use client";
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import { CustomerServiceSection } from '@/components/customerservice/CustomerServiceSection'

export default function CustomerService() {
  return (
      <div className='min-h-screen bg-background text-foreground'>
          <Navbar />
          <CustomerServiceSection />
    </div>
  )
}
