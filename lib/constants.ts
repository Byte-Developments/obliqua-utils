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

export const GRADIENT_PRESETS = [
  { 
    name: "Midnight",
    from: "from-blue-500",
    via: "via-purple-500",
    to: "to-pink-500"
  },
  {
    name: "Sunset",
    from: "from-orange-500",
    via: "via-red-500",
    to: "to-pink-500"
  },
  {
    name: "Forest",
    from: "from-green-500",
    via: "via-emerald-500",
    to: "to-teal-500"
  },
  {
    name: "Ocean",
    from: "from-blue-500",
    via: "via-cyan-500",
    to: "to-indigo-500"
  },
  {
    name: "Aurora",
    from: "from-green-400",
    via: "via-teal-300",
    to: "to-blue-500"
  },
  {
    name: "Dusk",
    from: "from-indigo-600",
    via: "via-purple-600",
    to: "to-pink-600"
  },
  {
    name: "Fire",
    from: "from-yellow-400",
    via: "via-orange-500",
    to: "to-red-600"
  },
  {
    name: "Royal",
    from: "from-purple-600",
    via: "via-indigo-500",
    to: "to-blue-700"
  }
] as const;