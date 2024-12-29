import type { SvgGradientConfig } from './types/gradient';

export interface SyntaxTheme {
  keyword: string;    // function, const, let, etc.
  string: string;     // "strings" and 'strings'
  number: string;     // 123, 3.14
  comment: string;    // // comments
  function: string;   // function names
  variable: string;   // variable names
  operator: string;   // +, -, *, /, etc.
  type: string;       // string, number, boolean
  punctuation: string; // (), {}, [], etc.
  default: string;    // default text color
}

export interface GradientConfig {
  from: string;
  via?: string;
  to: string;
}

export interface ExportConfig {
  code: string;
  dimensions: {
    width: number;
    height: number;
  };
  theme: {
    background: string;
    text: string;
    lineNumbers: string;
    syntax: SyntaxTheme;
  };
  gradient?: SvgGradientConfig;
  windowControls?: boolean;
}