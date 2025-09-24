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
  updateAdditionalServices: (services: Partial<ProductConfiguration["selections"]["additionalServices"]>) => void;
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
  glassTreatments: [
    {
      value: "Standard process",
      label: "Standard Process",
      pricingRule: { category: 'treatment', option: 'standard', modifier: 0 }
    },
    {
      value: "UV Etching",
      label: "UV Etching",
      pricingRule: { category: 'treatment', option: 'uv-etching', modifier: 0.15 }
    },
    {
      value: "Anti-glare",
      label: "Anti-glare Coating",
      pricingRule: { category: 'treatment', option: 'anti-glare', modifier: 0.20 }
    },
    {
      value: "Premium coating",
      label: "Premium Coating",
      pricingRule: { category: 'treatment', option: 'premium', modifier: 0.30 }
    },
    {
      value: "Gold leafing",
      label: "Gold Leafing",
      pricingRule: { category: 'treatment', option: 'gold-leafing', modifier: 0.75 }
    },
    {
      value: "Sound reduction",
      label: "Sound Reduction",
      pricingRule: { category: 'treatment', option: 'sound-reduction', modifier: 0.40 }
    },
    {
      value: "Energy efficient",
      label: "Energy Efficient",
      pricingRule: { category: 'treatment', option: 'energy-efficient', modifier: 0.25 }
    }
  ],
  meshOptions: {
    materials: [
      {
        value: "Kevlar",
        label: "Kevlar Mesh",
        pricingRule: { category: 'mesh', option: 'kevlar', modifier: 0.30 }
      },
      {
        value: "Stainless Steel",
        label: "Stainless Steel",
        pricingRule: { category: 'mesh', option: 'stainless-steel', modifier: 0.15 }
      },
      {
        value: "Carbon Fiber",
        label: "Carbon Fiber",
        pricingRule: { category: 'mesh', option: 'carbon-fiber', modifier: 0.45 }
      },
      {
        value: "Aluminum",
        label: "Aluminum",
        pricingRule: { category: 'mesh', option: 'aluminum', modifier: 0.10 }
      },
      {
        value: "Fiberglass",
        label: "Fiberglass",
        pricingRule: { category: 'mesh', option: 'fiberglass', modifier: 0.05 }
      }
    ],
    patterns: ["Vertical", "Horizontal", "Diamond", "Woven", "Square", "Fine weave"],
    colors: ["Silver", "Black", "Bronze", "White", "Cardinal red", "Gold"]
  },
  dimensionPricing: {
    standardSizes: [
      { size: "1200 MM", modifier: -0.20 },
      { size: "1800 MM", modifier: -0.10 },
      { size: "2400 MM", modifier: 0 },
      { size: "3000 MM", modifier: 0.15 },
      { size: "3600 MM", modifier: 0.30 },
      { size: "4200 MM", modifier: 0.50 }
    ],
    customPricing: {
      perSquareMeter: 150,
      minPrice: 200
    }
  },
  additionalServices: [
    {
      value: "polished-edges",
      label: "Polished Edges",
      pricingRule: { category: 'service', option: 'polished-edges', modifier: 0.08 }
    },
    {
      value: "beveled-edges",
      label: "Beveled Edges",
      pricingRule: { category: 'service', option: 'beveled-edges', modifier: 0.12 }
    },
    {
      value: "rounded-corners",
      label: "Rounded Corners",
      pricingRule: { category: 'service', option: 'rounded-corners', modifier: 0.15 }
    },
    {
      value: "custom-cutouts",
      label: "Custom Cutouts",
      pricingRule: { category: 'service', option: 'custom-cutouts', baseAddition: 75 }
    },
    {
      value: "installation",
      label: "Professional Installation",
      pricingRule: { category: 'service', option: 'installation', baseAddition: 200 }
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
          type: product.dimensions?.type || "Standard",
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
          selected: product.glasstreatment?.selected || "Standard process",
          priceModifier: 0
        },
        ...(product.mesh && product.mesh.material !== "None" && {
          mesh: {
            material: product.mesh.material,
            pattern: product.mesh.pattern,
            color: "Silver",
            finish: product.mesh.finish,
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

  updateAdditionalServices: (services) => {
    const state = get();
    if (!state.configuration) return;

    const updatedConfig = {
      ...state.configuration,
      selections: {
        ...state.configuration.selections,
        additionalServices: {
          ...state.configuration.selections.additionalServices,
          ...services
        } as NonNullable<ProductConfiguration["selections"]["additionalServices"]>
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

    // Calculate glass treatment modifier
    const treatmentOption = state.configurationOptions.glassTreatments.find(
      gt => gt.value === config.selections.glassTreatment.selected
    );
    if (treatmentOption) {
      totalModifier += treatmentOption.pricingRule.modifier;
      if (treatmentOption.pricingRule.baseAddition) {
        additionalCosts += treatmentOption.pricingRule.baseAddition;
      }
    }

    // Calculate mesh modifier
    if (config.selections.mesh) {
      const meshMaterial = state.configurationOptions.meshOptions.materials.find(
        m => m.value === config.selections.mesh?.material
      );
      if (meshMaterial) {
        totalModifier += meshMaterial.pricingRule.modifier;
      }
    }

    // Calculate dimension modifier
    const dimensionSize = `${Math.max(config.selections.dimensions.width, config.selections.dimensions.height)} MM`;
    const sizeOption = state.configurationOptions.dimensionPricing.standardSizes.find(
      s => s.size === dimensionSize
    );
    if (sizeOption) {
      totalModifier += sizeOption.modifier;
    } else {
      // Custom dimensions
      const area = (config.selections.dimensions.width * config.selections.dimensions.height) / 1000000;
      const customCost = Math.max(
        area * state.configurationOptions.dimensionPricing.customPricing.perSquareMeter,
        state.configurationOptions.dimensionPricing.customPricing.minPrice
      );
      additionalCosts += customCost;
    }

    // Calculate additional services
    if (config.selections.additionalServices) {
      const services = state.configurationOptions.additionalServices;

      if (config.selections.additionalServices.polishing && config.selections.additionalServices.polishing !== "Standard") {
        const service = services.find(s => s.value === "polished-edges");
        if (service) totalModifier += service.pricingRule.modifier;
      }

      if (config.selections.additionalServices.cornerFinishing && config.selections.additionalServices.cornerFinishing !== "Standard") {
        const service = services.find(s => s.value === "rounded-corners");
        if (service) totalModifier += service.pricingRule.modifier;
      }

      if (config.selections.additionalServices.cutOuts && config.selections.additionalServices.cutOuts !== "None") {
        const service = services.find(s => s.value === "custom-cutouts");
        if (service?.pricingRule.baseAddition) additionalCosts += service.pricingRule.baseAddition;
      }

      if (config.selections.additionalServices.installation) {
        const service = services.find(s => s.value === "installation");
        if (service?.pricingRule.baseAddition) additionalCosts += service.pricingRule.baseAddition;
      }
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