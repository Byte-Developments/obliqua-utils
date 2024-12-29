"use client";

import { Label } from "@/components/ui/label";
import { CodeEditorCM } from "./code-editor-cm";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
}

export function CodeEditor({ code, language, onChange }: CodeEditorProps) {
  return (
    <div className="space-y-2">
      <Label>Code</Label>
      <div className="rounded-lg overflow-hidden border border-border">
        <CodeEditorCM
          code={code}
          language={language}
          onChange={onChange}
        />
      </div>
    </div>
  );
}