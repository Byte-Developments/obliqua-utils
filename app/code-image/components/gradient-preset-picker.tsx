"use client";

import { GRADIENT_PRESETS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface GradientPresetPickerProps {
  value: number;
  onChange: (index: number) => void;
}

export function GradientPresetPicker({ value, onChange }: GradientPresetPickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Background Style</label>
      <div className="grid grid-cols-2 gap-2">
        {GRADIENT_PRESETS.map((preset, index) => {
          const gradientClasses = `bg-gradient-to-br ${preset.from} ${preset.via} ${preset.to}`;
          return (
            <Button
              key={preset.name}
              variant={value === index ? "default" : "outline"}
              className={`h-12 ${gradientClasses} text-white hover:opacity-90`}
              onClick={() => onChange(index)}
            >
              {preset.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}