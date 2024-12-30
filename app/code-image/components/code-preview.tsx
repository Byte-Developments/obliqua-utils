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
  
  return (
    <div id="preview-main" className={cn(
      "p-8 md:p-12 rounded-xl shadow-2xl",
      "bg-gradient-to-br",
      preset.from,
      preset.via,
      preset.to
    )}>
      <div className="max-w-4xl mx-auto">
        <WindowFrame>
          <div className="editor-wrapper">
            <CodeEditorCM
              code={code}
              language={language}
              onChange={onChange}
              readOnly={true}
            />
          </div>
        </WindowFrame>
      </div>
    </div>
  );
}