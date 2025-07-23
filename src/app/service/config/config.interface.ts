export type Provider = 'groq' | 'openai' | 'gemini'

export interface Config {
  defaultProvider: Provider | ''
  translate: {
    enable: boolean
    defaultLanguage: string
  }
  providers: {
    openai: {
      enable: boolean
      model: string
      api_key: string
    }
    groq: {
      enable: boolean
      model: string
      api_key: string
    }
    gemini: {
      enable: boolean
      model: string
      api_key: string
    }
  }
}

export const defaultConfig: Config = {
  defaultProvider: '',
  translate: {
    enable: false,
    defaultLanguage: 'Vietnamese',
  },
  providers: {
    openai: {
      enable: false,
      model: 'gpt-4o',
      api_key: '',
    },
    groq: {
      enable: false,
      model: 'distil-whisper-large-v3-en',
      api_key: '',
    },
    gemini: {
      enable: false,
      model: 'gemini-2.0-flash',
      api_key: '',
    },
  },
}

export const availableOptions = {
  provider: ['openai', 'groq', 'gemini'] as Provider[],
  availableLanguages: [
    'Vietnamese',
    'English',
    'Mandarin',
    'Spanish',
    'Hindi',
    'Bengali',
    'Portuguese',
    'Russian',
    'Japanese',
  ],
  groq: {
    model: [
      'distil-whisper-large-v3-en',
      'gemma2-9b-it',
      'llama-3.1-8b-instant',
      'llama-3.3-70b-versatile',
      'meta-llama/llama-guard-4-12b',
      'whisper-large-v3',
      'whisper-large-v3-turbo',
    ],
  },
  openai: {
    model: [
      'gpt-4.1',
      'gpt-4.1-mini',
      'gpt-4.1-nano',
      'gpt-4.5-preview',
      'gpt-4o',
      'gpt-4o-mini',
      'gpt-4o-mini-search-preview',
      'gpt-4o-search-preview',
      'o1',
      'o1-mini',
      'o1-pro',
      'o3',
      'o3-mini',
      'o3-pro',
      'o4-mini',
    ],
  },
  gemini: {
    model: [
      'gemini-1.5-flash-8b',
      'gemini-1.5-flash',
      'gemini-1.5-pro',
      'gemini-2.0-flash-lite',
      'gemini-2.0-flash-live-001',
      'gemini-2.0-flash',
      'gemini-2.5-flash-lite',
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-live-2.5-flash-preview',
    ],
  },
}
