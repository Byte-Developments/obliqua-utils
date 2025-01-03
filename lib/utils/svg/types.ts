import type { SvgGradient } from '@/lib/types/gradient';

export interface SyntaxTheme {
  keyword: string;
  string: string;
  number: string;
  comment: string;
  function: string;
  variable: string;
  operator: string;
  type: string;
  punctuation: string;
  default: string;
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
  gradient?: SvgGradient;
  windowControls?: boolean;
}