export const PASTE_LANGUAGES = [
    { value: "plaintext", label: "Plain Text" },
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "python", label: "Python" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "json", label: "JSON" },
    { value: "markdown", label: "Markdown" },
  ] as const;
  
  export const EXPIRY_OPTIONS = [
    { value: "never", label: "Never" },
    { value: "5m", label: "5 Minutes" },
    { value: "1h", label: "1 Hour" },
    { value: "1d", label: "1 Day" },
    { value: "7d", label: "7 Days" },
    { value: "30d", label: "30 Days" },
  ] as const;