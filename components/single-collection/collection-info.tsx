import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  // State for all selections
  const [selectedDimensionSize, setSelectedDimensionSize] = useState("");
  const [selectedGlassType, setSelectedGlassType] = useState("");
  const [selectedGlassColor, setSelectedGlassColor] = useState("");
  const [selectedGlassThickness, setSelectedGlassThickness] = useState("");
  const [selectedGlassFinishing, setSelectedGlassFinishing] = useState("");
  const [selectedPolishing, setSelectedPolishing] = useState("");
  const [selectedCornerFinishing, setSelectedCornerFinishing] = useState("");
  const [selectedSideFinishing, setSelectedSideFinishing] = useState("");
  const [selectedCutOuts, setSelectedCutOuts] = useState("");
  const [selectedMeshColor, setSelectedMeshColor] = useState("");
  const [selectedMeshDirection, setSelectedMeshDirection] = useState("");

  // Dynamic options from your product store data
  const allGlassTypes = [
    "Normal glass",
    "Tempered glass",
    "Laminated glass",
    "Low-E glass",
    "Safety glass",
    "Float glass",
    "Acoustic glass",
    "Standard glass",
    "Designer glass",
    "Premium glass",
    "Multi-purpose glass",
    "Tinted glass",
  ];
  const allGlassColors = [
    "Clear glass",
    "Silver tinted",
    "Dark grey",
    "Gold tinted",
    "Black tinted",
    "Ultra clear",
    "Cardinal red",
    "Champagne gold",
    "Dark bronze",
    "Crystal clear",
  ];
  const allGlassThickness = [
    "5 mm",
    "6 mm",
    "8 mm",
    "8.5 mm (4 / 0.5 / 4)",
    "10 mm (5 / 1.52 / 5)",
    "12 mm (6 / 1.52 / 6)",
    "14 mm (7 / 2.28 / 7)",
    "15 mm (8 / 2.28 / 8)",
  ];

  // Glass treatment options from your actual data
  const allGlassTreatmentOptions = [
    "Standard process",
    "UV Etching",
    "No-add-on with technology/technique",
    "No-add Ink-tech",
    "No-add with",
    "Anti-glare",
    "UV Protection",
    "Premium coating",
    "Gold leaf application",
    "Anti-reflective",
    "Privacy coating",
    "Energy efficient",
    "Solar control",
    "Basic",
    "Fire resistant",
    "Sound dampening",
    "Polished edges",
    "Beveled edges",
    "Standard cut",
    "Sound reduction",
    "Stain resistant",
    "Easy clean",
    "Luxury finish",
    "Gold leafing",
    "Luxury texture",
    "Designer coating",
    "Multi-coating",
    "All-purpose",
    "Standard versatile",
  ];

  // Mesh options from your data
  const allMeshColors = [
    "Koper",
    "Silver",
    "Black",
    "Bronze",
    "White",
    "Cardinal red",
  ];
  const allMeshPatterns = [
    "Vertical",
    "Horizontal",
    "Diamond",
    "Woven",
    "Square",
    "Fine weave",
    "Luxury weave",
    "Multi-directional",
    "Textured",
  ];

  const formatVatAmount = (price: number, vatRate: number = 0.21) => {
    return (price * vatRate).toFixed(2);
  };

  return (
    <div className="space-y-6 text-ternary">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-light tracking-wide font-gifilka">
          {product.name}
        </h1>
        <span className="text-xs text-white/55">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <p className="text-xs text-white/55 tracking-wider flex items-center gap-3">
        PRICE FROM EUR
        <span className="text-ternary">
          {product.price.toLocaleString()}.00
        </span>
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="outline" size="sm">
          Product information
        </Button>
        <Button variant="white" size="sm">
          Order Sample
        </Button>
      </div>

      {/* Accordions */}
      <div className="space-y-0">
        {/* Dimensions */}
        {product.dimensions && (
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="dimensions" className="border-none">
                <AccordionTrigger className="text-ternary text-lg hover:no-underline bg-accent/30">
                  Dimensions
                </AccordionTrigger>
                <AccordionContent className="pb-4 bg-accent/30">
                  <div className="space-y-3">
                    <div className="relative">
                      <select
                        className="w-full text-ternary  border-b border-gray-600 rounded px-3 py-2 text-sm appearance-none pr-10 focus:outline-none focus:border-gray-400"
                        value={
                          selectedDimensionSize ||
                          product.dimensions.standardSizes[0]
                        }
                        onChange={(e) =>
                          setSelectedDimensionSize(e.target.value)
                        }
                      >
                        {product.dimensions.standardSizes.map((size) => (
                          <option
                            key={size}
                            value={size}
                            className="bg-gray-800"
                          >
                            {size} - {product.dimensions.type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
                          <span className="text-xs">📐</span>
                        </div>
                        <span className="text-sm">
                          {product.dimensions.width} MM
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
                          <span className="text-xs">📏</span>
                        </div>
                        <span className="text-sm">
                          {product.dimensions.height} MM
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* Glass Type */}
        {product.glassType && (
          <div className="border-b border-gray-800">
            <Accordion type="single" collapsible>
              <AccordionItem value="glass-type" className="border-none">
                <AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
                  Glass type
                </AccordionTrigger>
                <AccordionContent className="pb-4 space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">
                      Type
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
                        value={selectedGlassType || product.glassType.type}
                        onChange={(e) => setSelectedGlassType(e.target.value)}
                      >
                        {allGlassTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-gray-800"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                        Standard
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">
                      Color
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
                        value={selectedGlassColor || product.glassType.color}
                        onChange={(e) => setSelectedGlassColor(e.target.value)}
                      >
                        {allGlassColors.map((color) => (
                          <option
                            key={color}
                            value={color}
                            className="bg-gray-800"
                          >
                            {color}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                        Standard
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">
                      Thickness
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
                        value={
                          selectedGlassThickness || product.glassType.thickness
                        }
                        onChange={(e) =>
                          setSelectedGlassThickness(e.target.value)
                        }
                      >
                        {allGlassThickness.map((thickness) => (
                          <option
                            key={thickness}
                            value={thickness}
                            className="bg-gray-800"
                          >
                            {thickness}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                        Standard
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* Glass Treatment */}
        {product.glasstreatment && (
          <div className="border-b border-gray-800">
            <Accordion type="single" collapsible>
              <AccordionItem value="glass-treatment" className="border-none">
                <AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
                  Glass treatment
                </AccordionTrigger>
                <AccordionContent className="pb-4 space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">
                      Treatment Option
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
                        value={
                          selectedGlassFinishing ||
                          product.glasstreatment.selected
                        }
                        onChange={(e) =>
                          setSelectedGlassFinishing(e.target.value)
                        }
                      >
                        {product.glasstreatment.options.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="bg-gray-800"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                        Standard
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* Mesh */}
        {product.mesh && product.mesh.material !== "None" && (
          <div className="border-b border-gray-800">
            <Accordion type="single" collapsible>
              <AccordionItem value="mesh" className="border-none">
                <AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
                  Mesh
                </AccordionTrigger>
                <AccordionContent className="pb-4 space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">
                      Colour
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
                        value={selectedMeshColor || "Koper"}
                        onChange={(e) => setSelectedMeshColor(e.target.value)}
                      >
                        {allMeshColors.map((color) => (
                          <option
                            key={color}
                            value={color}
                            className="bg-gray-800"
                          >
                            {color}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                        Standard
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">
                      Mesh direction
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm text-white appearance-none pr-10"
                        value={selectedMeshDirection || product.mesh.pattern}
                        onChange={(e) =>
                          setSelectedMeshDirection(e.target.value)
                        }
                      >
                        {allMeshPatterns.map((direction) => (
                          <option
                            key={direction}
                            value={direction}
                            className="bg-gray-800"
                          >
                            {direction}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                        Standard
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* Dimensional Drawing */}
        {product.dimensionalDrawing && product.dimensionalDrawing.available && (
          <div className="border-b border-gray-800">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="dimensional-drawing"
                className="border-none"
              >
                <AccordionTrigger className="text-gray-400 text-sm py-4 hover:no-underline">
                  Dimensional drawing
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Due to the complexity of your application, you need to
                      upload a dimensional drawing. Based on this drawing, we
                      will determine the final price. Any increase or decrease
                      in price will be settled afterwards.
                    </p>

                    <div className="relative">
                      <div className="flex items-center gap-3 p-3 border border-gray-700 rounded bg-transparent">
                        <div className="text-gray-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Field name"
                          className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
                          readOnly
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full text-xs px-4 py-1 border-gray-600 hover:bg-gray-800"
                        >
                          Browse
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Select a JPG, JPEG, PNG, PDF, DWG, or DXF file
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>

      {/* Pricing */}
      <div className="text-right space-y-1 pt-6">
        <p className="text-xs text-gray-400">Excl. VAT & delivery costs</p>
        <p className="text-4xl font-light">
          {product.price.toLocaleString()}
          <sup className="text-lg">.00</sup>
        </p>
        <p className="text-xs text-gray-400">
          {Math.round((product.vatRate || 0.21) * 100)}% VAT: €{" "}
          {formatVatAmount(product.price, product.vatRate)}
        </p>
      </div>

      {/* Add to Cart Button */}
      <Button className="w-full rounded-full bg-white text-black hover:bg-gray-200 py-3 font-medium">
        Add to Cart
      </Button>

      {/* Delivery Time */}
      <p className="text-xs text-gray-400 text-center">
        Made to order in {product.deliveryTime || "30 working days"}
      </p>
    </div>
  );
}
