import { Injectable } from '@angular/core';
import { Config, defaultConfig } from './config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private storage = window.localStorage;
  private configKey = 'treadConfig';
  private config;

  constructor() {
    let config = defaultConfig;

    const storedValue = this.storage.getItem(this.configKey);
    if (storedValue) config = { ...config, ...JSON.parse(storedValue) };

    this.config = config;
  }

  save(value: Config): void {
    this.storage.setItem(this.configKey, JSON.stringify(value));
  }

  getAll(): Config {
    return this.config;
  }
}
