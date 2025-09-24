export interface ProductConfiguration {
  productId: string;
  basePrice: number;
  selections: {
    dimensions: {
      shape: 'Square' | 'Rectangle' | 'Custom';
      width: number;
      height: number;
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
      glassFinishing: string;
      polishing: string;
      cornerFinishing: string;
      sideFinishing: string;
      cutOuts: string;
      priceModifier: number;
    };
    mesh?: {
      color: string;
      direction: string;
      priceModifier: number;
    };
  };
  totalPrice: number;
  vatAmount: number;
  finalPrice: number;
}

export interface PricingRule {
  category: 'glass' | 'mesh' | 'dimension' | 'finishing' | 'treatment';
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
  glassTreatmentOptions: {
    glassFinishing: {
      value: string;
      label: string;
      pricingRule: PricingRule;
    }[];
    polishing: {
      value: string;
      label: string;
      pricingRule: PricingRule;
    }[];
    cornerFinishing: {
      value: string;
      label: string;
      pricingRule: PricingRule;
    }[];
    sideFinishing: {
      value: string;
      label: string;
      pricingRule: PricingRule;
    }[];
    cutOuts: {
      value: string;
      label: string;
      pricingRule: PricingRule;
    }[];
  };
  meshOptions: {
    colors: string[];
    directions: string[];
  };
  dimensionShapes: {
    value: string;
    label: string;
    pricingRule: PricingRule;
  }[];
}