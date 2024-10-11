export type SummaryProvider =
  | 'groq'
  | 'openai'
  | 'gemini'
  | 'huggingface'
  | 'mistral'

export type TTSProvider = 'playht'

export interface Config {
  defaultSummaryProvider: SummaryProvider
  defaultTTSProvider: TTSProvider
  translate: {
    enable: boolean
    defaultLanguage: string
  }
  summaryProviders: {
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
    huggingface: {
      enable: boolean
      model: string
      api_key: string
    }
    mistral: {
      enable: boolean
      model: string
      api_key: string
    }
  }
  ttsProviders: {
    playht: {
      enable: boolean
      api_key: string
      user_id: string
      speed: number
    }
  }
}

export const defaultConfig: Config = {
  defaultSummaryProvider: 'groq',
  defaultTTSProvider: 'playht',
  translate: {
    enable: false,
    defaultLanguage: 'Vietnamese',
  },
  summaryProviders: {
    openai: {
      enable: false,
      model: 'gpt-3.5-turbo',
      api_key: '',
    },
    groq: {
      enable: false,
      model: 'llama3-groq-8b-8192-tool-use-preview',
      api_key: '',
    },
    gemini: {
      enable: false,
      model: 'llama-3.1-8b-instant',
      api_key: '',
    },
    huggingface: {
      enable: false,
      model: 'mistralai/Mistral-Nemo-Instruct-2407',
      api_key: '',
    },
    mistral: {
      enable: false,
      model: 'pixtral-12b-2409',
      api_key: '',
    },
  },
  ttsProviders: {
    playht: {
      enable: false,
      api_key: '',
      user_id: '',
      speed: 1,
    },
  },
}

export const availableOptions = {
  summaryProvider: [
    'openai',
    'groq',
    'gemini',
    'huggingface',
    'mistral',
  ] as SummaryProvider[],
  ttsProvider: ['playht'] as TTSProvider[],
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
  huggingface: {
    model: [
      'mistralai/Mistral-Nemo-Instruct-2407',
      'microsoft/Phi-3-mini-4k-instruct',
      'meta-llama/Meta-Llama-3-8B-Instruct',
    ],
  },
  mistral: {
    model: [
      'pixtral-12b',
      'open-mistral-nemo',
      'open-codestral-mamba',
      'mistral-large-latest',
      'mistral-small-latest',
      'codestral-latest',
      'mistral-embed',
    ],
  },
}
