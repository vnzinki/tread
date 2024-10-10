import { Injectable } from '@angular/core'
import { SummaryProvider } from '../config/config.interface'
import { OpenAiBaseService } from '../openai/openai.base.service'

@Injectable({
  providedIn: 'root',
})
export class MistralService extends OpenAiBaseService {
  override providerName: SummaryProvider = 'mistral'
  override baseURL = 'https://api.mistral.ai/v1'
}
