export interface UrlRecord {
  code: string;
  url: string;
  created_at: string;
}

export interface PasteRecord {
  id: string;
  content: string;
  title?: string;
  language: string;
  expires_at?: string;
  burn_after_read: boolean;
  created_at: string;
  viewed: boolean;
}