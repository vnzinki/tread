export interface GeminiResponse {
  candidates: Candidate[]
  usageMetadata: UsageMetadata
}

export interface Candidate {
  content: Content
  finishReason: string
  index: number
  safetyRatings: SafetyRating[]
}

export interface Content {
  parts: Part[]
  role: string
}

export interface Part {
  text: string
}

export interface SafetyRating {
  category: string
  probability: string
}

export interface UsageMetadata {
  promptTokenCount: number
  candidatesTokenCount: number
  totalTokenCount: number
}
