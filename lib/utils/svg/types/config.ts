export interface SvgConfig {
    width?: number;
    height?: number;
    viewBox?: string;
    gradient?: {
      startColor: string;
      endColor: string;
    };
  }
  
  export interface GradientConfig {
    id: string;
    startColor: string;
    endColor: string;
  }
  
  export interface SvgDimensions {
    width: number;
    height: number;
    viewBox?: string;
  }