import { ArrowUpRight, ChevronLeft } from 'lucide-react';
import React from 'react'
import { Product } from '@/types/product';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function CollectionProductHeader({product}: {product: Product}) {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10 bg-black/20 border-b border-white/10 mt-20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-[0.2em]">
            {product.name}
          </div>

          <div className="flex items-center space-x-4 text-sm font-light tracking-wider">
            <button className="text-ternary transition-colors">
              PRODUCT INFO
            </button>
            <button className="text-ternary transition-colors">
              IMPRESSIONS
            </button>
            <button className="text-ternary transition-colors">
              ORDER SAMPLE
            </button>
            <button className="text-ternary transition-colors">
              CONFIGURE & ORDER
            </button>
          </div>
        </nav>
      </header>
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0">
          <Image src={product.image} alt={product.name} fill />
        </div>
      </div>
    </div>
  );
}
