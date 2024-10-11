import { Injectable, signal } from '@angular/core'
import { merge } from 'lodash'
import { Toast } from '../../block/toast/toast.interface'
import {
  Config,
  defaultConfig,
  SummaryProvider,
  TTSProvider,
} from './config.interface'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private storage = window.localStorage
  private configKey = 'treadConfig'
  private config

  public toast$ = signal<Toast>({
    show: false,
    message: '',
    type: 'success',
  })

  constructor() {
    let config = defaultConfig

    const storedValue = this.storage.getItem(this.configKey)
    if (storedValue) config = merge(config, JSON.parse(storedValue))
    this.config = config
  }

  save(config: Config): void {
    this.config = config
    this.validate()
    this.storage.setItem(this.configKey, JSON.stringify(this.config))
  }

  validate(): void {}

  getAll(): Config {
    return this.config
  }

  availableSummaryProviders() {
    return Object.keys(this.getAll().summaryProviders).filter(
      (provider) =>
        this.getAll().summaryProviders[provider as SummaryProvider].enable,
    ) as SummaryProvider[]
  }

  availableTTSProviders() {
    return Object.keys(this.getAll().ttsProviders).filter(
      (provider) => this.getAll().ttsProviders[provider as TTSProvider].enable,
    ) as TTSProvider[]
  }

  showToast(
    type: 'success' | 'loading' | 'error',
    message: string,
    duration = 0,
  ) {
    this.toast$.set({ show: true, type, message })

    if (duration > 0) {
      setTimeout(() => {
        this.toast$.set({ show: false, type: 'success', message: '' })
      }, duration)
    }
  }

  killToast() {
    this.toast$.set({ show: false, type: 'success', message: '' })
  }
}
