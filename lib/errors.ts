export class UrlNotFoundError extends Error {
  constructor() {
    super('URL not found');
    this.name = 'UrlNotFoundError';
  }
}

export class PasteNotFoundError extends Error {
  constructor() {
    super('Paste not found or expired');
    this.name = 'PasteNotFoundError';
  }
}