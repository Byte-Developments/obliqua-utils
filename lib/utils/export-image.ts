import domtoimage from 'dom-to-image-more';
import { toast } from 'sonner';
import type { ExportConfig } from './export-types';
import { getExportConfig } from './export-config';

export async function exportToPng(elementId: string, filename: string): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    // Wait for fonts and animations to load
    await document.fonts.ready;
    await new Promise(resolve => setTimeout(resolve, 100));

    // Get export configuration
    const config = getExportConfig();

    // Generate PNG
    const dataUrl = await domtoimage.toPng(element, config);

    // Download image
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Image exported successfully!');
  } catch (error) {
    console.error('Export error:', error);
    toast.error('Failed to export image');
    throw error;
  }
}