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
  
  // Tailwind gradient configuration
  export interface TailwindGradientConfig {
    from: string;
    via?: string;
    to: string;
  }
  
  // Utility type for gradient extraction
  export type ExtractedGradient = TailwindGradientConfig;