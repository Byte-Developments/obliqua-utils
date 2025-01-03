import { ExportConfig } from './types';
import { createBackground } from './background';
import { createWindowControls } from './window-controls';
import { createCodeContent } from './code';
import { createFontDefinitions } from './fonts';

export function exportToSvg(element: HTMLElement, config: ExportConfig): string {
  const { width, height } = config.dimensions;
  const { gradient } = config;

  // Create SVG components
  const fontDefs = createFontDefinitions();
  const background = createBackground(width, height, config.theme.background, gradient);
  const codeContainer = `<rect 
    x="50" 
    y="43" 
    width="${width - 100}" 
    height="${height - 86}" 
    rx="8" 
    ry="8" 
    fill="${config.theme.background}"
  />`;
  const windowControls = config.windowControls ? createWindowControls() : '';
  const codeContent = createCodeContent(config);

  // Combine all components into final SVG
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${fontDefs}
  ${background}
  ${codeContainer}
  ${windowControls}
  ${codeContent}
</svg>`;
}