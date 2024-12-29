export interface SvgExportConfig {
  dimensions: {
    width: number;
    height: number;
  };
  theme: {
    background: string;
    text: string;
    lineNumbers: string;
    syntax: {
      keyword: string;
      string: string;
      number: string;
      comment: string;
      function: string;
    };
  };
  windowControls?: boolean;
  lineHeight?: number;
  padding?: number;
}

export const defaultConfig: SvgExportConfig = {
  dimensions: {
    width: 800,
    height: 600
  },
  theme: {
    background: '#282c34',
    text: '#abb2bf',
    lineNumbers: '#495162',
    syntax: {
      keyword: '#c678dd',
      string: '#98c379',
      number: '#d19a66',
      comment: '#5c6370',
      function: '#61afef'
    }
  },
  windowControls: true,
  lineHeight: 20,
  padding: 40
};