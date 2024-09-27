import { Injectable } from '@angular/core'
import { ConfigService } from '../config/config.service'
import { GeminiResponse } from './gemini.response'

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  baseURL = 'https://generativelanguage.googleapis.com/v1beta'

  constructor(private configSvc: ConfigService) {}

  async getSummary(content: string) {
    const config = this.configSvc.getAll().gemini

    if (!config) {
      throw new Error('No groq config found')
    }

    const response = await (
      await fetch(
        this.baseURL +
          '/models/' +
          config.model +
          ':generateContent?key=' +
          config.api_key,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            system_instruction: {
              parts: {
                text: 'You are a helpful assistant who can summary articles. Please summary the article, keep it concise and structured. Return only the summary with html format, highlight important keyword, no additional communication.',
              },
            },
            contents: {
              parts: {
                text: content,
              },
            },
          }),
        },
      )
    ).text()

    return (JSON.parse(response) as GeminiResponse).candidates[0].content
      .parts[0].text
  }
}
