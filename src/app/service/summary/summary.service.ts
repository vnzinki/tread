import { Injectable } from '@angular/core'
import { Provider } from '../config/config.interface'
import { ConfigService } from '../config/config.service'
import { GeminiService } from '../gemini/gemini.service'
import { GroqService } from '../groq/groq.service'
import { OpenAiService } from '../openai/openai.service'

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  constructor(
    private configSvc: ConfigService,
    private groqSvc: GroqService,
    private geminiSvc: GeminiService,
    private openaiSvc: OpenAiService,
  ) {}

  async getSummary(provider: Provider, content: string) {
    switch (provider) {
      case 'gemini':
        return await this.geminiSvc.getSummary(content)
      case 'openai':
        return await this.openaiSvc.getSummary(content)
      case 'groq':
        return await this.groqSvc.getSummary(content)
      default:
        throw new Error('No provider found')
    }
  }
}
