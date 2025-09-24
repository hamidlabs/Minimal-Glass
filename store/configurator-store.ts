import { create } from "zustand";
import { Product } from "@/types/product";
import { ProductConfiguration, PricingRule, ConfigurationOptions } from "@/types/product-config";

interface ConfiguratorState {
  configuration: ProductConfiguration | null;
  currentProduct: Product | null;
  configurationOptions: ConfigurationOptions;
  isCalculating: boolean;

  // Actions
  initializeConfiguration: (product: Product) => void;
  updateDimensions: (dimensions: Partial<ProductConfiguration["selections"]["dimensions"]>) => void;
  updateGlassType: (glassType: Partial<ProductConfiguration["selections"]["glassType"]>) => void;
  updateGlassTreatment: (treatment: Partial<ProductConfiguration["selections"]["glassTreatment"]>) => void;
  updateMesh: (mesh: Partial<ProductConfiguration["selections"]["mesh"]>) => void;
  calculatePrice: () => void;
  resetConfiguration: () => void;
}

// Configuration options with pricing rules
const configurationOptions: ConfigurationOptions = {
  glassTypes: [
    {
      value: "Normal glass",
      label: "Normal Glass",
      pricingRule: { category: 'glass', option: 'normal', modifier: 0 },
      colors: ["Clear glass", "Silver tinted", "Dark grey"],
      thicknesses: ["5 mm", "6 mm", "8 mm"]
    },
    {
      value: "Tempered glass",
      label: "Tempered Glass",
      pricingRule: { category: 'glass', option: 'tempered', modifier: 0.25 },
      colors: ["Clear glass", "Silver tinted", "Dark grey", "Gold tinted"],
      thicknesses: ["6 mm", "8 mm", "10 mm"]
    },
    {
      value: "Laminated glass",
      label: "Laminated Glass",
      pricingRule: { category: 'glass', option: 'laminated', modifier: 0.45 },
      colors: ["Clear glass", "Silver tinted", "Gold tinted", "Black tinted"],
      thicknesses: ["8.5 mm (4 / 0.5 / 4)", "10 mm (5 / 1.52 / 5)", "12 mm (6 / 1.52 / 6)"]
    },
    {
      value: "Low-E glass",
      label: "Low-E Glass",
      pricingRule: { category: 'glass', option: 'low-e', modifier: 0.35 },
      colors: ["Clear glass", "Silver tinted", "Cardinal red"],
      thicknesses: ["10 mm", "12 mm (6 / 1.52 / 6)", "14 mm (7 / 2.28 / 7)"]
    },
    {
      value: "Acoustic glass",
      label: "Acoustic Glass",
      pricingRule: { category: 'glass', option: 'acoustic', modifier: 0.65 },
      colors: ["Clear glass", "Black tinted", "Dark bronze"],
      thicknesses: ["14 mm (7 / 2.28 / 7)", "15 mm (8 / 2.28 / 8)"]
    },
    {
      value: "Designer glass",
      label: "Designer Glass",
      pricingRule: { category: 'glass', option: 'designer', modifier: 0.85 },
      colors: ["Champagne gold", "Cardinal red", "Crystal clear"],
      thicknesses: ["12 mm (6 / 1.52 / 6)", "15 mm (8 / 2.28 / 8)"]
    }
  ],
  glassTreatmentOptions: {
    glassFinishing: [
      {
        value: "Standard",
        label: "Standard Finishing",
        pricingRule: { category: 'finishing', option: 'standard', modifier: 0 }
      },
      {
        value: "Premium",
        label: "Premium Finishing",
        pricingRule: { category: 'finishing', option: 'premium', modifier: 0.15 }
      },
      {
        value: "Luxury",
        label: "Luxury Finishing",
        pricingRule: { category: 'finishing', option: 'luxury', modifier: 0.30 }
      }
    ],
    polishing: [
      {
        value: "Standard",
        label: "Standard Polishing",
        pricingRule: { category: 'finishing', option: 'standard-polish', modifier: 0 }
      },
      {
        value: "Polished edges",
        label: "Polished Edges",
        pricingRule: { category: 'finishing', option: 'polished-edges', modifier: 0.08 }
      },
      {
        value: "High gloss",
        label: "High Gloss Polish",
        pricingRule: { category: 'finishing', option: 'high-gloss', modifier: 0.15 }
      }
    ],
    cornerFinishing: [
      {
        value: "Standard",
        label: "Standard Corners",
        pricingRule: { category: 'finishing', option: 'standard-corners', modifier: 0 }
      },
      {
        value: "Rounded",
        label: "Rounded Corners",
        pricingRule: { category: 'finishing', option: 'rounded-corners', modifier: 0.12 }
      },
      {
        value: "Beveled",
        label: "Beveled Corners",
        pricingRule: { category: 'finishing', option: 'beveled-corners', modifier: 0.18 }
      }
    ],
    sideFinishing: [
      {
        value: "Standard",
        label: "Standard Sides",
        pricingRule: { category: 'finishing', option: 'standard-sides', modifier: 0 }
      },
      {
        value: "Polished",
        label: "Polished Sides",
        pricingRule: { category: 'finishing', option: 'polished-sides', modifier: 0.10 }
      },
      {
        value: "Frosted",
        label: "Frosted Sides",
        pricingRule: { category: 'finishing', option: 'frosted-sides', modifier: 0.12 }
      }
    ],
    cutOuts: [
      {
        value: "None",
        label: "No Cut-outs",
        pricingRule: { category: 'finishing', option: 'no-cutouts', modifier: 0 }
      },
      {
        value: "Standard holes",
        label: "Standard Holes",
        pricingRule: { category: 'finishing', option: 'standard-holes', baseAddition: 50 }
      },
      {
        value: "Custom cutouts",
        label: "Custom Cut-outs",
        pricingRule: { category: 'finishing', option: 'custom-cutouts', baseAddition: 125 }
      }
    ]
  },
  meshOptions: {
    colors: ["Silver", "Black", "Bronze", "White", "Gold", "Copper"],
    directions: ["Vertical", "Horizontal", "Diamond", "Square", "Woven"]
  },
  dimensionShapes: [
    {
      value: "Square",
      label: "Square",
      pricingRule: { category: 'dimension', option: 'square', modifier: 0 }
    },
    {
      value: "Rectangle",
      label: "Rectangle",
      pricingRule: { category: 'dimension', option: 'rectangle', modifier: 0.05 }
    },
    {
      value: "Custom",
      label: "Custom Shape",
      pricingRule: { category: 'dimension', option: 'custom', modifier: 0.20 }
    }
  ]
};

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  configuration: null,
  currentProduct: null,
  configurationOptions,
  isCalculating: false,

  initializeConfiguration: (product: Product) => {
    const initialConfig: ProductConfiguration = {
      productId: product.id,
      basePrice: product.price,
      selections: {
        dimensions: {
          shape: 'Rectangle',
          width: product.dimensions?.width || 2400,
          height: product.dimensions?.height || 1800,
          priceModifier: 0
        },
        glassType: {
          type: product.glassType?.type || "Normal glass",
          color: product.glassType?.color || "Clear glass",
          thickness: product.glassType?.thickness || "6 mm",
          treatment: product.glassType?.treatment || "Standard",
          priceModifier: 0
        },
        glassTreatment: {
          glassFinishing: "Standard",
          polishing: "Standard",
          cornerFinishing: "Standard",
          sideFinishing: "Standard",
          cutOuts: "None",
          priceModifier: 0
        },
        ...(product.mesh && product.mesh.material !== "None" && {
          mesh: {
            color: "Silver",
            direction: product.mesh.pattern || "Vertical",
            priceModifier: 0
          }
        })
      },
      totalPrice: product.price,
      vatAmount: product.price * (product.vatRate || 0.21),
      finalPrice: product.price * (1 + (product.vatRate || 0.21))
    };

    set({
      configuration: initialConfig,
      currentProduct: product
    });
    get().calculatePrice();
  },

  updateDimensions: (dimensions) => {
    const state = get();
    if (!state.configuration) return;

    const updatedConfig = {
      ...state.configuration,
      selections: {
        ...state.configuration.selections,
        dimensions: {
          ...state.configuration.selections.dimensions,
          ...dimensions
        }
      }
    };

    set({ configuration: updatedConfig });
    get().calculatePrice();
  },

  updateGlassType: (glassType) => {
    const state = get();
    if (!state.configuration) return;

    const updatedConfig = {
      ...state.configuration,
      selections: {
        ...state.configuration.selections,
        glassType: {
          ...state.configuration.selections.glassType,
          ...glassType
        }
      }
    };

    set({ configuration: updatedConfig });
    get().calculatePrice();
  },

  updateGlassTreatment: (treatment) => {
    const state = get();
    if (!state.configuration) return;

    const updatedConfig = {
      ...state.configuration,
      selections: {
        ...state.configuration.selections,
        glassTreatment: {
          ...state.configuration.selections.glassTreatment,
          ...treatment
        }
      }
    };

    set({ configuration: updatedConfig });
    get().calculatePrice();
  },

  updateMesh: (mesh) => {
    const state = get();
    if (!state.configuration) return;

    const updatedConfig = {
      ...state.configuration,
      selections: {
        ...state.configuration.selections,
        mesh: {
          ...state.configuration.selections.mesh,
          ...mesh
        } as NonNullable<ProductConfiguration["selections"]["mesh"]>
      }
    };

    set({ configuration: updatedConfig });
    get().calculatePrice();
  },

  calculatePrice: () => {
    const state = get();
    const config = state.configuration;
    if (!config || !state.currentProduct) return;

    set({ isCalculating: true });

    let totalModifier = 0;
    let additionalCosts = 0;

    // Calculate glass type modifier
    const glassTypeOption = state.configurationOptions.glassTypes.find(
      gt => gt.value === config.selections.glassType.type
    );
    if (glassTypeOption) {
      totalModifier += glassTypeOption.pricingRule.modifier;
    }

    // Calculate dimension shape modifier
    const shapeOption = state.configurationOptions.dimensionShapes.find(
      s => s.value === config.selections.dimensions.shape
    );
    if (shapeOption) {
      totalModifier += shapeOption.pricingRule.modifier;
    }

    // Calculate size modifier based on area
    const area = (config.selections.dimensions.width * config.selections.dimensions.height) / 1000000;
    if (area > 10) totalModifier += 0.30; // Large panels
    else if (area > 6) totalModifier += 0.15; // Medium panels

    // Calculate glass treatment modifiers
    const treatment = config.selections.glassTreatment;

    // Glass finishing
    const finishingOption = state.configurationOptions.glassTreatmentOptions.glassFinishing.find(
      f => f.value === treatment.glassFinishing
    );
    if (finishingOption) {
      totalModifier += finishingOption.pricingRule.modifier;
      if (finishingOption.pricingRule.baseAddition) {
        additionalCosts += finishingOption.pricingRule.baseAddition;
      }
    }

    // Polishing
    const polishingOption = state.configurationOptions.glassTreatmentOptions.polishing.find(
      p => p.value === treatment.polishing
    );
    if (polishingOption) {
      totalModifier += polishingOption.pricingRule.modifier;
    }

    // Corner finishing
    const cornerOption = state.configurationOptions.glassTreatmentOptions.cornerFinishing.find(
      c => c.value === treatment.cornerFinishing
    );
    if (cornerOption) {
      totalModifier += cornerOption.pricingRule.modifier;
    }

    // Side finishing
    const sideOption = state.configurationOptions.glassTreatmentOptions.sideFinishing.find(
      s => s.value === treatment.sideFinishing
    );
    if (sideOption) {
      totalModifier += sideOption.pricingRule.modifier;
    }

    // Cut-outs
    const cutOutOption = state.configurationOptions.glassTreatmentOptions.cutOuts.find(
      c => c.value === treatment.cutOuts
    );
    if (cutOutOption) {
      totalModifier += cutOutOption.pricingRule.modifier;
      if (cutOutOption.pricingRule.baseAddition) {
        additionalCosts += cutOutOption.pricingRule.baseAddition;
      }
    }

    // Calculate mesh modifier (if mesh exists)
    if (config.selections.mesh) {
      totalModifier += 0.20; // Base mesh addition
    }

    // Calculate final price
    const modifiedBasePrice = config.basePrice * (1 + totalModifier);
    const totalPrice = modifiedBasePrice + additionalCosts;
    const vatRate = state.currentProduct.vatRate || 0.21;
    const vatAmount = totalPrice * vatRate;
    const finalPrice = totalPrice + vatAmount;

    const updatedConfig = {
      ...config,
      totalPrice: Math.round(totalPrice * 100) / 100,
      vatAmount: Math.round(vatAmount * 100) / 100,
      finalPrice: Math.round(finalPrice * 100) / 100
    };

    set({
      configuration: updatedConfig,
      isCalculating: false
    });
  },

  resetConfiguration: () => {
    set({
      configuration: null,
      currentProduct: null,
      isCalculating: false
    });
  }
}));