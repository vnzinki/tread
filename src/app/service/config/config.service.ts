import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  getSummaryLength(): number {
    return 500;
  }
  getTone(): string {
    return 'neutral';
  }

  getApiKey(provider: string): string {
    switch (provider) {
      case 'groq':
        return '';
      default:
        return '';
    }
  }

  getActiveProvider(): string {
    return 'groq';
  }

  getActiveModel(): string {
    return 'llama3-groq-8b-8192-tool-use-preview';
  }
}
