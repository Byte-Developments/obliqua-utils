import { applySyntaxHighlighting } from '../syntax/highlighter';
import type { ExportConfig } from '../svg/types';
import { defaultSyntaxTheme } from '../syntax/theme';

export function createCodeContent(config: ExportConfig): string {
  const { code, theme } = config;
  const lines = code.split('\n');
  const lineHeight = 20;
  const padding = 40;
  const windowControlsHeight = config.windowControls ? 40 : 0;

  return lines.map((line, i) => {
    const y = windowControlsHeight + padding + (i + 1) * lineHeight;
    const highlightedLine = applySyntaxHighlighting(line, {
      ...defaultSyntaxTheme,
      ...theme.syntax
    });
    
    return `
      <text
        x="${padding + 40}"
        y="${y}"
        fill="${theme.text}"
        font-family="Fira Code, monospace"
        font-size="14">${highlightedLine}</text>
      <text
        x="${padding}"
        y="${y}"
        fill="${theme.lineNumbers}"
        font-family="Fira Code, monospace"
        font-size="14"
        opacity="0.5">${i + 1}</text>`;
  }).join('\n');
}