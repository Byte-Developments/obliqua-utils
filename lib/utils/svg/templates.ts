export function createSvgTemplate(
  width: number,
  height: number,
  content: string,
  background: string,
  gradient?: {
    from: string;
    via?: string;
    to: string;
  }
): string {
  const gradientDef = gradient ? `
    <defs>
      <linearGradient id="bg-gradient" x1="0" y1="0" x2="804.66" y2="636.16" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="${gradient.from}"/>
        ${gradient.via ? `<stop offset="0.5" stop-color="${gradient.via}"/>` : ''}
        <stop offset="1" stop-color="${gradient.to}"/>
      </linearGradient>
    </defs>
  ` : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <style>
      @font-face {
        font-family: 'Fira Code';
        font-style: normal;
        font-weight: 400;
        src: url(data:font/woff2;base64,${getFiraCodeBase64()}) format('woff2');
      }
      text {
        font-family: 'Fira Code', monospace;
        white-space: pre;
        dominant-baseline: text-before-edge;
      }
      .line-number {
        text-anchor: end;
        opacity: 0.5;
      }
    </style>
    ${gradientDef}
  </defs>
  <rect width="100%" height="100%" fill="${gradient ? 'url(#bg-gradient)' : background}" rx="40.05" ry="40.05"/>
  <rect x="50" y="43" width="${width - 100}" height="${height - 86}" rx="8" ry="8" fill="${background}"/>
  ${content}
</svg>`;
}

function getFiraCodeBase64(): string {
  // In production, this would return the actual base64-encoded font data
  return '';
}