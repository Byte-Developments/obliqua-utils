import domtoimage from 'dom-to-image-more';
import type { ExportConfig } from './export-types';

export async function downloadImage(
  element: HTMLElement, 
  filename: string,
  config: ExportConfig = {}
): Promise<void> {
  try {
    const dataUrl = await domtoimage.toPng(element, {
      scale: window.devicePixelRatio * 2,
      ...config
    });
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    throw new Error('Failed to generate or download image');
  }
}