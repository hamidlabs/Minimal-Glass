import React from "react";
import {
  Instagram,
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function MinimalGlassFooter() {
  return (
    <footer className="bg-[#F0E6E2]">
      <div className="mx-auto py-7 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="flex items-center justify-between mb-16">
          <img
            src="brand/logoblack.png"
            alt="Minimal Steel Logo"
            className=""
          />
          <img src="brand/vector.png" alt="Decoration" className="" />
        </div>

                      <div className="border-t border-gray-300 pt-8"></div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left Column - Navigation */}
          <div className="md:col-span-5 lg:col-span-4">
            {/* Navigation */}
            {/* Navigation */}
            <nav className="container mx-auto ">
           
              
                <div className=" flex flex-col text-4xl font-light leading-12 font-[Gifilka]">
                  <a href="#" className="text-primary transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-primary transition-colors">
                    Discover
                  </a>
                  <a href="#" className="text-primary transition-colors">
                    Collection
                  </a>
                  <a href="#" className="text-primary transition-colors">
                    About us
                  </a>
                  <a href="#" className="text-primary transition-colors">
                    Contact
                  </a>
                </div>
            
            </nav>

            {/* Social Icons */}
            <div className="flex  space-x-4 mt-8 ">
              <a
                href="#"
                className="text-black hover:text-[#BF8A42] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-[#BF8A42] transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="text-black hover:text-[#BF8A42] transition-colors"
              >
                <Linkedin size={20} />
              </a>

              {/* Additional social icons would go here */}
            </div>
          </div>

          {/* Middle Column - Office Belgium */}
          <div className="md:col-span-3 lg:col-span-4">
            <div className="space-y-6">
              <h3 className="text-black font-medium text-lg">Office Belgium</h3>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>Corsendonk 9</p>
                <p>2560 Oud Turnhout</p>
              </div>
              <div className="space-y-2">
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
          </div>

          {/* Right Column - Showroom Netherlands */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="space-y-6">
              <h3 className="text-black font-medium text-lg">
                Showroom Netherlands
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>Beethovenstraat 530,</p>
                <p>1082 PR Amsterdam</p>
              </div>
              <div className="space-y-2">
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
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
              <span className="text-[#1A1A1A] font-medium">Minimal Steel</span>. All
              rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
