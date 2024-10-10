import { Injectable } from '@angular/core'
import { Readability } from '@mozilla/readability'
import { Observable } from 'rxjs'
import { ConfigService } from '../config/config.service'
import { PlayHtService } from '../play-ht/play-ht.service'

@Injectable({
  providedIn: 'root',
})
export class TTSService {
  constructor(
    private configSvc: ConfigService,
    private playHtSvc: PlayHtService,
  ) {}

  getTTSStream(htmlText: string): Observable<ArrayBuffer> {
    const cleanContent = new Readability(
      new DOMParser().parseFromString(htmlText, 'text/html'),
    ).parse()

    if (!cleanContent?.textContent) {
      throw new Error("Can't get content from Readability")
    }

    return this.playHtSvc.getTTSStream(cleanContent?.textContent)
  }
}
