export interface Config {
  provider: string;
  openai: {
    model: string;
    api_key: string;
  };
  groq: {
    model: string;
    api_key: string;
  };
  gemini: {
    model: string;
    api_key: string;
  };
}

export const providers = ['openai', 'groq', 'gemini'];
export const availableModels = {
  openai: [],
  groq: [
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
  gemini: [],
};
