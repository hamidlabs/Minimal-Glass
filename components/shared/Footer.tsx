import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function MinimalGlassFooter() {
  return (
    <footer className="bg-[#F0E6E2]">
      <div className="mx-auto py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Mobile Only Layout - Matches Screenshot */}
        <div className="block sm:hidden">
          {/* Logo Section - Mobile */}
          <div className="flex justify-between items-center mb-8">
            <img
              src="brand/logoblack.png"
              alt="Minimal Glass Logo"
              className="h-16 w-auto"
            />

            <div className="text-xl sm:text-2xl font-bold text-primary">M</div>
          </div>

          {/* Navigation - Mobile */}
          <nav className="flex flex-col space-y-3 text-2xl font-light font-[Gifilka] mb-8">
            <a href="#" className="text-primary hover:underline">
              Home
            </a>
            <a href="#" className="text-primary hover:underline">
              Discover
            </a>
            <a href="#" className="text-primary hover:underline">
              Collection
            </a>
            <a href="about" className="text-primary hover:underline">
              About us
            </a>
            <a href="#" className="text-primary hover:underline">
              Contact
            </a>
          </nav>

          {/* Contact Information - Mobile Side by Side */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Office Belgium */}
            <div>
              <h3 className="text-black font-semibold text-sm mb-2">
                Office Belgium
              </h3>
              <div className="text-secondary text-xs leading-relaxed mb-2">
                <p>Corsendonk 9</p>
                <p>2560 Oud Turnhout</p>
              </div>
              <div className="space-y-1">
                <a
                  href="tel:+3214499777"
                  className="text-primary text-xs font-medium hover:underline block"
                >
                  +32 144 99 777
                </a>
                <a
                  href="mailto:info@minimalsteel.com"
                  className="text-secondary text-xs hover:underline block"
                >
                  info@minimalsteel.com
                </a>
              </div>
            </div>

            {/* Showroom Netherlands */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Showroom Nederland</h3>
              <div className="text-secondary text-xs leading-relaxed mb-2">
                <p>Beethovenstraat 530,</p>
                <p>1082 PR Amsterdam</p>
              </div>
              <div className="space-y-1">
                <a
                  href="tel:+31642220795"
                  className="text-primary text-xs font-medium hover:underline block"
                >
                  +31 6 4222 0795
                </a>
                <p className=" text-xs font-medium">Enkel op afspraak</p>
              </div>
            </div>
          </div>

          {/* Social Icons - Mobile */}
          <div className="flex gap-4 mb-8">
            <a href="#" className=" hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className=" hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="#" className=" hover:text-primary">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Bottom Section - Mobile */}
          <div className="space-y-4">
            {/* Legal Links - Mobile Stacked */}
            <div className="flex flex-col space-y-2 text-xs text-secondary">
              <a href="#" className="hover:text-secondary">
                Privacy statement
              </a>
              <a href="#" className="hover:text-secondary">
                Algemene voorwaarden
              </a>
              <a href="#" className="hover:text-secondary">
                Cookie Policy
              </a>
            </div>

            {/* Copyright - Mobile */}
            <div className="text-xs text-secondary space-y-1">
              <p>All rights reserved</p>
              <p>
                © 2025{" "}
                <span className="font-semibold">
                  Minimal Steel
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden sm:block">
          {/* Logo Section */}
          <div className="flex flex-row items-center justify-between mb-12 space-y-0">
            <img
              src="brand/logoblack.png"
              alt="Minimal Steel Logo"
              className="h-16 w-auto"
            />
            <div className="text-xl sm:text-2xl font-bold text-primary ">M</div>
          </div>

          <div className="border-t border-gray-300 pt-8"></div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-12 gap-12 mb-12">
            {/* Navigation */}
            <div className="col-span-4">
              <nav className="flex flex-col space-y-3 text-3xl font-light font-[Gifilka]">
                <a
                  href="#"
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
                <a
                  href="#"
                  className="text-primary hover:underline transition-colors py-1"
                >
                  Contact
                </a>
              </nav>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="#"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="#"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-span-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Office Belgium */}
                <div>
                  <h3 className="text-secondary font-semibold text-lg mb-3">
                    Office Belgium
                  </h3>
                  <div className="text-secondary text-sm leading-relaxed mb-3">
                    <p>Corsendonk 9</p>
                    <p>2560 Oud Turnhout</p>
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+3214499777"
                      className="text-primary text-sm font-medium hover:underline block transition-colors"
                    >
                      +32 144 99 777
                    </a>
                    <a
                      href="mailto:info@minimalsteel.com"
                      className="text-secondary text-sm hover:underline block transition-colors"
                    >
                      info@minimalsteel.com
                    </a>
                  </div>
                </div>

                {/* Showroom Netherlands */}
                <div>
                  <h3 className="text-secondary font-semibold text-lg mb-3">
                    Showroom Netherlands
                  </h3>
                  <div className="text-secondary text-sm leading-relaxed mb-3">
                    <p>Beethovenstraat 530</p>
                    <p>1082 PR Amsterdam</p>
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+31642220795"
                      className="text-primary text-sm font-medium hover:underline block transition-colors"
                    >
                      +31 6 4222 0795
                    </a>
                    <p className="text-secondary text-sm font-medium">
                      Enkel op afspraak
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 pt-6">
            <div className="flex flex-row justify-between items-center">
              {/* Legal Links */}
              <div className="flex space-x-4 text-sm text-secondary">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy statement
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  Algemene voorwaarden
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  Cookie Policy
                </a>
              </div>

              {/* Copyright */}
              <div className="text-sm text-secondary">
               
                <p>
                  © 2025{" "}
                  <span className="font-semibold">
                    Minimal Steel
                  </span>
                  . All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
