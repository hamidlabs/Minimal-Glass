export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  productType: ProductType;
  collection: Collection;
  applications: Application[];
  color: Color;
  description?: string;
  inStock: boolean;
  dimensions?: {
    type: DimensionType;
    width: number;
    height: number;
    standardSizes: string[];
    customAvailable: boolean;
  };
  glassType?: {
    type: GlassType;
    color: string;
    thickness: string;
    treatment: string;
  };
  glasstreatment?: {
    options: GlassTreatmentOption[];
    selected: GlassTreatmentOption;
  };
  mesh?: {
    material: MeshMaterial;
    pattern: MeshPattern;
    finish: string;
  };
  dimensionalDrawing?: {
    available: boolean;
    downloadUrl: string;
    description: string;
  };
  vatRate?: number;
  deliveryTime?: string;
}

export type ProductType = "Glass" | "Mesh" | "Fabric";

export type Collection = "Essential" | "Exclusive";

export type Application =
  | "Wall covering"
  | "Window treatments"
  | "Glass partitions";

export type Color =
  | "Silver White"
  | "Pearl Black"
  | "Cardinal Red"
  | "Gold Mist"
  | "Inca Silver"
  | "Ebony";

export type DimensionType =
  | "Square"
  | "Rectangle"
  | "Custom"
  | "Large Format"
  | "Standard"
  | "Premium"
  | "Versatile";

export type GlassType =
  | "Normal glass"
  | "Tempered glass"
  | "Laminated glass"
  | "Low-E glass"
  | "Safety glass"
  | "Float glass"
  | "Acoustic glass"
  | "Standard glass"
  | "Designer glass"
  | "Colored glass"
  | "Premium glass"
  | "Multi-purpose glass"
  | "Tinted glass";

export type GlassTreatmentOption =
  | "Standard process"
  | "UV Etching"
  | "No-add-on with technology/technique"
  | "No-add Ink-tech"
  | "No-add with"
  | "Anti-glare"
  | "UV Protection"
  | "Premium coating"
  | "Gold leaf application"
  | "Anti-reflective"
  | "Privacy coating"
  | "Energy efficient"
  | "Solar control"
  | "Basic"
  | "Fire resistant"
  | "Sound dampening"
  | "Polished edges"
  | "Beveled edges"
  | "Standard cut"
  | "Sound reduction"
  | "Stain resistant"
  | "Easy clean"
  | "Luxury finish"
  | "Gold leafing"
  | "Heat reduction"
  | "Luxury texture"
  | "Designer coating"
  | "Multi-coating"
  | "All-purpose"
  | "Standard versatile";

export type MeshMaterial =
  | "Kevlar"
  | "Stainless Steel"
  | "Carbon Fiber"
  | "Polyester"
  | "Aluminum"
  | "Fiberglass"
  | "Premium fabric"
  | "Hybrid material"
  | "Cotton blend"
  | "None";

export type MeshPattern =
  | "Vertical"
  | "Horizontal"
  | "Diamond"
  | "Woven"
  | "Square"
  | "Fine weave"
  | "Luxury weave"
  | "Multi-directional"
  | "Textured"
  | "None";

export interface ProductFilters {
  productTypes?: ProductType[];
  collections?: Collection[];
  applications?: Application[];
  colors?: Color[];
  search?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  glassTypes?: GlassType[];
  meshMaterials?: MeshMaterial[];
  dimensionTypes?: DimensionType[];
  glassTreatments?: GlassTreatmentOption[];
  meshPatterns?: MeshPattern[];
  inStockOnly?: boolean;
  customDimensionsOnly?: boolean;
}

export type SortOption =
  | "newest"
  | "oldest"
  | "price-low"
  | "price-high"
  | "name-asc"
  | "name-desc"
  | "delivery-time"
  | "collection";

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