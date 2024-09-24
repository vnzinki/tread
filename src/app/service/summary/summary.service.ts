import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { GroqService } from '../groq/groq.service';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  constructor(private configSvc: ConfigService, private groqSvc: GroqService) {}

  async getSummary(content: string) {
    return await this.groqSvc.getSummary(
      content,
    );
  }
}
