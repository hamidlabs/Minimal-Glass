import React from 'react'
import { Button } from "@/components/ui/button";
import { Heart, User, ShoppingCart } from "lucide-react";
export default function HeaderSection() {
  return (
    <header className="bg-black border-b border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Left Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    MINIMAL GLASS
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    COLLECTION
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    SAMPLES
                  </a>
                </nav>
    
                {/* Center Logo */}
                <div className="text-2xl font-bold text-[#BF8A42]">A</div>
    
                {/* Right Icons */}
                <div className="flex items-center space-x-4">
                  {/* Language Selector */}
                  <div className="hidden md:flex items-center text-gray-300 text-sm">
                    <span className="text-white">EN</span>
                    <span className="mx-1">|</span>
                    <span>NL</span>
                  </div>
    
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <div className="flex flex-col space-y-1">
                      <div className="w-5 h-0.5 bg-current"></div>
                      <div className="w-5 h-0.5 bg-current"></div>
                      <div className="w-5 h-0.5 bg-current"></div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </header>
  )
}
