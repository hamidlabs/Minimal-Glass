"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, FacebookIcon, InstagramIcon, XIcon } from "lucide-react";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fullscreen Overlay Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background text-white flex flex-col justify-between p-8">
          {/* Top Right Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-primary"
          >
            <XIcon size={32} />
          </button>

          {/* Navigation */}

          <nav className="mt-12 text-sm mx-auto grid grid-cols-2">
            <div className="flex gap-20 mb-5 ">
              <div className=" text-4xl font-light leading-relaxed mt-12 flex flex-col space-y-6 md:space-y-0">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-500 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/collection"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  Collection
                </Link>
                <Link
                  href="/impression"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  Discover
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>

                <div className="space-y-3">
                  <p className="font-semibold text-sm text-gray-400 mt-3">Follow us</p>
                  <div className="flex space-x-4 text-gray-400">
                    <a href="#">
                      <LinkedinIcon size={18} />
                    </a>
                    <a href="#">
                      <FacebookIcon size={18} />
                    </a>
                    <a href="#">
                      <InstagramIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div>
                  <h4 className="font-semibold">Office Belgium</h4>
                  <p className="text-primary">+32 144 99 777</p>
                </div>
                <div>
                  <h4 className="font-semibold">Showroom Netherlands</h4>
                  <p className="text-primary">+31 6 42 22 07 95</p>
                  <p className="text-gray-400">By appointment only</p>
                </div>

                <div className="space-y-2">
                  <Link
                    href="/privacy"
                    onClick={() => setOpen(false)}
                    className="hover:text-primary"
                  >
                    Privacy statement
                  </Link>
                  <br />
                  <Link
                    href="/cookies"
                    onClick={() => setOpen(false)}
                    className="hover:text-primary"
                  >
                    Cookie policy
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Floating Circle Menu Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Button
          onClick={() => setOpen(!open)}
          className="w-20 h-20 rounded-full bg-primary/45 hover:bg-primary/80 text-white shadow-lg flex flex-col items-center justify-center"
        >
          <Image
            src="/brand/navbar-logo.png"
            alt="menu"
            width={30}
            height={30}
          />
          <span className="text-sm font-semibold underline">MENU</span>
        </Button>
      </div>
    </>
  );
}
