import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TTSProvider } from '../config/config.interface'
import { ConfigService } from '../config/config.service'

@Injectable({
  providedIn: 'root',
})
export class PlayHtService {
  providerName: TTSProvider = 'playht'
  baseURL = 'https://api.play.ht/api/v2'
  constructor(
    private http: HttpClient,
    private configSvc: ConfigService,
  ) {}

  getTTSStream(text: string): Observable<ArrayBuffer> {
    const config = this.configSvc.getAll()
    const headers = new HttpHeaders({
      AUTHORIZATION: config.ttsProviders.playht.api_key,
      'X-USER-ID': config.ttsProviders.playht.user_id,
      accept: 'audio/mpeg',
      'content-type': 'application/json',
    })

    const body = {
      text: text,
      voice:
        's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
      output_format: 'mp3',
      speed: 0.85,
      sample_rate: 44100,
      voice_engine: 'Play3.0-mini',
    }

    return this.http.post(this.baseURL + '/tts/stream', body, {
      headers,
      responseType: 'arraybuffer',
    })
  }
}
