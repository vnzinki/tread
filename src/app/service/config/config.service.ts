import { Injectable } from '@angular/core';
import { Config } from './config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  private storage = window.localStorage;
  private configKey = 'treadConfig';

  set(value: Config): void {
    this.storage.setItem(this.configKey, JSON.stringify(value));
  }

  get<T extends keyof Config>(key: T): Config[T] | null {
    // const storedValue = this.storage.getItem(this.configKey);
    // if (storedValue) {
    //   const config = JSON.parse(storedValue) as Config;
    //   return this.getValueByKey(config, key);
    // }
    // return null;

    const config = {
      provider: 'groq',
      groq: {
        model: "llama3-groq-8b-8192-tool-use-preview",
        api_key: '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'
      }
    } as Config

    return this.getValueByKey(config, key);
  }

  private getValueByKey<T extends keyof Config>(
    config: Config,
    key: T
  ): Config[T] | null {
    if (key in config) {
      const value = config[key];
      if (typeof value === 'object' && value !== null) {
        return value as Config[T];
      }
      return value;
    }
    return null;
  }

  getApiKey(provider: string): string {
    switch (provider) {
      case 'groq':
        return '';
      default:
        return '';
    }
  }

  getActiveProvider(): string {
    return 'groq';
  }

  getActiveModel(): string {
    return 'llama3-groq-8b-8192-tool-use-preview';
  }
}
