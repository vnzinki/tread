import { Component, Input } from '@angular/core'
import { ConfigService } from '../../service/config/config.service'
import { TTSService } from '../../service/tts/tts.service'

@Component({
  selector: 'app-tts-player',
  standalone: true,
  imports: [],
  templateUrl: './tts-player.component.html',
  styleUrl: './tts-player.component.scss',
})
export class TTSPlayerComponent {
  isLoading = false
  ttsSrc: string | null = null
  @Input() summaryText = ''

  constructor(
    private ttsSvc: TTSService,
    private configSvc: ConfigService,
  ) {}

  generateTTS(): void {
    this.isLoading = true
    this.configSvc.showToast('loading', 'Generating audio...')

    this.ttsSvc.getTTSStream(this.summaryText).subscribe({
      next: (audioBuffer: ArrayBuffer) => {
        const blob = new Blob([audioBuffer], { type: 'audio/mpeg' })
        this.ttsSrc = URL.createObjectURL(blob)
        this.isLoading = false
        this.configSvc.killToast()
      },
      error: (error) => {
        this.configSvc.showToast('error', error.message)
        this.isLoading = false
      },
    })
  }

  clearAudio(): void {
    if (this.ttsSrc) {
      URL.revokeObjectURL(this.ttsSrc) // Clean up the object URL
      this.ttsSrc = null
    }
  }
}
