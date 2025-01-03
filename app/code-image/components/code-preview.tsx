"use client";

import { GRADIENT_PRESETS } from "@/lib/constants";
import { WindowFrame } from "./window-frame";
import { CodeEditorCM } from "./code-editor-cm";
import { cn } from "@/lib/utils";

interface CodePreviewProps {
  code: string;
  language: string;
  gradientPreset: number;
  onChange: (value: string) => void;
}

export function CodePreview({ code, language, gradientPreset, onChange }: CodePreviewProps) {
  const preset = GRADIENT_PRESETS[gradientPreset];
  const gradientStyle = {
    background: preset.via
      ? `linear-gradient(to bottom right, ${preset.from}, ${preset.via}, ${preset.to})`
      : `linear-gradient(to bottom right, ${preset.from}, ${preset.to})`
  };
  
  return (
    <div 
      id="preview-main" 
      className="p-8 md:p-12 rounded-xl shadow-2xl"
      style={gradientStyle}
    >
      <div className="max-w-4xl mx-auto">
        <WindowFrame>
          <div className="editor-wrapper">
            <CodeEditorCM
              code={code}
              language={language}
              onChange={onChange}
              readOnly={false}
            />
          </div>
        </WindowFrame>
      </div>
    </div>
  );
}