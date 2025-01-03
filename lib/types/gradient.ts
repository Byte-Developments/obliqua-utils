export interface GradientPreset {
    name: string;
    from: string;
    via?: string;
    to: string;
  }
  
  export type GradientPresets = readonly GradientPreset[];