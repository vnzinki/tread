import { Injectable } from '@angular/core'
import { Provider } from '../config/config.interface'
import { OpenAiBaseService } from '../openai/openai.base.service'

@Injectable({
  providedIn: 'root',
})
export class MistralService extends OpenAiBaseService {
  override providerName: Provider = 'mistral'
  override baseURL = 'https://api.mistral.ai/v1'
}
