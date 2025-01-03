// Base gradient configuration
export interface BaseGradientConfig {
  startColor: string;
  endColor: string;
  via?: string;
}

// SVG-specific gradient configuration
export interface SvgGradientConfig {
  id: string;
  startColor: string;
  endColor: string;
}

// Tailwind-style gradient configuration
export interface TailwindGradientConfig {
  from: string;
  via?: string;
  to: string;
}

// Convert between gradient types
export function convertToSvgGradient(gradient: TailwindGradientConfig): SvgGradientConfig {
  return {
    id: 'gradient-' + Math.random().toString(36).substr(2, 9),
    startColor: gradient.from,
    endColor: gradient.to
  };
}