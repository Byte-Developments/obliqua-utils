import { SvgGradientConfig, BaseGradientConfig, convertToSvgGradient } from './types/gradient';
import { getTailwindGradient } from './gradient-utils';

export function createGradientDef(gradient: SvgGradientConfig): string {
  const { id, startColor, endColor } = gradient;
  
  return `<linearGradient 
    id="${id}" 
    x1="0%" 
    y1="0%" 
    x2="100%" 
    y2="100%"
  >
    <stop offset="0%" stop-color="${startColor}" />
    <stop offset="100%" stop-color="${endColor}" />
  </linearGradient>`;
}

export function extractGradient(element: HTMLElement): BaseGradientConfig | undefined {
  const colors = getTailwindGradient(element);
  if (!colors || colors.length < 2) return undefined;

  return {
    from: colors[0],
    ...(colors.length > 2 ? { via: colors[1] } : {}),
    to: colors[colors.length - 1]
  };
}