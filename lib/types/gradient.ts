// Base gradient types
export interface GradientPreset {
    name: string;
    from: string;
    via?: string;
    to: string;
  }
  
  export type GradientPresets = readonly GradientPreset[];
  
  // SVG-specific gradient types
  export interface SvgGradient {
    id: string;
    startColor: string;
    endColor: string;
    viaColor?: string;
  }
  
  // Conversion interfaces
  export interface BaseGradientConfig {
    from: string;
    via?: string;
    to: string;
  }
  
  export type TailwindGradientConfig = BaseGradientConfig;