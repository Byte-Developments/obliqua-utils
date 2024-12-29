export interface ExportConfig {
    scale?: number;
    quality?: number;
    bgcolor?: string | null;
    style?: {
      transform?: string;
      'transform-origin'?: string;
      [key: string]: string | undefined;
    };
    filter?: (node: Node) => boolean;
    width?: number;
    height?: number;
  }
  
  export interface ExportOptions {
    format?: 'png' | 'jpeg' | 'svg';
    filename?: string;
    config?: ExportConfig;
  }