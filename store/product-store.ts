import { Product, ProductFilters, SortOption } from "@/types/product";
import { create } from "zustand";

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  filters: ProductFilters;
  sortBy: SortOption;
  isLoading: boolean;
  setFilters: (filters: ProductFilters) => void;
  setSortBy: (sort: SortOption) => void;
  clearFilters: () => void;
  applyFiltersAndSort: () => void;
  fetchProducts: () => Promise<void>;
}

const dummyProducts: Product[] = [
  {
    id: "1",
    slug: "model-no-01",
    name: "Model No.01",
    price: 905,
    image: "/products/Mask group.png",
    productType: "Mesh",
    collection: "Essential",
    applications: ["Wall covering", "Glass partitions"],
    color: "Silver White",
    description: "Premium mesh panel for modern interiors",
    inStock: true,
    dimensions: {
      type: "Square",
      width: 3200,
      height: 3200,
      standardSizes: ["3200 MM", "2400 MM", "1800 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Normal glass",
      color: "Clear glass",
      thickness: "8.5 mm (4 / 0.5 / 4)",
      treatment: "Standard",
    },
    glasstreatment: {
      options: [
        "Standard process",
        "UV Etching",
        "No-add-on with technology/technique",
        "No-add Ink-tech",
        "No-add with",
      ],
      selected: "Standard process",
    },
    mesh: {
      material: "Kevlar",
      pattern: "Vertical",
      finish: "Standard",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-01.pdf",
      description:
        "Complete technical specifications and installation guidelines",
    },
    vatRate: 0.21,
    deliveryTime: "30 working days",
  },
  {
    id: "2",
    slug: "model-no-73",
    name: "Model No.73",
    price: 905,
    image: "/products/Mask group-1.png",
    productType: "Mesh",
    collection: "Essential",
    applications: ["Window treatments"],
    color: "Inca Silver",
    description: "Elegant silver mesh screen",
    inStock: true,
    dimensions: {
      type: "Rectangle",
      width: 2400,
      height: 1800,
      standardSizes: ["2400 MM", "1800 MM", "1200 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Tempered glass",
      color: "Silver tinted",
      thickness: "6 mm",
      treatment: "Anti-glare",
    },
    glasstreatment: {
      options: ["Anti-glare", "UV Protection", "Standard process"],
      selected: "Anti-glare",
    },
    mesh: {
      material: "Stainless Steel",
      pattern: "Horizontal",
      finish: "Brushed",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-73.pdf",
      description: "Technical drawing with mesh specifications",
    },
    vatRate: 0.21,
    deliveryTime: "25 working days",
  },
  {
    id: "3",
    slug: "model-no-50",
    name: "Model No.50",
    price: 1200,
    image: "/products/Mask group-2.png",
    productType: "Glass",
    collection: "Exclusive",
    applications: ["Wall covering"],
    color: "Gold Mist",
    description: "Luxury glass panel with golden finish",
    inStock: false,
    dimensions: {
      type: "Square",
      width: 3000,
      height: 3000,
      standardSizes: ["3000 MM", "2500 MM", "2000 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Laminated glass",
      color: "Gold tinted",
      thickness: "10 mm (5 / 1.52 / 5)",
      treatment: "Premium coating",
    },
    glasstreatment: {
      options: ["Premium coating", "Gold leaf application", "Standard process"],
      selected: "Premium coating",
    },
    mesh: {
      material: "None",
      pattern: "None",
      finish: "None",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-50.pdf",
      description: "Luxury glass panel installation guide",
    },
    vatRate: 0.21,
    deliveryTime: "35 working days",
  },
  {
    id: "4",
    slug: "model-no-85",
    name: "Model No.85",
    price: 780,
    image: "/products/Mask group-3.png",
    productType: "Mesh",
    collection: "Essential",
    applications: ["Wall covering", "Glass partitions"],
    color: "Pearl Black",
    description: "Dark mesh panel for contemporary spaces",
    inStock: true,
    dimensions: {
      type: "Rectangle",
      width: 2800,
      height: 2000,
      standardSizes: ["2800 MM", "2000 MM", "1600 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Tinted glass",
      color: "Dark grey",
      thickness: "8 mm",
      treatment: "Anti-reflective",
    },
    glasstreatment: {
      options: ["Anti-reflective", "Privacy coating", "Standard process"],
      selected: "Anti-reflective",
    },
    mesh: {
      material: "Carbon Fiber",
      pattern: "Diamond",
      finish: "Matte Black",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-85.pdf",
      description: "Contemporary mesh panel specifications",
    },
    vatRate: 0.21,
    deliveryTime: "28 working days",
  },
  {
    id: "5",
    slug: "model-no-42",
    name: "Model No.42",
    price: 1450,
    image: "/products/Mask group-4.png",
    productType: "Glass",
    collection: "Exclusive",
    applications: ["Window treatments", "Glass partitions"],
    color: "Cardinal Red",
    description: "Premium red-tinted glass panel",
    inStock: true,
    dimensions: {
      type: "Custom",
      width: 3500,
      height: 2500,
      standardSizes: ["3500 MM", "3000 MM", "2500 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Low-E glass",
      color: "Cardinal red",
      thickness: "12 mm (6 / 1.52 / 6)",
      treatment: "Energy efficient",
    },
    glasstreatment: {
      options: ["Energy efficient", "Solar control", "Standard process"],
      selected: "Energy efficient",
    },
    mesh: {
      material: "None",
      pattern: "None",
      finish: "None",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-42.pdf",
      description: "Premium energy-efficient glass specifications",
    },
    vatRate: 0.21,
    deliveryTime: "40 working days",
  },
  {
    id: "6",
    slug: "model-no-67",
    name: "Model No.67",
    price: 650,
    image: "/products/Mask group-5.png",
    productType: "Fabric",
    collection: "Essential",
    applications: ["Wall covering"],
    color: "Ebony",
    description: "Dark fabric panel for wall applications",
    inStock: true,
    dimensions: {
      type: "Rectangle",
      width: 2400,
      height: 1200,
      standardSizes: ["2400 MM", "1800 MM", "1200 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Safety glass",
      color: "Clear",
      thickness: "6 mm",
      treatment: "Basic",
    },
    glasstreatment: {
      options: ["Basic", "Fire resistant", "Sound dampening"],
      selected: "Fire resistant",
    },
    mesh: {
      material: "Polyester",
      pattern: "Woven",
      finish: "Fabric texture",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-67.pdf",
      description: "Fabric panel wall mounting guide",
    },
    vatRate: 0.21,
    deliveryTime: "20 working days",
  },
  {
    id: "7",
    slug: "model-no-91",
    name: "Model No.91",
    price: 890,
    image: "/products/Mask group-6.png",
    productType: "Mesh",
    collection: "Essential",
    applications: ["Wall covering", "Window treatments"],
    color: "Silver White",
    description: "Versatile white mesh panel",
    inStock: true,
    dimensions: {
      type: "Square",
      width: 3000,
      height: 3000,
      standardSizes: ["3000 MM", "2400 MM", "1800 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Float glass",
      color: "Ultra clear",
      thickness: "8 mm",
      treatment: "Polished edges",
    },
    glasstreatment: {
      options: ["Polished edges", "Beveled edges", "Standard cut"],
      selected: "Polished edges",
    },
    mesh: {
      material: "Aluminum",
      pattern: "Square",
      finish: "White powder coat",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-91.pdf",
      description: "Versatile mesh panel installation options",
    },
    vatRate: 0.21,
    deliveryTime: "25 working days",
  },
  {
    id: "8",
    slug: "model-no-28",
    name: "Model No.28",
    price: 1680,
    image: "/products/Mask group-7.png",
    productType: "Glass",
    collection: "Exclusive",
    applications: ["Glass partitions"],
    color: "Pearl Black",
    description: "Premium black glass partition",
    inStock: false,
    dimensions: {
      type: "Custom",
      width: 4000,
      height: 2800,
      standardSizes: ["4000 MM", "3500 MM", "3000 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Acoustic glass",
      color: "Black tinted",
      thickness: "14 mm (7 / 2.28 / 7)",
      treatment: "Sound reduction",
    },
    glasstreatment: {
      options: ["Sound reduction", "Privacy coating", "Standard process"],
      selected: "Sound reduction",
    },
    mesh: {
      material: "None",
      pattern: "None",
      finish: "None",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-28.pdf",
      description: "Acoustic glass partition system specifications",
    },
    vatRate: 0.21,
    deliveryTime: "45 working days",
  },
  {
    id: "9",
    slug: "model-no-15",
    name: "Model No.15",
    price: 520,
    image: "/products/Mask group-8.png",
    productType: "Fabric",
    collection: "Essential",
    applications: ["Wall covering"],
    color: "Inca Silver",
    description: "Silver fabric wall covering",
    inStock: true,
    dimensions: {
      type: "Rectangle",
      width: 2000,
      height: 1400,
      standardSizes: ["2000 MM", "1600 MM", "1200 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Standard glass",
      color: "Clear",
      thickness: "5 mm",
      treatment: "Basic",
    },
    glasstreatment: {
      options: ["Basic", "Stain resistant", "Easy clean"],
      selected: "Stain resistant",
    },
    mesh: {
      material: "Cotton blend",
      pattern: "Textured",
      finish: "Metallic sheen",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-15.pdf",
      description: "Fabric wall covering installation guide",
    },
    vatRate: 0.21,
    deliveryTime: "18 working days",
  },
  {
    id: "10",
    slug: "model-no-34",
    name: "Model No.34",
    price: 1950,
    image: "/products/Mask group-9.png",
    productType: "Glass",
    collection: "Exclusive",
    applications: ["Wall covering", "Glass partitions"],
    color: "Gold Mist",
    description: "Luxury gold glass for high-end applications",
    inStock: true,
    dimensions: {
      type: "Large Format",
      width: 4500,
      height: 3200,
      standardSizes: ["4500 MM", "4000 MM", "3500 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Designer glass",
      color: "Champagne gold",
      thickness: "15 mm (8 / 2.28 / 8)",
      treatment: "Luxury finish",
    },
    glasstreatment: {
      options: ["Luxury finish", "Gold leafing", "Premium coating"],
      selected: "Gold leafing",
    },
    mesh: {
      material: "None",
      pattern: "None",
      finish: "None",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-34.pdf",
      description: "Luxury glass installation and care instructions",
    },
    vatRate: 0.21,
    deliveryTime: "50 working days",
  },
  {
    id: "11",
    slug: "model-no-56",
    name: "Model No.56",
    price: 750,
    image: "/products/Mask group-10.png",
    productType: "Mesh",
    collection: "Essential",
    applications: ["Window treatments"],
    color: "Cardinal Red",
    description: "Red mesh for window applications",
    inStock: true,
    dimensions: {
      type: "Standard",
      width: 2200,
      height: 1600,
      standardSizes: ["2200 MM", "1800 MM", "1400 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Premium glass",
      color: "Dark bronze",
      thickness: "10 mm",
      treatment: "Luxury finish", // ✅ fixed
    },
    glasstreatment: {
      options: ["Luxury finish", "Luxury texture", "Designer coating"], // ✅ fixed
      selected: "Luxury texture",
    },

    mesh: {
      material: "Fiberglass",
      pattern: "Fine weave",
      finish: "Cardinal red",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-56.pdf",
      description: "Window treatment mesh specifications",
    },
    vatRate: 0.21,
    deliveryTime: "22 working days",
  },
  {
    id: "12",
    slug: "model-no-78",
    name: "Model No.78",
    price: 1320,
    image: "/products/Mask group-11.png",
    productType: "Fabric",
    collection: "Exclusive",
    applications: ["Wall covering"],
    color: "Ebony",
    description: "Premium ebony fabric panel",
    inStock: true,
    dimensions: {
      type: "Premium",
      width: 3200,
      height: 2400,
      standardSizes: ["3200 MM", "2800 MM", "2400 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Premium glass",
      color: "Dark bronze",
      thickness: "10 mm",
      treatment: "Luxury finish", // ✅ fixed
    },
    glasstreatment: {
      options: ["Luxury finish", "Luxury texture", "Designer coating"], // ✅ fixed
      selected: "Luxury texture",
    },

    mesh: {
      material: "Premium fabric",
      pattern: "Luxury weave",
      finish: "Ebony black",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-78.pdf",
      description: "Premium fabric panel installation system",
    },
    vatRate: 0.21,
    deliveryTime: "35 working days",
  },
  {
    id: "13",
    slug: "model-no-92",
    name: "Model No.92",
    price: 840,
    image: "/products/Mask group-12.png",
    productType: "Mesh",
    collection: "Essential",
    applications: ["Wall covering", "Window treatments", "Glass partitions"],
    color: "Silver White",
    description: "Multi-purpose silver mesh panel",
    inStock: true,
    dimensions: {
      type: "Versatile",
      width: 2600,
      height: 2000,
      standardSizes: ["2600 MM", "2200 MM", "1800 MM"],
      customAvailable: true,
    },
    glassType: {
      type: "Multi-purpose glass",
      color: "Crystal clear",
      thickness: "8 mm",
      treatment: "Multi-coating",
    },
    glasstreatment: {
      options: ["Multi-coating", "All-purpose", "Standard versatile"],
      selected: "Multi-coating",
    },
    mesh: {
      material: "Hybrid material",
      pattern: "Multi-directional",
      finish: "Versatile white",
    },
    dimensionalDrawing: {
      available: true,
      downloadUrl: "/drawings/model-92.pdf",
      description: "Multi-purpose panel installation guide",
    },
    vatRate: 0.21,
    deliveryTime: "30 working days",
  },
];

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  filteredProducts: [],
  filters: {},
  sortBy: "newest",
  isLoading: false,

  setFilters: (filters) => {
    set({ filters });
    get().applyFiltersAndSort();
  },

  setSortBy: (sortBy) => {
    set({ sortBy });
    get().applyFiltersAndSort();
  },

  clearFilters: () => {
    set({ filters: {} });
    get().applyFiltersAndSort();
  },

  applyFiltersAndSort: () => {
    const { products, filters, sortBy } = get();
    let filtered = [...products];

    // Existing filters
    if (filters.productTypes?.length) {
      filtered = filtered.filter((product) =>
        filters.productTypes!.includes(product.productType)
      );
    }

    if (filters.collections?.length) {
      filtered = filtered.filter((product) =>
        filters.collections!.includes(product.collection)
      );
    }

    if (filters.applications?.length) {
      filtered = filtered.filter((product) =>
        product.applications.some((app) => filters.applications!.includes(app))
      );
    }

    if (filters.colors?.length) {
      filtered = filtered.filter((product) =>
        filters.colors!.includes(product.color)
      );
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower)
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange!.min &&
          product.price <= filters.priceRange!.max
      );
    }
    if (filters.glassTypes?.length) {
      filtered = filtered.filter(
        (product) =>
          product.glassType?.type &&
          filters.glassTypes!.includes(product.glassType.type)
      );
    }

if (filters.meshMaterials?.length) {
  filtered = filtered.filter(
    (product) =>
      product.mesh?.material &&
      filters.meshMaterials!.includes(product.mesh.material)
  );
}

if (filters.dimensionTypes?.length) {
  filtered = filtered.filter(
    (product) =>
      product.dimensions?.type &&
      filters.dimensionTypes!.includes(product.dimensions.type)
  );
}

if (filters.meshPatterns?.length) {
  filtered = filtered.filter(
    (product) =>
      product.mesh?.pattern &&
      filters.meshPatterns!.includes(product.mesh.pattern)
  );
}


    if (filters.inStockOnly) {
      filtered = filtered.filter((product) => product.inStock);
    }

    if (filters.customDimensionsOnly) {
      filtered = filtered.filter(
        (product) => product.dimensions?.customAvailable === true
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "delivery-time":
        filtered.sort((a, b) => {
          const aTime = parseInt(a.deliveryTime?.split(" ")[0] || "0");
          const bTime = parseInt(b.deliveryTime?.split(" ")[0] || "0");
          return aTime - bTime;
        });
        break;
      case "collection":
        filtered.sort((a, b) => a.collection.localeCompare(b.collection));
        break;
      case "oldest":
        filtered.reverse();
        break;
      case "newest":
      default:
        break;
    }

    set({ filteredProducts: filtered });
  },

  fetchProducts: async () => {
    set({ isLoading: true });

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      set({ products: dummyProducts });
      get().applyFiltersAndSort();
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
