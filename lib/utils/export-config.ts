import type { ExportConfig } from './export-types';

export function getExportConfig(): ExportConfig {
  return {
    scale: window.devicePixelRatio * 2,
    quality: 1,
    bgcolor: null,
    style: {
      transform: 'scale(1)',
      'transform-origin': 'center'
    },
    filter: (node: Node) => {
      const element = node as HTMLElement;
      return !element.classList?.contains('loading-overlay');
    }
  };
}