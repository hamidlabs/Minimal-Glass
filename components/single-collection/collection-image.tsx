'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Product } from '@/types/product'
import Image from 'next/image'

export default function CollectionImage({ product }: { product: Product }) {
  return (
    <div className="relative bg-accent p-10">
      <Dialog>
        {/* Image carousel as trigger */}
        <DialogTrigger asChild>
          <Carousel className="cursor-pointer">
            <CarouselContent>
              <CarouselItem className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="left-3" />
            <CarouselNext className="right-3" />
          </Carousel>
        </DialogTrigger>

        {/* When clicked -> open dialog */}
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      <p className="absolute left-1/2 transform -translate-x-1/2 text-sm tracking-wider text-white mt-4">
        1 — 1
      </p>
    </div>
  )
}
