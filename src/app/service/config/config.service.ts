import { Injectable } from '@angular/core'
import { Config, defaultConfig, Provider } from './config.interface'

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

  validate(): void {}

  getAll(): Config {
    return this.config
  }

  availableProviders() {
    return Object.keys(this.getAll().providers).filter(
      (provider) => this.getAll().providers[provider as Provider].enable,
    ) as Provider[]
  }
}
