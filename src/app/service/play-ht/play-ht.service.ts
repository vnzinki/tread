import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TTSProvider } from '../config/config.interface'

@Injectable({
  providedIn: 'root',
})
export class PlayHtService {
  providerName: TTSProvider = 'playht'
  baseURL = 'https://api.play.ht/api/v2'
  constructor(private http: HttpClient) {}

  getTTSStream(text: string): Observable<ArrayBuffer> {
    const headers = new HttpHeaders({
      AUTHORIZATION: '',
      'X-USER-ID': '',
      accept: 'audio/mpeg',
      'content-type': 'application/json',
    })

    const body = {
      text: text,
      voice:
        's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
      output_format: 'mp3',
      speed: 1,
      sample_rate: 44100,
      voice_engine: 'PlayHT2.0-turbo',
    }

    return this.http.post(this.baseURL + '/tts/stream', body, {
      headers,
      responseType: 'arraybuffer',
    })
  }
}
