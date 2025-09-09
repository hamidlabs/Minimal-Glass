import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function MinimalGlassFooter() {
  return (
    <footer className="bg-[#F0E6E2]">
      <div className="mx-auto py-7 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-12 sm:mb-16 space-y-4 sm:space-y-0">
          <img src="brand/logoblack.png" alt="Minimal Steel Logo" />
          <img src="brand/vector.png" alt="Decoration" />
        </div>

        <div className="border-t border-gray-300 pt-6 sm:pt-8"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Navigation */}
          <div className="md:col-span-5 lg:col-span-4">
            <nav className="flex flex-col space-y-3 sm:space-y-4 text-2xl sm:text-3xl font-light font-[Gifilka]">
              <a href="#" className="text-primary hover:underline">
                Home
              </a>
              <a href="#" className="text-primary hover:underline">
                Discover
              </a>
              <a href="#" className="text-primary hover:underline">
                Collection
              </a>
              <a href="#" className="text-primary hover:underline">
                About us
              </a>
              <a href="#" className="text-primary hover:underline">
                Contact
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-6">
              <a href="#" className="text-black hover:text-[#BF8A42]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-black hover:text-[#BF8A42]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-black hover:text-[#BF8A42]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Middle Column - Office Belgium */}
          <div className="md:col-span-3 lg:col-span-4 mt-8 sm:mt-0">
            <h3 className="text-black font-medium text-lg mb-2">
              Office Belgium
            </h3>
            <div className="text-gray-600 text-sm leading-relaxed mb-2">
              <p>Corsendonk 9</p>
              <p>2560 Oud Turnhout</p>
            </div>
            <div className="space-y-1">
              <a
                href="tel:+3214499777"
                className="text-[#BF8A42] text-sm hover:underline block"
              >
                +32 144 99 777
              </a>
              <a
                href="mailto:info@minimalsteel.com"
                className="text-gray-600 text-sm hover:underline block"
              >
                info@minimalsteel.com
              </a>
            </div>
          </div>

          {/* Right Column - Showroom Netherlands */}
          <div className="md:col-span-4 lg:col-span-4 mt-8 sm:mt-0">
            <h3 className="text-black font-medium text-lg mb-2">
              Showroom Netherlands
            </h3>
            <div className="text-gray-600 text-sm leading-relaxed mb-2">
              <p>Beethovenstraat 530,</p>
              <p>1082 PR Amsterdam</p>
            </div>
            <div className="space-y-1">
              <a
                href="tel:+31642220795"
                className="text-[#BF8A42] text-sm hover:underline block"
              >
                +31 6 4222 0795
              </a>
              <p className="text-[#1A1A1A] text-sm">Appointment only</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Left - Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">
                Privacy statement
              </a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">
                General terms and conditions
              </a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">
                Cookie settings
              </a>
            </div>

            {/* Right - Copyright */}
            <div className="text-sm text-gray-600">
              © 2025{" "}
              <span className="text-[#1A1A1A] font-medium">Minimal Steel</span>.
              All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
