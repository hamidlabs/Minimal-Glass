
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, User, ShoppingCart, X, ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-ternary relative">
      <header
        className={cn(
          "bg-background border-b border-gray-700 fixed top-0 left-0 right-0 z-50",
          isMenuOpen ? "bg-background text-ternary" : ""
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation (hidden on mobile) */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className={cn(
                  "text-primary hover:text-ternary transition-colors text-sm font-medium",
                  isMenuOpen
                    ? "hover:text-ternary transition-colors text-sm font-medium"
                    : ""
                )}
              >
                MINIMAL GLASS
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-ternary transition-colors text-sm font-medium",
                  isMenuOpen
                    ? "hover:text-ternary transition-colors text-sm font-medium"
                    : ""
                )}
              >
                COLLECTION
              </a>
              <a
                href="#"
                className={cn(
                  "text-gray-300 hover:text-ternary transition-colors text-sm font-medium",
                  isMenuOpen
                    ? "hover:text-ternary transition-colors text-sm font-medium"
                    : ""
                )}
              >
                SAMPLES
              </a>
            </nav>

            {/* Center Logo */}
            <div
              className={cn(
                "text-xl sm:text-2xl font-bold text-primary",
                isMenuOpen ? "text-primary" : ""
              )}
            >
              A
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span
                className={`text-sm font-medium ${
                  isMenuOpen ? "text-ternary" : "text-ternary"
                }`}
              >
                EN
              </span>
              <span
                className={`text-sm font-medium ${
                  isMenuOpen ? "text-gray-500" : "text-gray-500"
                }`}
              >
                | NL
              </span>


              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-ternary",
                  isMenuOpen
                    ? "hover:text-ternary transition-colors text-sm font-medium"
                    : ""
                )}
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-ternary",
                  isMenuOpen
                    ? "hover:text-ternary transition-colors text-sm font-medium"
                    : ""
                )}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-ternary",
                  isMenuOpen
                    ? "hover:text-ternary transition-colors text-sm font-medium"
                    : ""
                )}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              {/* Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-300 hover:text-ternary",
                  isMenuOpen ? "text-black hover:text-black" : ""
                )}
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <div className="flex flex-col space-y-1">
                    <div className="w-5 h-0.5   bg-white"></div>
                    <div className="w-5 h-0.5 bg-white"></div>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

