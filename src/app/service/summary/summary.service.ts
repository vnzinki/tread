import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { GroqService } from '../groq/groq.service';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  constructor(private configSvc: ConfigService, private groqSvc: GroqService) {}

  async getSummary(content: string) {
    switch (this.configSvc.getAll().defaultProvider) {
      //  case 'gemini':
      //    return await this.geminiSvc.getSummary(content);
      //  case 'openai':
      //    return await this.openaiSvc.getSummary(content);
      case 'groq':
        return await this.groqSvc.getSummary(content);
      default:
        throw new Error('No provider found');
    }
  }
}
