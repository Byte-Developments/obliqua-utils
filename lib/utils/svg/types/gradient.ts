// Common gradient types used across the application
export interface BaseGradientConfig {
    from: string;
    via?: string;
    to: string;
  }
  
  export interface SvgGradientConfig {
    id: string;
    startColor: string;
    endColor: string;
  }
  
  // Convert between gradient types
  export function convertToSvgGradient(gradient: BaseGradientConfig): SvgGradientConfig {
    return {
      id: 'gradient-' + Math.random().toString(36).substr(2, 9),
      startColor: gradient.from,
      endColor: gradient.to
    };
  }