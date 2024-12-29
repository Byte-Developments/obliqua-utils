export const LANGUAGE_MAP = {
    javascript: { jsx: true, typescript: false },
    typescript: { jsx: true, typescript: true },
    python: {},
  } as const;
  
  export const EDITOR_THEME_CONFIG = {
    base: {
      fontSize: "14px",
      backgroundColor: "#282c34",
    },
    content: {
      fontFamily: "'Fira Code', monospace",
      padding: "1rem 0",
    },
    gutters: {
      backgroundColor: "#282c34",
      color: "#495162",
      border: "none",
      borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    },
    highlighting: {
      keyword: "#c678dd",
      operator: "#56b6c2",
      variable: "#e06c75",
      function: "#61afef",
      string: "#98c379",
      number: "#d19a66",
      comment: "#5c6370",
      property: "#abb2bf",
      type: "#56b6c2",
      builtin: "#e5c07b",
    },
  } as const;