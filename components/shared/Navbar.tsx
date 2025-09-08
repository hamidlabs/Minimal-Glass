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
    <div className=" text-white">
      <header
        className={cn(
          "bg-[#1A1A1A] border-b border-gray-800",
          isMenuOpen ? "bg-[#F0E6E2]" : ""
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-primary hover:text-white transition-colors text-sm font-medium"
              >
                MINIMAL GLASS
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-white transition-colors text-sm font-medium",
                  isMenuOpen ? "text-black" : ""
                )}
              >
                COLLECTION
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-white transition-colors text-sm font-medium",
                  isMenuOpen ? "text-black" : ""
                )}
              >
                SAMPLES
              </a>
            </nav>

            {/* Center Logo */}
            <div className="text-2xl font-bold text-primary">A</div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              {/* <div className="hidden md:flex items-center text-gray-300 text-sm">
                <span className="text-white">EN</span>
                <span className="mx-1 text-[#F0E6E2]">|</span>
                <span className="text-[#F0E6E2]">NL</span>
              </div> */}

              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black" : ""
                )}
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black" : ""
                )}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black" : ""
                )}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              {/* Toggle Button for both mobile and desktop */}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-white",
                  isMenuOpen ? "text-black" : ""
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

          {/* Menu Content - Visible on both mobile and desktop when open */}
          {isMenuOpen && (
            <div className="mt-4 pb-8 border-t border-gray-800 bg-[#F0E6E2] text-gray-900">
              <div className="pt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <ul className="text-[#8F6A42] text-4xl leading-12 font-[Gifilka]">
                    <li>Home</li>
                    <li>Discover</li>
                    <li>Collections</li>
                    <li>About Us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4 flex items-center">
                    Popular models
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Model no. 74
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Model no. 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Model no. 56
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Model no. 34
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Model no. 80
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Model no. 74
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4 flex items-center">
                    Customer service
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Order process
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Payment & shipment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Warranty
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Become a dealer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Request a quote
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4">
                    Privacy statement
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        General terms and conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-700">
                        Cookie settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
