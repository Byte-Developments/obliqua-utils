import { SvgGradientConfig } from './types/gradient';

export function createBackground(
  width: number, 
  height: number, 
  background: string = '#282c34',
  gradient?: SvgGradientConfig
): string {
  if (!gradient) {
    return `<rect 
      width="100%" 
      height="100%" 
      fill="${background}" 
      rx="40" 
      ry="40"
    />`;
  }

  const { startColor, endColor } = gradient;
  return `<defs>
    <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${startColor}"/>
      <stop offset="100%" stop-color="${endColor}"/>
    </linearGradient>
  </defs>
  <rect 
    width="100%" 
    height="100%" 
    fill="url(#backgroundGradient)" 
    rx="40" 
    ry="40"
  />`;
}

export function createCodeContainer(width: number, height: number): string {
  const padding = 50;
  const topOffset = 43;
  
  return `<rect 
    x="${padding}" 
    y="${topOffset}" 
    width="${width - (padding * 2)}" 
    height="${height - (topOffset * 2)}" 
    rx="8" 
    ry="8" 
    fill="#282c34"
  />`;
}