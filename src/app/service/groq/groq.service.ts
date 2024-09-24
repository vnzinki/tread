import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { GroqResponse } from './groq.response';

@Injectable({
  providedIn: 'root',
})
export class GroqService {
  baseURL = 'https://api.groq.com/openai/v1';

  constructor(private configSvc: ConfigService) {}

  async getSummary(content: string, tone: string, summaryLength: number) {
    const response = await (
      await fetch(this.baseURL + '/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.configSvc.getApiKey('groq')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content:
                'You are a helpful assistant who can summary articles. Please summary the article, keep it concise and structured. The tone is ' +
                tone +
                ' and the maximum word count of the summary is ' +
                summaryLength +
                ' words. Return only the summary with html format, highlight important keyword, no additional communication.',
            },
            { role: 'user', content: content },
          ],
          model: this.configSvc.getActiveModel(),
        }),
      })
    ).text();

    return (JSON.parse(response) as GroqResponse).choices[0].message.content;
  }
}
