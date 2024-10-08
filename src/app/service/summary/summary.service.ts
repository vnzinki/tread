import { Injectable, signal, WritableSignal } from '@angular/core'
import { Provider } from '../config/config.interface'
import { GeminiService } from '../gemini/gemini.service'
import { GroqService } from '../groq/groq.service'
import { HuggingfaceService } from '../huggingface/huggingface.service'
import { MistralService } from '../mistral/mistral.service'
import { OpenAiService } from '../openai/openai.service'

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  generatedSummary$: WritableSignal<string>

  constructor(
    private groqSvc: GroqService,
    private geminiSvc: GeminiService,
    private openaiSvc: OpenAiService,
    private huggingfaceSvc: HuggingfaceService,
    private mistralSvc: MistralService,
  ) {
    this.generatedSummary$ = signal('')
  }

  async getSummary(provider: Provider, content: string) {
    switch (provider) {
      case 'gemini':
        this.generatedSummary$.set(await this.geminiSvc.getSummary(content))
        break
      case 'openai':
        this.generatedSummary$.set(await this.openaiSvc.getSummary(content))
        break
      case 'groq':
        this.generatedSummary$.set(await this.groqSvc.getSummary(content))
        break
      case 'mistral':
        this.generatedSummary$.set(await this.mistralSvc.getSummary(content))
        break
      case 'huggingface':
        this.generatedSummary$.set(
          await this.huggingfaceSvc.getSummary(content),
        )
        break
      default:
        throw new Error('No provider found')
    }
  }
}
