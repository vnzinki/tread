import { Injectable } from '@angular/core'
import { ConfigService } from '../config/config.service'
import { OpenAiResponse } from './openai.response'
import { Provider } from '../config/config.interface'

@Injectable({
  providedIn: 'root',
})
export class OpenAiBaseService {
  providerName: Provider = 'openai'
  baseURL = ''

  constructor(private configSvc: ConfigService) {}

  async getSummary(content: string) {
    const config = this.configSvc.getAll()

    if (!config) {
      throw new Error('No config found')
    }

    const langPrompt = config.translate.enable
      ? ''
      : 'in ' + config.translate.defaultLanguage + ' language'

    const systemPrompt =
      'You are a helpful assistant who can summary articles. Please summary the article ' +
      langPrompt +
      ', keep it concise and structured. Return only the summary with html format, highlight important keyword, no additional communication.'

    const response = await (
      await fetch(this.baseURL + '/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.providers[this.providerName].api_key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            { role: 'user', content: content },
          ],
          model: config.providers[this.providerName].model,
        }),
      })
    ).text()

    return (JSON.parse(response) as OpenAiResponse).choices[0].message.content
  }
}
