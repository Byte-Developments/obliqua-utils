import { GRADIENT_PRESETS } from '@/lib/constants';

export function getGradientStyle(preset: typeof GRADIENT_PRESETS[number]) {
  return {
    background: preset.via
      ? `linear-gradient(to bottom right, ${preset.from}, ${preset.via}, ${preset.to})`
      : `linear-gradient(to bottom right, ${preset.from}, ${preset.to})`
  };
}