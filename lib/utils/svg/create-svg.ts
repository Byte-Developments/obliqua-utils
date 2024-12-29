import { SvgConfig } from './types/config';
import { createGradientDef } from './gradient';
import { sanitizePath } from './sanitize';

export function createSvg(pathData: string, config: SvgConfig = {}): string {
  const {
    width = 512,
    height = 512,
    viewBox = "0 0 512 512",
    gradient
  } = config;

  const gradientId = 'iconGradient';
  const fill = gradient ? `url(#${gradientId})` : 'currentColor';

  // Sanitize the path data to remove any unwanted artifacts
  const cleanPathData = sanitizePath(pathData);

  const gradientDef = gradient
    ? createGradientDef({
        id: gradientId,
        startColor: gradient.startColor,
        endColor: gradient.endColor
      })
    : '';

  return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="${width}" 
    height="${height}" 
    viewBox="${viewBox}"
    fill="none"
  >
    <defs>
      ${gradientDef}
    </defs>
    <path 
      d="${cleanPathData}" 
      fill="${fill}"
    />
  </svg>`.replace(/\s+/g, ' ').trim();
}