"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function ProductFilterSidebar({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  products,
}) {
  // Toggle helper
  const toggleValue = (list, value) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const handleCollectionChange = (value) => {
    onFilterChange({
      ...filters,
      collections: toggleValue(filters.collections, value),
    });
  };

  const handleStatusChange = (value) => {
    onFilterChange({
      ...filters,
      status: toggleValue(filters.status, value),
    });
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(e.target.value, 10);
    onFilterChange({ ...filters, priceRange: newRange });
  };

  const clearFilters = () => {
    onFilterChange({
      collections: [],
      status: [],
      priceRange: [0, 2000],
      sortBy: "name",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="bg-[#F0E6E2] text-background w-[280px] sm:w-[320px] p-5"
      >
        <SheetHeader>
          <SheetTitle className="text-lg font-light flex justify-between items-center text-background">
            Filters
            <button onClick={clearFilters} className="text-xs">
              Clear filters
              <div className="border-b"></div>
            </button>
          </SheetTitle>
        </SheetHeader>

        {/* Collection */}
        <div className="mt-6">
          <h3 className="text-sm mb-2">Collection</h3>
          <div className="flex flex-wrap gap-2">
            {["Essential collection", "Exclusive collection"].map((col) => (
              <Button
                key={col}
                variant={
                  filters.collections.includes(col) ? "default" : "secondary"
                }
                size="sm"
                className={`rounded-full text-xs ${
                  filters.collections.includes(col)
                    ? "bg-white text-accent"
                    : "border-gray-600 text-gray-300 hover:bg-zinc-800"
                }`}
                onClick={() => handleCollectionChange(col)}
              >
                {col}
                {filters.collections.includes(col) && (
                  <X className="w-3 h-3 ml-1" />
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mt-6">
          <h3 className="text-sm mb-2">Status</h3>
          <div className="flex flex-wrap gap-2">
            {["In Stock", "10-12 weeks"].map((st) => (
              <Button
                key={st}
                variant={filters.status.includes(st) ? "default" : "outline"}
                size="sm"
                className={`rounded-full text-xs ${
                  filters.status.includes(st)
                    ? "bg-white text-black"
                    : "border-gray-600 text-gray-300 hover:bg-zinc-800"
                }`}
                onClick={() => handleStatusChange(st)}
              >
                {st}
                {filters.status.includes(st) && <X className="w-3 h-3 ml-1" />}
              </Button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mt-6">
          <h3 className="text-sm mb-2">Price Range (EUR)</h3>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-20 bg-zinc-900 border border-gray-600 rounded px-2 py-1 text-xs"
            />
            <span>-</span>
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-20 bg-zinc-900 border border-gray-600 rounded px-2 py-1 text-xs"
            />
          </div>
        </div>

        {/* Product Count */}
        <div className="mt-8">
          <p className="text-sm text-gray-400">
            Showing {products.length} products
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
