export interface Paste {
    id: string;
    content: string;
    title?: string;
    language: string;
    expiresAt?: string;
    burnAfterRead: boolean;
    createdAt: string;
    viewed: boolean;
  }
  
  export type PasteLanguage = {
    value: string;
    label: string;
  };
  
  export type ExpiryOption = {
    value: string;
    label: string;
  };