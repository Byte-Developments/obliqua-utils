import { EditorView } from "@codemirror/view";
import { EDITOR_THEME_CONFIG } from "./constants";

export const createEditorTheme = () => EditorView.theme({
  "&": EDITOR_THEME_CONFIG.base,
  ".cm-content": EDITOR_THEME_CONFIG.content,
  ".cm-line": {
    padding: "0 1rem",
  },
  ".cm-gutters": EDITOR_THEME_CONFIG.gutters,
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
  ".cm-keyword": { color: EDITOR_THEME_CONFIG.highlighting.keyword },
  ".cm-operator": { color: EDITOR_THEME_CONFIG.highlighting.operator },
  ".cm-variable": { color: EDITOR_THEME_CONFIG.highlighting.variable },
  ".cm-variable-2": { color: EDITOR_THEME_CONFIG.highlighting.variable },
  ".cm-function": { color: EDITOR_THEME_CONFIG.highlighting.function },
  ".cm-string": { color: EDITOR_THEME_CONFIG.highlighting.string },
  ".cm-number": { color: EDITOR_THEME_CONFIG.highlighting.number },
  ".cm-comment": { 
    color: EDITOR_THEME_CONFIG.highlighting.comment, 
    fontStyle: "italic" 
  },
  ".cm-def": { color: EDITOR_THEME_CONFIG.highlighting.function },
  ".cm-property": { color: EDITOR_THEME_CONFIG.highlighting.property },
  ".cm-type": { color: EDITOR_THEME_CONFIG.highlighting.type },
  ".cm-builtin": { color: EDITOR_THEME_CONFIG.highlighting.builtin },
});