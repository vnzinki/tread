import { Injectable } from '@angular/core'
import { Provider } from '../config/config.interface'
import { OpenAiBaseService } from '../openai/openai.base.service'

@Injectable({
  providedIn: 'root',
})
export class GroqService extends OpenAiBaseService {
  override providerName: Provider = 'groq'
  override baseURL = 'https://api.groq.com/openai/v1'
}
