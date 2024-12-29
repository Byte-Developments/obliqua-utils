import { createSvgTemplate } from './svg/templates';
import { createWindowControls } from './svg/window-controls';
import { applySyntaxHighlighting } from './svg/syntax';
import { defaultSyntaxTheme } from './syntax/theme';

interface CodeExportConfig {
  code: string;
  dimensions: {
    width: number;
    height: number;
  };
  theme: {
    background: string;
    text: string;
    lineNumbers: string;
    syntax: {
      keyword: string;
      string: string;
      number: string;
      comment: string;
      function: string;
    };
  };
  windowControls?: boolean;
}

export async function exportToSvg(
  element: HTMLElement,
  config: CodeExportConfig
): Promise<string> {
  const { width, height } = config.dimensions;
  const { code, theme } = config;
  const lineHeight = 20;
  const padding = 40;
  const windowControlsHeight = config.windowControls ? 40 : 0;
  
  const lines = config.code.split('\n');
  const svgContent = lines.map((line, i) => {
    const y = windowControlsHeight + padding + (i + 1) * lineHeight;
    const highlightedLine = applySyntaxHighlighting(line, {
        ...defaultSyntaxTheme,
        ...theme.syntax
    });
    
    return `<text
      x="${padding + 40}"
      y="${y}"
      fill="${config.theme.text}"
      font-family="Fira Code, monospace"
      font-size="14">${highlightedLine}</text>
    <text
      x="${padding}"
      y="${y}"
      fill="${config.theme.lineNumbers}"
      font-family="Fira Code, monospace"
      font-size="14"
      opacity="0.5">${i + 1}</text>`;
  }).join('');

  const content = `
    ${config.windowControls ? createWindowControls() : ''}
    ${svgContent}
  `;

  return createSvgTemplate(
    width,
    height,
    content,
    config.theme.background
  );
}