import type { BaseGradientConfig, SvgGradient, TailwindGradientConfig } from '@/lib/types/gradient';

export function convertToSvgGradient(gradient: TailwindGradientConfig): SvgGradient {
  return {
    id: 'gradient-' + Math.random().toString(36).substr(2, 9),
    startColor: gradient.from,
    viaColor: gradient.via,
    endColor: gradient.to
  };
}

export function extractGradient(element: HTMLElement): TailwindGradientConfig | undefined {
  const style = window.getComputedStyle(element);
  const background = style.backgroundImage;

  if (!background.includes('linear-gradient')) {
    return undefined;
  }

  const colors = background.match(/rgba?\([^)]+\)|#[a-f\d]{3,8}/gi);
  if (!colors || colors.length < 2) {
    return undefined;
  }

  return {
    from: colors[0],
    ...(colors.length > 2 ? { via: colors[1] } : {}),
    to: colors[colors.length - 1]
  };
}