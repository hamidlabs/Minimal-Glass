export interface ProductConfiguration {
  productId: string;
  basePrice: number;
  selections: {
    dimensions: {
      type: string;
      width: number;
      height: number;
      customDimensions?: {
        width: number;
        height: number;
      };
      priceModifier: number;
    };
    glassType: {
      type: string;
      color: string;
      thickness: string;
      treatment: string;
      priceModifier: number;
    };
    glassTreatment: {
      selected: string;
      priceModifier: number;
    };
    mesh?: {
      material: string;
      pattern: string;
      color: string;
      finish: string;
      priceModifier: number;
    };
    additionalServices?: {
      polishing: string;
      cornerFinishing: string;
      sideFinishing: string;
      cutOuts: string;
      installation: boolean;
      priceModifier: number;
    };
  };
  totalPrice: number;
  vatAmount: number;
  finalPrice: number;
}

export interface PricingRule {
  category: 'glass' | 'mesh' | 'dimension' | 'treatment' | 'service';
  option: string;
  modifier: number; // percentage (e.g., 0.15 for 15% increase)
  baseAddition?: number; // flat addition to base price
}

export interface ConfigurationOptions {
  glassTypes: {
    value: string;
    label: string;
    pricingRule: PricingRule;
    colors: string[];
    thicknesses: string[];
  }[];
  glassTreatments: {
    value: string;
    label: string;
    pricingRule: PricingRule;
  }[];
  meshOptions: {
    materials: {
      value: string;
      label: string;
      pricingRule: PricingRule;
    }[];
    patterns: string[];
    colors: string[];
  };
  dimensionPricing: {
    standardSizes: {
      size: string;
      modifier: number;
    }[];
    customPricing: {
      perSquareMeter: number;
      minPrice: number;
    };
  };
  additionalServices: {
    value: string;
    label: string;
    pricingRule: PricingRule;
  }[];
}