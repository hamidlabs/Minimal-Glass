"use client";
import Image from "next/image";
import { ArrowDownNarrowWide, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useProductStore } from "@/store/product-store";
import ProductFilters from "./ProductFilters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductCollection() {
  const {
    filteredProducts,
    filters,
    sortBy,
    isLoading,
    setFilters,
    setSortBy,
    clearFilters,
    fetchProducts
  } = useProductStore();


  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  const handleSortChange = (value: string) => {
    setSortBy(value as any);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case "price-low":
        return "Price: Low to High";
      case "price-high":
        return "Price: High to Low";
      case "name-asc":
        return "Name: A to Z";
      case "name-desc":
        return "Name: Z to A";
      case "oldest":
        return "Oldest First";
      case "newest":
      default:
        return "Newest First";
    }
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).reduce((count, value) => {
      if (Array.isArray(value)) return count + value.length;
      return value ? count + 1 : count;
    }, 0);
  };

  const getActiveFilterTags = () => {
    const tags: Array<{ label: string; onRemove: () => void }> = [];

    filters.productTypes?.forEach(type => {
      tags.push({
        label: type,
        onRemove: () => setFilters({
          ...filters,
          productTypes: filters.productTypes?.filter(t => t !== type)
        })
      });
    });

    filters.collections?.forEach(collection => {
      tags.push({
        label: collection,
        onRemove: () => setFilters({
          ...filters,
          collections: filters.collections?.filter(c => c !== collection)
        })
      });
    });

    filters.applications?.forEach(app => {
      tags.push({
        label: app,
        onRemove: () => setFilters({
          ...filters,
          applications: filters.applications?.filter(a => a !== app)
        })
      });
    });

    filters.colors?.forEach(color => {
      tags.push({
        label: color,
        onRemove: () => setFilters({
          ...filters,
          colors: filters.colors?.filter(c => c !== color)
        })
      });
    });

    return tags;
  };

  if (isLoading) {
    return (
      <section className="bg-background relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <div>
          <div className="flex items-center justify-between font-gifilika text-4xl font-light">
            <h2>Collection</h2>
            <h2>{filteredProducts.length} Products</h2>
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex items-center justify-between mt-7">
            {/* Filter Button */}
            <ProductFilters />

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[200px]">
                <ArrowDownNarrowWide className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Best selling</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border mt-3" />

          {/* Active filters display */}
          {getActiveFiltersCount() > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {getActiveFilterTags().map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-2 bg-black text-white hover:bg-gray-800"
                >
                  {tag.label}
                  <button
                    onClick={tag.onRemove}
                    className="hover:text-red-400 ml-1"
                  >
                    ×
                  </button>
                </Badge>
              ))}

              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-accent rounded-none overflow-hidden transition-transform duration-300 hover:-translate-y-2 p-5"
              >
                {/* Product Image Container */}
                <div className="relative h-80 overflow-hidden">
                  {/* Product Info */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs text-ternary font-medium">
                      {product.name}
                    </h3>
                    <span className="text-[#F0E6E299] text-xs">
                      €{product.price}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="relative w-[200px] h-full mx-auto mt-5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Stock Status Badge */}
                    {!product.inStock && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="destructive" className="text-xs">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mt-5 font-medium text-[#F0E6E299] z-10">
                      {product.collection}
                      <div>
                        <span>|</span>
                        <span className="ml-2 text-[#F0E6E2]">
                          {product.color}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-[#F0E6E299]">
                      {product.applications.map((app, idx) => (
                        <span key={idx}>
                          {app}{idx < product.applications.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Heart className="mt-5 hover:fill-red-500 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                No products found
              </h3>
              <p className="text-gray-400">
                Try adjusting your filters to see more products
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
