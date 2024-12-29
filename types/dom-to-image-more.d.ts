declare module 'dom-to-image-more' {
    export interface DomToImageOptions {
      filter?: (node: Node) => boolean;
      bgcolor?: string | null;
      width?: number;
      height?: number;
      style?: {
        transform?: string;
        'transform-origin'?: string;
        [key: string]: string | undefined;
      };
      quality?: number;
      scale?: number;
      imagePlaceholder?: string;
    }
  
    interface DomToImage {
      toSvg(node: HTMLElement, options?: DomToImageOptions): Promise<string>;
      toPng(node: HTMLElement, options?: DomToImageOptions): Promise<string>;
      toJpeg(node: HTMLElement, options?: DomToImageOptions): Promise<string>;
      toBlob(node: HTMLElement, options?: DomToImageOptions): Promise<Blob>;
      toPixelData(node: HTMLElement, options?: DomToImageOptions): Promise<Uint8ClampedArray>;
    }
  
    const domtoimage: DomToImage;
    export default domtoimage;
  }