import { Injectable } from '@angular/core'
import {
  availableOptions,
  Config,
  defaultConfig,
  Provider,
} from './config.interface'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private storage = window.localStorage
  private configKey = 'treadConfig'
  private config

  constructor() {
    let config = defaultConfig

    const storedValue = this.storage.getItem(this.configKey)
    if (storedValue) config = { ...config, ...JSON.parse(storedValue) }

    this.config = config
  }

  save(config: Config): void {
    this.config = config
    this.validate()
    this.storage.setItem(this.configKey, JSON.stringify(this.config))
  }

  validate(): void {
    this.config.activeProvider = []
    availableOptions.provider.forEach((provider) => {
      if (this.config[provider as Provider]?.api_key) {
        this.config.activeProvider.push(provider as Provider)
      }
    })
  }

  getAll(): Config {
    return this.config
  }
}
