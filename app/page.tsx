"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ShoppingCart, User, ArrowRight, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import Navbar from "@/components/shared/Navbar";

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [testimonialCurrent, setTestimonialCurrent] = useState(0);
  const [testimonialCount, setTestimonialCount] = useState(0);

  const categories = [
    { name: "Glass", id: "glass" },
    { name: "Meshes", id: "meshes" },
    { name: "Fabrics", id: "fabrics" },
  ];

  const testimonials = [
    {
      quote: "Alleen maar lof voor de hoge kwaliteit van 'Minimal Glass'",
      author: "John Doe from Antwerpen, BE",
    },
    {
      quote: "Exceptional craftsmanship and attention to detail in every piece",
      author: "Sarah Johnson from Amsterdam, NL",
    },
    {
      quote: "The most beautiful glass installations we've ever seen",
      author: "Michael Chen from Brussels, BE",
    },
    {
      quote: "Outstanding service and premium quality products",
      author: "Emma Wilson from Rotterdam, NL",
    },
    {
      quote: "Minimal Glass exceeded all our expectations completely",
      author: "David Brown from Ghent, BE",
    },
  ];

  const products = [
    {
      id: 1,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      collection: "Essential collection",
      status: "In Stock",
    },
    {
      id: 2,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      collection: "Essential collection",
      status: "In Stock",
    },
    {
      id: 3,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      collection: "Essential collection",
      status: "In Stock",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!testimonialApi) {
      return;
    }

    setTestimonialCount(testimonialApi.scrollSnapList().length);
    setTestimonialCurrent(testimonialApi.selectedScrollSnap() + 1);

    testimonialApi.on("select", () => {
      setTestimonialCurrent(testimonialApi.selectedScrollSnap() + 1);
    });
  }, [testimonialApi]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-black border-b border-gray-800">
        {/* Contact Info */}
        <div className="absolute top-8 left-8 text-sm text-gray-400 space-y-1 flex gap-10">
          <div className="text-white">
            NL: <span className="text-[#8F6A42]">31 (0)164220795</span>
          </div>
          <div className="text-white">
            BE: <span className="text-[#8F6A42]">+32 (0)164 99 777</span>
          </div>
        </div>

        <Carousel className="h-full" setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <div className="flex items-center justify-center min-h-[650px] px-8">
                <div className="container mx-auto">
                  <div className="">
                    {/* Right Side - Content */}
                    <div className="text-left bg-[#444444] p-8 relative h-[400px] ml-38 flex items-center">
                      <div>
                        <div className="w-[300px] ml-24">
                          <h2 className="text-xl md:text-2xl font-light text-[#F0E6E2] mb-6 leading-tight ">
                            The most elegant glass you'll ever see
                          </h2>
                          <p className="text-[#F0E6E2] mb-8 text-[14px] leading-relaxed max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              size="xs"
                              className="bg-white text-[8px] text-black hover:bg-gray-100 px-4 py-3 rounded-full"
                            >
                              Discover our collection
                            </Button>
                            <Button
                              variant="outline"
                              size="xs"
                              className="border-gray-400 text-[8px] text-white hover:bg-white hover:text-black px-4 py-3 rounded-full bg-transparent"
                            >
                              Experience the beauty
                            </Button>
                          </div>
                          <div className="absolute bottom-20 right-24 flex items-center space-x-2 text-white">
                            <button
                              onClick={() =>
                                api?.scrollTo(
                                  current === 1 ? count - 1 : current - 2
                                )
                              }
                              className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                            >
                              {current}
                            </button>
                            <div className="w-8 h-0.5 bg-gray-400"></div>
                            <button
                              onClick={() =>
                                api?.scrollTo(current === count ? 0 : current)
                              }
                              className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                            >
                              {count}
                            </button>
                          </div>
                        </div>

                        {/* circle */}
                        <div className="flex items-center justify-center absolute -top-[25px] -left-[25px]">
                          <div className="h-[400px] w-[400px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/20"></div>
                        </div>
                        <img
                          src="brand/logo.png"
                          alt=""
                          className="absolute top-[20%] -left-[128px] h-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex items-center justify-center min-h-[650px] px-8">
                <div className="container mx-auto">
                  <div className="">
                    {/* Right Side - Content */}
                    <div className="text-left bg-[#444444] p-8 relative h-[400px] ml-38 flex items-center">
                      <div>
                        <div className="w-[300px] ml-24">
                          <h2 className="text-xl md:text-2xl font-light text-[#F0E6E2] mb-6 leading-tight font-[Giplika]">
                            The most elegant glass you'll ever see
                          </h2>
                          <p className="text-[#F0E6E2] mb-8 text-[14px] leading-relaxed max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              size="xs"
                              className="bg-white text-[8px] text-black hover:bg-gray-100 px-4 py-3 rounded-full"
                            >
                              Discover our collection
                            </Button>
                            <Button
                              variant="outline"
                              size="xs"
                              className="border-gray-400 text-[8px] text-white hover:bg-white hover:text-black px-4 py-3 rounded-full bg-transparent"
                            >
                              Experience the beauty
                            </Button>
                          </div>
                          <div className="absolute bottom-20 right-24 flex items-center space-x-2 text-white">
                            <button
                              onClick={() =>
                                api?.scrollTo(
                                  current === 1 ? count - 1 : current - 2
                                )
                              }
                              className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                            >
                              {current}
                            </button>
                            <div className="w-8 h-0.5 bg-gray-400"></div>
                            <button
                              onClick={() =>
                                api?.scrollTo(current === count ? 0 : current)
                              }
                              className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                            >
                              {count}
                            </button>
                          </div>
                        </div>

                        {/* circle */}
                        <div className="flex items-center justify-center absolute -top-[25px] -left-[25px]">
                          <div className="h-[400px] w-[400px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/20"></div>
                        </div>
                        <img
                          src="brand/logo.png"
                          alt=""
                          className="absolute top-[20%] -left-[128px] h-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex items-center justify-center min-h-[650px] px-8">
                <div className="container mx-auto">
                  <div className="">
                    {/* Right Side - Content */}
                    <div className="text-left bg-[#444444] p-8 relative h-[400px] ml-38 flex items-center">
                      <div>
                        <div className="w-[300px] ml-24">
                          <h2 className="text-xl md:text-2xl font-light text-[#F0E6E2] mb-6 leading-tight font-[Giplika]">
                            The most elegant glass you'll ever see
                          </h2>
                          <p className="text-[#F0E6E2] mb-8 text-[14px] leading-relaxed max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              size="xs"
                              className="bg-white text-[8px] text-black hover:bg-gray-100 px-4 py-3 rounded-full"
                            >
                              Discover our collection
                            </Button>
                            <Button
                              variant="outline"
                              size="xs"
                              className="border-gray-400 text-[8px] text-white hover:bg-white hover:text-black px-4 py-3 rounded-full bg-transparent"
                            >
                              Experience the beauty
                            </Button>
                          </div>
                          <div className="absolute bottom-20 right-24 flex items-center space-x-2 text-white">
                            <button
                              onClick={() =>
                                api?.scrollTo(
                                  current === 1 ? count - 1 : current - 2
                                )
                              }
                              className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                            >
                              {current}
                            </button>
                            <div className="w-8 h-0.5 bg-gray-400"></div>
                            <button
                              onClick={() =>
                                api?.scrollTo(current === count ? 0 : current)
                              }
                              className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                            >
                              {count}
                            </button>
                          </div>
                        </div>

                        {/* circle */}
                        <div className="flex items-center justify-center absolute -top-[25px] -left-[25px]">
                          <div className="h-[400px] w-[400px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/20"></div>
                        </div>
                        <img
                          src="brand/logo.png"
                          alt=""
                          className="absolute top-[20%] -left-[128px] h-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Content Section */}

      <section className="py-20 px-4 bg-second ">
        <div className="container mx-auto max-w-xl text-center">
          <p className="text-third text-lg font-normal md:text-xl leading-relaxed mb-8 text-pretty font-[Giplika]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary hover:text-[#BF8A42] transition-colors text-sm tracking-wide"
          >
            Discover our collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Category/Feature Boxes */}
      <section className="py-20 px-4 ">
        <div className="container mx-auto">
          <div className="flex  justify-center gap-8 mb-16">
            {/* Left - Section Label with decorative line */}
            <div className="flex items-center self-start justify-end">
              <div className="w-16 h-0.5 bg-gray-600 mr-2"></div>
              <div className="text-sm text-third tracking-wider">
                Our products
              </div>
            </div>

            {/* Center - Main Heading */}
            <div className="">
              <h2 className="text-xl md:text-xl w-[200px] font-light text-third leading-tight font-[Giplika]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
            </div>

            {/* Right - Description */}
            <div className="">
              <p className="text-[#F0E6E2]/40 text-sm w-[200px] leading-relaxed ">
                Minimal glass creates custom-made glass doors, room dividers and
                more cabinets in all shapes and sizes. Get inspired.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="bg-[#C4C4C4] border-gray-600  transition-colors duration-300 group"
              >
                <CardContent className="p-12 text-center">
                  <div className="w-8 h-8 mx-auto mb-8 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#BF8A42] rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-light text-white">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-0 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <Carousel className="w-full" setApi={setTestimonialApi}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[500px] bg-gray-600 rounded-lg overflow-hidden">
                    {/* Large background placeholder */}
                    <div className="w-full h-full bg-gray-600"></div>

                    {/* Dark overlay with testimonial */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-8">
                      <div className="flex items-end justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-4 leading-tight">
                            "{testimonial.quote}"
                          </h3>
                          <p className="text-[#BF8A42] text-sm">
                            {testimonial.author}
                          </p>
                        </div>

                        <div className="flex items-center space-x-2 text-white ml-8">
                          <button
                            onClick={() =>
                              testimonialApi?.scrollTo(
                                testimonialCurrent === 1
                                  ? testimonialCount - 1
                                  : testimonialCurrent - 2
                              )
                            }
                            className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                          >
                            {testimonialCurrent}
                          </button>
                          <div className="w-8 h-0.5 bg-gray-400"></div>
                          <button
                            onClick={() =>
                              testimonialApi?.scrollTo(
                                testimonialCurrent === testimonialCount
                                  ? 0
                                  : testimonialCurrent
                              )
                            }
                            className="text-lg hover:text-[#BF8A42] transition-colors cursor-pointer"
                          >
                            {testimonialCount}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-16">
            {/* Left - Section Label with decorative line */}
            <div className="flex items-center">
              <div className="w-16 h-0.5 bg-gray-600 mr-4"></div>
              <div className="text-sm text-gray-400 tracking-wider">
                Our collection
              </div>
            </div>

            {/* Center - Main Heading */}
            <div className="flex-1 px-8">
              <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
            </div>

            {/* Right - Description */}
            <div className="max-w-xs">
              <p className="text-gray-300 text-sm leading-relaxed">
                Minimal Glass creates custom-made glass doors, room dividers,
                and wine cabinets in all shapes and sizes. Get inspired.
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-[3/4] bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-400 opacity-80">
                    {/* Mesh pattern overlay */}
                    <div
                      className="w-full h-full opacity-60"
                      style={{
                        backgroundImage: `
                          linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.3) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.3) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.3) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.3) 76%, transparent 77%, transparent)
                        `,
                        backgroundSize: "8px 8px",
                      }}
                    ></div>
                  </div>

                  {/* Product Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded">
                      {product.collection} | {product.status}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{product.name}</h3>
                  <span className="text-gray-300 text-sm">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <div className="flex items-start justify-between mb-12">
            {/* Left - Section Label with decorative line */}
            <div className="flex items-center">
              <div className="w-16 h-0.5 bg-gray-600 mr-4"></div>
              <div className="text-sm text-gray-400 tracking-wider">
                About Minimal Glass
              </div>
            </div>

            {/* Center - Main Heading */}
            <div className="flex-1 px-8">
              <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-8">
                Minimal Glass, maximum results
              </h2>

              {/* Two Column Text Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 text-sm leading-relaxed">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sit sem eget ac
                    ipsum. Integer sit eu tempus tortor. Egestas vel velit amet
                    rhoncus ante ut rhoncus. Gravida ut amet molestie vulputate
                    ultrices proin vel eu tellus suscipit sit.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Facilisis
                    pellentesque arcu et sit mollis. Praesent at leo ultrices
                    eros cum eu. Praesent dictum sed arcu sed. Integer lectus
                    velit cras sed convallis sollicitudin. Integer eget. Nibh.
                  </p>
                </div>
              </div>

              {/* About Us Link */}
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center text-gray-300 hover:text-[#BF8A42] transition-colors text-sm tracking-wide"
                >
                  About us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Explanation Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          {/* Top Section with Large Number */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Large Number */}
            <div className="flex items-center justify-center">
              <div className="text-8xl md:text-9xl font-light text-[#BF8A42]">
                01
              </div>
            </div>

            {/* Gray Rectangles */}
            <div className="bg-gray-600 h-48 rounded"></div>
            <div className="bg-gray-500 h-48 rounded"></div>
          </div>

          {/* Services List with Border */}
          <div className="border border-purple-500/30 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Service Numbers */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-[#BF8A42] text-sm font-medium">01</span>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-2">
                      Dutch design
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-gray-400 text-sm font-medium">02</span>
                  <div>
                    <h3 className="text-gray-400 text-lg font-medium mb-2">
                      Creative
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-gray-400 text-sm font-medium">03</span>
                  <div>
                    <h3 className="text-gray-400 text-lg font-medium mb-2">
                      Handmade
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-gray-400 text-sm font-medium">04</span>
                  <div>
                    <h3 className="text-gray-400 text-lg font-medium mb-2">
                      Made to measure
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-gray-400 text-sm font-medium">05</span>
                  <div>
                    <h3 className="text-gray-400 text-lg font-medium mb-2">
                      Installation
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right Side - Service Descriptions */}
              <div className="space-y-6">
                <div className="text-gray-300 text-sm leading-relaxed">
                  <p>
                    Dutch Design by Bas Coppelmans combined with the hard work
                    and pride of our Belgian steelworkers. The best of both
                    worlds, because what's good doesn't have to come from far
                    away.
                  </p>
                </div>

                <div className="text-gray-300 text-sm leading-relaxed">
                  <p>
                    Bas, Chief Studio Design, always seeks the perfect balance
                    in minimalism and works unconventionally during his design
                    process. Sleek lines, airiness, and abundant light define
                    the doors of Minimal Glass.
                  </p>
                </div>

                <div className="text-gray-300 text-sm leading-relaxed">
                  <p>
                    Doors that give every room a powerful, luxurious appearance.
                    Timeless, pure, and always handcrafted to measure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dutch Design Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <div className="border border-purple-500/30 rounded-lg p-8">
            <div className="flex items-start justify-between">
              {/* Left - Section Label with decorative line */}
              <div className="flex items-center">
                <div className="w-16 h-0.5 bg-gray-600 mr-4"></div>
                <div className="text-sm text-gray-400 tracking-wider">
                  Design
                </div>
              </div>

              {/* Center - Main Content */}
              <div className="flex-1 px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Main Heading */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                      Dutch Design
                    </h2>

                    {/* Description Text */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Dutch Design by Bas Coppelmans combined with the hard work
                      and pride of our Belgian steelworkers. The best of both
                      worlds, because what's good doesn't have to come from far
                      away. Bas, Chief Studio Design, always seeks the perfect
                      balance in minimalism and works unconventionally during
                      his design process.
                    </p>
                  </div>

                  {/* Right Column - Secondary Heading */}
                  <div className="lg:text-right">
                    <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">
                      Hand made
                      <br />
                      in Belgium
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-900">
        {/* Top Footer Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Logo Section */}
              <div className="lg:col-span-1">
                <div className="border border-purple-500 p-4 inline-block mb-8">
                  <div
                    className="text-2xl font-light"
                    style={{ fontFamily: "serif" }}
                  >
                    <span className="italic">Minimal</span>
                    <div className="text-lg font-bold tracking-wider">
                      GLASS
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-3 mb-8">
                  <div>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#BF8A42] transition-colors"
                    >
                      Home
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#BF8A42] transition-colors"
                    >
                      Discover
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#BF8A42] transition-colors"
                    >
                      Collection
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#BF8A42] transition-colors"
                    >
                      About us
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#BF8A42] transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </nav>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#BF8A42] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.663.072-4.949.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#BF8A42] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#BF8A42] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#BF8A42] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Office Belgium */}
              <div className="lg:col-span-1">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Office Belgium
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>Corsendonk 9</div>
                  <div>2360 Oud Turnhout</div>
                  <div className="pt-2">
                    <div>+32 144 99 777</div>
                    <div>info@minimalsteel.com</div>
                  </div>
                </div>
              </div>

              {/* Showroom Netherlands */}
              <div className="lg:col-span-1">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Showroom Netherlands
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>Beethovenstraat 530,</div>
                  <div>1082 PR Amsterdam</div>
                  <div className="pt-2">
                    <div className="text-[#BF8A42]">+31 6 4222 0795</div>
                    <div className="text-gray-500">Appointment only</div>
                  </div>
                </div>
              </div>

              {/* Logo A */}
              <div className="lg:col-span-1 flex justify-end">
                <div className="text-4xl font-bold text-[#BF8A42]">A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="bg-gray-200 py-6 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-[#BF8A42] transition-colors">
                  Privacy statement
                </a>
                <a href="#" className="hover:text-[#BF8A42] transition-colors">
                  General terms and conditions
                </a>
                <a href="#" className="hover:text-[#BF8A42] transition-colors">
                  Cookie settings
                </a>
              </div>
              <div>© 2025 Minimal Steel. All rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
