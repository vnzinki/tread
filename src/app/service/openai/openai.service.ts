import { Injectable } from '@angular/core'
import { OpenAiBaseService } from './openai.base.service'

@Injectable({
  providedIn: 'root',
})
export class OpenAiService extends OpenAiBaseService {
  override baseURL = 'https://api.openai.com/v1'
}
