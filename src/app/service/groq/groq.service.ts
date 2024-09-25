import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { GroqResponse } from './groq.response';

@Injectable({
  providedIn: 'root',
})
export class GroqService {
  baseURL = 'https://api.groq.com/openai/v1';

  constructor(private configSvc: ConfigService) {}

  async getSummary(content: string) {
    const config = this.configSvc.getAll().groq;

    if (!config) {
      throw new Error('No groq config found');
    }

    const response = await (
      await fetch(this.baseURL + '/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.api_key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content:
                'You are a helpful assistant who can summary articles. Please summary the article, keep it concise and structured. Return only the summary with html format, highlight important keyword, no additional communication.',
            },
            { role: 'user', content: content },
          ],
          model: config.model,
        }),
      })
    ).text();

    return (JSON.parse(response) as GroqResponse).choices[0].message.content;
  }
}
