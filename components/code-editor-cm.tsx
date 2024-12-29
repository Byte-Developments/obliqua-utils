"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

const languageMap = {
  javascript: javascript({ jsx: true, typescript: false }),
  typescript: javascript({ jsx: true, typescript: true }),
  python: python(),
};

const editorTheme = EditorView.theme({
  "&": {
    fontSize: "14px",
    backgroundColor: "#282c34",
  },
  ".cm-content": {
    fontFamily: "'Fira Code', monospace",
    padding: "1rem 0",
  },
  ".cm-line": {
    padding: "0 1rem",
  },
  ".cm-gutters": {
    backgroundColor: "#282c34",
    color: "#495162",
    border: "none",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
  },
  ".cm-activeLineGutter": {
    backgroundColor: "rgba(44, 49, 60, 0.5)",
  },
  ".cm-activeLine": {
    backgroundColor: "rgba(44, 49, 60, 0.5)",
  },
  ".cm-selectionBackground": {
    backgroundColor: "rgba(62, 68, 81, 0.8) !important",
  },
  ".cm-cursor": {
    borderLeft: "2px solid #528bff",
  },
  // Syntax highlighting
  ".cm-keyword": { color: "#c678dd" },
  ".cm-operator": { color: "#56b6c2" },
  ".cm-variable": { color: "#e06c75" },
  ".cm-variable-2": { color: "#e06c75" },
  ".cm-function": { color: "#61afef" },
  ".cm-string": { color: "#98c379" },
  ".cm-number": { color: "#d19a66" },
  ".cm-comment": { color: "#5c6370", fontStyle: "italic" },
  ".cm-def": { color: "#61afef" },
  ".cm-property": { color: "#abb2bf" },
  ".cm-type": { color: "#56b6c2" },
  ".cm-builtin": { color: "#e5c07b" },
});

export function CodeEditorCM({ code, language, onChange, readOnly = false }: CodeEditorProps) {
  const lang = languageMap[language as keyof typeof languageMap] || javascript();

  return (
    <CodeMirror
      value={code}
      height="400px"
      theme={[oneDark, editorTheme]}
      extensions={[lang]}
      onChange={onChange}
      readOnly={readOnly}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        history: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        searchKeymap: true,
        historyKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
      className="!font-mono text-sm"
    />
  );
}