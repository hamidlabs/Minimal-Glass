import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, User, ShoppingCart, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-white relative">
      <header
        className={cn(
          "bg-[#1A1A1A] border-b border-gray-800 fixed top-0 left-0 right-0 z-50",
          isMenuOpen ? "bg-[#F0E6E2] text-black" : ""
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation (hidden on mobile) */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className={cn(
                  "text-primary hover:text-white transition-colors text-sm font-medium",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
              >
                MINIMAL GLASS
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-white transition-colors text-sm font-medium",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
              >
                COLLECTION
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-white transition-colors text-sm font-medium",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
              >
                SAMPLES
              </a>
            </nav>

            {/* Center Logo */}
            <div
              className={cn(
                "text-xl sm:text-2xl font-bold text-primary",
                isMenuOpen ? "text-black" : ""
              )}
            >
              M
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              {/* Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <div className="flex flex-col space-y-1">
                    <div className="w-5 h-0.5 bg-current"></div>
                    <div className="w-5 h-0.5 bg-current"></div>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Mobile / Desktop Menu */}
        <div
          className={cn(
            "absolute left-0 right-0 top-full bg-[#F0E6E2] text-gray-900 border-t border-gray-300 shadow-lg overflow-hidden transition-all duration-500 ease-in-out",
            isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Section 1 */}
              <nav className="flex flex-col  text-2xl font-light font-[Gifilka] text-primary md:text-3xl leading-relaxed sm:space-y-2">
                <a
                  href="/"
                  className="text-primary hover:underline transition-colors py-1"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-primary hover:underline transition-colors py-1"
                >
                  Discover
                </a>
                <a
                  href="#"
                  className="text-primary hover:underline transition-colors py-1"
                >
                  Collection
                </a>
                <a
                  href="about"
                  className="text-primary hover:underline transition-colors py-1"
                >
                  About us
                </a>
               
              </nav>

              {/* Section 2 */}
              <div>
                <h3 className="text-sm font-medium mb-3 flex items-center ">
                  Popular models
                  <ChevronDown className="h-4 w-4 ml-1" />
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm text-secondary">
                  {[
                    "Model no. 74",
                    "Model no. 2",
                    "Model no. 56",
                    "Model no. 34",
                    "Model no. 80",
                  ].map((model) => (
                    <li key={model}>
                      <a href="#" className="hover:text-primary">
                        {model}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-sm font-medium mb-3 flex items-center">
                  Customer service
                  <ChevronDown className="h-4 w-4 ml-1" />
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm text-secondary">
                  {[
                    "Contact us",
                    "FAQ",
                    "Order process",
                    "Payment & shipment",
                    "Warranty",
                    "Become a dealer",
                    "Request a quote",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-primary">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-sm font-medium mb-3">Privacy statement</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm text-secondary">
                  <li>
                    <a href="#" className="hover:text-primary">
                      General terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Cookie settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
