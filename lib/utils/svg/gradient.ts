import type { SvgGradient } from '@/lib/types/gradient';

export function createGradientDef(gradient: SvgGradient): string {
  const { id, startColor, viaColor, endColor } = gradient;
  
  const stops = [
    `<stop offset="0%" stop-color="${startColor}" />`,
    ...(viaColor ? [`<stop offset="50%" stop-color="${viaColor}" />`] : []),
    `<stop offset="100%" stop-color="${endColor}" />`
  ];

  return `<linearGradient 
    id="${id}" 
    x1="0%" 
    y1="0%" 
    x2="100%" 
    y2="100%"
  >
    ${stops.join('\n    ')}
  </linearGradient>`;
}