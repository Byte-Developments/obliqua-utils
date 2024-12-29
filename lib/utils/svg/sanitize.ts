export function sanitizeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function sanitizePath(pathData: string): string {
  return pathData
    .replace(/[\n\r]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/([MmLlHhVvCcSsQqTtAaZz])\s+/g, '$1')
    .replace(/\s+([-.0-9])/g, '$1')
    .trim();
}

export function sanitizeStyle(style: string): string {
  return style
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/"/g, '&quot;');
}