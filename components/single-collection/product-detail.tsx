"use client";

import { Separator } from "@/components/ui/separator";
import { useProductStore } from "@/store/product-store";
import { useParams } from "next/navigation";
import CardWrapper from "../cardwrapper";
export default function ProductDetails() {
  const { products } = useProductStore();
  const params = useParams();
  const slug = params.slug;
  const product = products.find((product) => product.slug === slug);

  if (!product) return <div>Product not found</div>;

  return (
    <CardWrapper>
      <div className="bg-background py-12 ">
      {/* Product Information */}
      <section className="">
        <h2 className="text-xl font-semibold mb-4">Product information</h2>
        <p className="text-ternary leading-relaxed">{product.description}</p>
      </section>


      {/* Technical specifications + Model */}
      <div className="grid md:grid-cols-2  mt-12">
        {/* Technical specifications */}
        <div className="bg-background border-t">
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">
              Technical specifications
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Collection</div>
                <div>{product.collection}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Color Name</div>
                <div>{product.color}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Weave</div>
                <div>{product.glassType?.type}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Width</div>
                <div>{product.dimensions?.width}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Weight</div>
                <div>{product.glassType?.thickness}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Minimal Size</div>
                <div>{product.dimensions?.standardSizes?.[0]}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Maximal Size</div>
                <div>{product.dimensions?.standardSizes?.[2]}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Pricing</div>
                <div>{product.price}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Shipping</div>
                <div>{product.deliveryTime}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Certification</div>
                <div>{product.vatRate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Model */}
        <div className="bg-background border-t ">
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Model</h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Application</div>
                <div>
                  Wall Covering, Glass Lamination, Framing, Window treatments:
                  Roller Blinds, Sliding/Fixed Panels (shades or Blinds),
                  Sculpted Drapery
                </div> 
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">Usage</div>
                <div>Not recommended for outdoor use</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-medium text-gray-400">
                  Cleaning &amp; Care
                </div>
                <div>
                  Soft and Dry methods - Avoid scratching and applying weight -
                  Use of chemicals not recommended as it may damage the surface
                  of the glass
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </CardWrapper>
    
  );
}
