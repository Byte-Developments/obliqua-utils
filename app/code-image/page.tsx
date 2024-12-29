"use client";

import { useState } from "react";
import { CodePreview } from "./components/code-preview";
import { LanguageSelect } from "./components/language-select";
import { GradientPresetPicker } from "./components/gradient-preset-picker";
import { handleExport } from "@/lib/utils/export-utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

const DEFAULT_CODE = `// Welcome to the Code Image Generator!
function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}

// Try editing this code
greet("World");`;

export default function CodeImage() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [language, setLanguage] = useState("typescript");
  const [gradientPreset, setGradientPreset] = useState(0);

  const onExport = async () => {
    try {
      await handleExport("preview-container", "svg");
    } catch (error) {
      console.error("Export error:", error);
      toast.error("Failed to export image");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Code Image Generator</h1>
            <p className="text-muted-foreground">
              Create beautiful images of your code snippets
            </p>
          </div>
          <Button 
            onClick={onExport}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Image
          </Button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <LanguageSelect 
              value={language}
              onChange={setLanguage}
            />
            <GradientPresetPicker
              value={gradientPreset}
              onChange={setGradientPreset}
            />
          </div>

          <div id="preview-container">
            <CodePreview
              code={code}
              language={language}
              gradientPreset={gradientPreset}
              onChange={setCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}