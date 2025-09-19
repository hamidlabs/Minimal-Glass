"use client";
import Image from "next/image";
import { ArrowDownNarrowWide, Heart, ListFilter } from "lucide-react";
import { useState, useMemo } from "react";
import ProductFilterSidebar from "./ProductFilterSidebar";

export default function ProductCollection() {
  // State for filters and sidebar visibility
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    collections: [],
    priceRange: [0, 2000],
    status: [],
    sortBy: "name", // name, price-asc, price-desc
  });

  // All products data
  const allProducts = [
    {
      id: 1,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      priceValue: 905,
      collection: "Essential collection",
      status: "In Stock",
      image: "brand/Mask-group.png",
    },
    {
      id: 2,
      name: "MODEL NO.50",
      price: "EUR 905/m² ex. VAT",
      priceValue: 905,
      collection: "Exclusive collection",
      status: "10-12 weeks",
      image: "brand/Mask-groups.png",
    },
    {
      id: 3,
      name: "MODEL NO.73",
      price: "EUR 905 M2",
      priceValue: 905,
      collection: "Essential collection",
      status: "In Stock",
      image: "brand/Mask-group.png",
    },
    {
      id: 4,
      name: "MODEL NO.50",
      price: "EUR 905/m² ex. VAT",
      priceValue: 905,
      collection: "Exclusive collection",
      status: "10-12 weeks",
      image: "brand/Mask-groups.png",
    },
    // Add more products as needed
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by collections
    if (filters.collections.length > 0) {
      filtered = filtered.filter((product) =>
        filters.collections.includes(product.collection)
      );
    }

    // Filter by status
    if (filters.status.length > 0) {
      filtered = filtered.filter((product) =>
        filters.status.includes(product.status)
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.priceValue >= filters.priceRange[0] &&
        product.priceValue <= filters.priceRange[1]
    );

    // Sort products
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case "name":
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Handle sort change
  const handleSortChange = () => {
    const sortOptions = ["name", "price-asc", "price-desc"];
    const currentIndex = sortOptions.indexOf(filters.sortBy);
    const nextIndex = (currentIndex + 1) % sortOptions.length;

    setFilters((prev) => ({
      ...prev,
      sortBy: sortOptions[nextIndex],
    }));
  };

  // Get sort label
  const getSortLabel = () => {
    switch (filters.sortBy) {
      case "price-asc":
        return "Price: Low to High";
      case "price-desc":
        return "Price: High to Low";
      case "name":
      default:
        return "Name: A to Z";
    }
  };

  return (
    <section className="bg-background relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Filter Sidebar */}
        <ProductFilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          onFilterChange={handleFilterChange}
          products={allProducts}
        />

        {/* Overlay for mobile */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        {/* Header Section */}
        <div>
          <div className="flex items-center justify-between font-gifilika text-4xl font-light">
            <h2>Collection</h2>
            <h2>{filteredProducts.length} Products</h2>
          </div>

          <div className="flex items-center justify-between mt-7">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-3 hover:text-ternary transition-colors"
            >
              <ListFilter />
              <h2>Filter</h2>
            </button>

            <button
              onClick={handleSortChange}
              className="flex items-center gap-3 hover:text-ternary transition-colors"
            >
              <ArrowDownNarrowWide />
              <div className="text-left">
                <h2>Sort by</h2>
                <span className="text-xs text-gray-500 block">
                  {getSortLabel()}
                </span>
              </div>
            </button>
          </div>

          <div className="border mt-3" />

          {/* Active filters display */}
          {(filters.collections.length > 0 || filters.status.length > 0) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.collections.map((collection) => (
                <span
                  key={collection}
                  className="bg-ternary text-background px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {collection}
                  <button
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        collections: prev.collections.filter(
                          (c) => c !== collection
                        ),
                      }))
                    }
                    className="hover:text-red-400"
                  >
                    ×
                  </button>
                </span>
              ))}

              {filters.status.map((status) => (
                <span
                  key={status}
                  className="bg-ternary text-background px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {status}
                  <button
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        status: prev.status.filter((s) => s !== status),
                      }))
                    }
                    className="hover:text-red-400"
                  >
                    ×
                  </button>
                </span>
              ))}

              <button
                onClick={() =>
                  setFilters({
                    collections: [],
                    priceRange: [0, 2000],
                    status: [],
                    sortBy: "name",
                  })
                }
                className="text-sm text-gray-500 hover:text-ternary underline"
              >
                Clear all
              </button>
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
                      {product.price}
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
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mt-5 font-medium text-[#F0E6E299] z-10">
                      {product.collection}
                      <div>
                        <span>|</span>
                        <span className="ml-2 text-[#F0E6E2]">
                          {product.status}
                        </span>
                      </div>
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
