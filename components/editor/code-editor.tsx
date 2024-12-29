"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { LANGUAGE_MAP } from "@/lib/editor/constants";
import { createEditorTheme } from "@/lib/editor/theme";
import { EDITOR_SETUP } from "@/lib/editor/setup";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

const languageMap = {
  javascript: javascript(LANGUAGE_MAP.javascript),
  typescript: javascript(LANGUAGE_MAP.typescript),
  python: python(),
};

export function CodeEditor({ code, language, onChange, readOnly = false }: CodeEditorProps) {
  const lang = languageMap[language as keyof typeof languageMap] || javascript();
  const editorTheme = createEditorTheme();

  return (
    <CodeMirror
      value={code}
      height="400px"
      theme={[oneDark, editorTheme]}
      extensions={[lang]}
      onChange={onChange}
      readOnly={readOnly}
      basicSetup={EDITOR_SETUP}
      className="!font-mono text-sm"
    />
  );
}