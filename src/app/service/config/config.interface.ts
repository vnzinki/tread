export type Provider = 'groq' | 'openai' | 'gemini'

export interface Config {
  defaultProvider: Provider
  activeProvider: Provider[]
  translate: {
    enable: boolean
    defaultLanguage: string
  }
  openai: {
    model: string
    api_key: string
  }
  groq: {
    model: string
    api_key: string
  }
  gemini: {
    model: string
    api_key: string
  }
}

export const defaultConfig: Config = {
  defaultProvider: 'groq',
  activeProvider: [],
  translate: {
    enable: true,
    defaultLanguage: 'Vietnamese',
  },
  openai: {
    model: 'gpt-3.5-turbo',
    api_key: '',
  },
  groq: {
    model: 'llama3-groq-8b-8192-tool-use-preview',
    api_key: '',
  },
  gemini: {
    model: 'llama-3.1-8b-instant',
    api_key: '',
  },
}

export const availableOptions = {
  provider: ['openai', 'groq', 'gemini'],
  availableLanguages: ['Vietnamese', 'English'],
  groq: {
    model: [
      'distil-whisper-large-v3-en',
      'gemma2-9b-it',
      'gemma-7b-it',
      'llama3-groq-70b-8192-tool-use-preview',
      'llama3-groq-8b-8192-tool-use-preview',
      'llama-3.1-70b-versatile',
      'llama-3.1-8b-instant',
      'llama-guard-3-8b',
      'llava-v1.5-7b-4096-preview',
      'llama3-70b-8192',
      'llama3-8b-8192',
      'mixtral-8x7b-32768',
      'whisper-large-v3',
    ],
  },
  openai: {
    model: [
      'gpt-3.5-turbo',
      'gpt-3.5-turbo-0301',
      'gpt-4',
      'gpt-4-0314',
      'gpt-4-32k',
      'gpt-4-32k-0314',
    ],
  },
  gemini: {
    model: ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-1.0-pro'],
  },
}
