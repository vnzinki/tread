import { Injectable } from '@angular/core'
import { SummaryProvider } from '../config/config.interface'
import { OpenAiBaseService } from '../openai/openai.base.service'

@Injectable({
  providedIn: 'root',
})
export class HuggingfaceService extends OpenAiBaseService {
  override providerName: SummaryProvider = 'huggingface'
  override baseURL = 'https://api-inference.huggingface.co/v1'
}
