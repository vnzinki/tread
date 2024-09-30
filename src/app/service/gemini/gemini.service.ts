import { Injectable } from '@angular/core'
import { Provider } from '../config/config.interface'
import { ConfigService } from '../config/config.service'
import { GeminiResponse } from './gemini.response'

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  providerName: Provider = 'gemini'
  baseURL = 'https://generativelanguage.googleapis.com/v1beta'

  constructor(private configSvc: ConfigService) {}

  async getSummary(content: string) {
    const config = this.configSvc.getAll()

    if (!config) {
      throw new Error('No config found')
    }

    const langPrompt = config.translate.enable
      ? 'in ' + config.translate.defaultLanguage + ' language'
      : ''

    const systemPrompt =
      'You are a helpful assistant who can summary articles. Please summary the article ' +
      langPrompt +
      ', keep it concise and structured. Return only the summary with html format, highlight important keyword, no additional communication.'

    const response = await (
      await fetch(
        this.baseURL +
          '/models/' +
          config.providers[this.providerName].model +
          ':generateContent?key=' +
          config.providers[this.providerName].api_key,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            system_instruction: {
              parts: {
                text: systemPrompt,
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
