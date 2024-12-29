export function getGradientStyle(preset: { from: string; via?: string; to: string }) {
  const fromColor = `hsl(var(--${preset.from.split('-')[1]}))`;
  const viaColor = preset.via ? `hsl(var(--${preset.via.split('-')[1]}))` : undefined;
  const toColor = `hsl(var(--${preset.to.split('-')[1]}))`;

  return {
    background: viaColor
      ? `linear-gradient(to bottom right, ${fromColor}, ${viaColor}, ${toColor})`
      : `linear-gradient(to bottom right, ${fromColor}, ${toColor})`
  };
}