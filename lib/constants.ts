import { GradientPresets } from './types/gradient';

export const CODE_LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "css", label: "CSS" },
  { value: "html", label: "HTML" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "json", label: "JSON" },
  { value: "markdown", label: "Markdown" },
  { value: "yaml", label: "YAML" },
  { value: "shell", label: "Shell Script" },
  { value: "sql", label: "SQL" },
] as const;

export const GRADIENT_PRESETS: GradientPresets = [
  { 
    name: "Midnight",
    from: "rgb(59, 130, 246)",
    via: "rgb(147, 51, 234)",
    to: "rgb(236, 72, 153)"
  },
  {
    name: "Sunset",
    from: "rgb(249, 115, 22)",
    via: "rgb(239, 68, 68)",
    to: "rgb(236, 72, 153)"
  },
  {
    name: "Forest",
    from: "rgb(34, 197, 94)",
    via: "rgb(16, 185, 129)",
    to: "rgb(20, 184, 166)"
  },
  {
    name: "Ocean",
    from: "rgb(59, 130, 246)",
    via: "rgb(6, 182, 212)",
    to: "rgb(99, 102, 241)"
  },
  {
    name: "Aurora",
    from: "rgb(74, 222, 128)",
    via: "rgb(45, 212, 191)",
    to: "rgb(59, 130, 246)"
  },
  {
    name: "Dusk",
    from: "rgb(79, 70, 229)",
    via: "rgb(147, 51, 234)",
    to: "rgb(219, 39, 119)"
  },
  {
    name: "Fire",
    from: "rgb(250, 204, 21)",
    via: "rgb(249, 115, 22)",
    to: "rgb(239, 68, 68)"
  },
  {
    name: "Royal",
    from: "rgb(147, 51, 234)",
    via: "rgb(79, 70, 229)",
    to: "rgb(29, 78, 216)"
  }
] as const;