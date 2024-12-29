export interface ElementDimensions {
  width: number;
  height: number;
  scale: number;
}

export function getElementDimensions(element: HTMLElement): ElementDimensions {
  const style = window.getComputedStyle(element);
  const scale = 3; // High resolution scale factor

  return {
    width: parseInt(style.width) * scale,
    height: parseInt(style.height) * scale,
    scale
  };
}

export function getComputedStyles(element: Element): Partial<CSSStyleDeclaration> {
  const computedStyle = window.getComputedStyle(element);
  const styles: Partial<CSSStyleDeclaration> = {};
  
  const propertiesToCopy = [
    'backgroundColor',
    'backgroundImage',
    'padding',
    'borderRadius',
    'fontFamily',
    'fontSize',
    'lineHeight'
  ];

  propertiesToCopy.forEach(prop => {
    styles[prop as any] = computedStyle.getPropertyValue(prop);
  });

  return styles;
}