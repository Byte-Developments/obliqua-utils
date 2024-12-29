"use client";

import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useOnClickOutside } from "@/hooks/use-click-outside";

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ label, color, onChange }: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(pickerRef, () => setShowPicker(false));

  return (
    <div className="relative" ref={pickerRef}>
      <Label className="text-white">{label}</Label>
      <div className="mt-2 flex gap-2">
        <div
          className="w-10 h-10 rounded-lg cursor-pointer border border-white/20"
          style={{ backgroundColor: color }}
          onClick={() => setShowPicker(!showPicker)}
        />
        <Input
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="bg-white/10 border-white/20 text-white"
        />
      </div>
      {showPicker && (
        <div className="absolute z-50 top-full mt-2">
          <div className="bg-zinc-900 p-3 rounded-lg border border-white/20 shadow-xl">
            <button
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/10"
              onClick={() => setShowPicker(false)}
            >
              <X className="h-4 w-4 text-white" />
            </button>
            <HexColorPicker color={color} onChange={onChange} />
          </div>
        </div>
      )}
    </div>
  );
}