import { sanitizeXml } from '../svg/sanitize';
import type { SyntaxTheme } from '../svg/types';

const TOKEN_PATTERNS = [
  { type: 'comment', regex: /^\/\/.*/ },
  { type: 'string', regex: /^"[^"]*"|^'[^']*'|^`[^`]*`/ },
  { type: 'keyword', regex: /^(function|const|let|var|return|if|else|for|while|class|interface|type|import|export)\b/ },
  { type: 'type', regex: /^(string|number|boolean|any|void|never|object|symbol|null|undefined)\b/ },
  { type: 'number', regex: /^-?\d*\.?\d+([eE][+-]?\d+)?\b/ },
  { type: 'function', regex: /^([a-zA-Z_]\w*)\s*(?=\()/ },
  { type: 'operator', regex: /^(\+\+|--|&&|\|\||=>|===|!==|==|!=|>=|<=|>>|<<|\+|-|\*|\/|%|\||\&|\^|~|!|\?|:|=|>|<|\.)/ },
  { type: 'punctuation', regex: /^[{}()\[\].,;]/ },
  { type: 'variable', regex: /^[a-zA-Z_]\w*/ },
  { type: 'default', regex: /^\s+|^\S/ }
] as const;

function tokenize(code: string): { text: string; type: keyof SyntaxTheme }[] {
  const tokens: { text: string; type: keyof SyntaxTheme }[] = [];
  let remaining = code;

  while (remaining) {
    let matched = false;
    for (const { type, regex } of TOKEN_PATTERNS) {
      const match = remaining.match(regex);
      if (match) {
        const text = match[0];
        tokens.push({ text, type });
        remaining = remaining.slice(text.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      tokens.push({ text: remaining[0], type: 'default' });
      remaining = remaining.slice(1);
    }
  }

  return tokens;
}

export function applySyntaxHighlighting(code: string, theme: SyntaxTheme): string {
  const tokens = tokenize(code);
  let result = '';
  
  for (const { text, type } of tokens) {
    const color = theme[type];
    const escapedText = sanitizeXml(text);
    if (color !== theme.default) {
      result += `<tspan fill="${color}">${escapedText}</tspan>`;
    } else {
      result += escapedText;
    }
  }

  return result;
}