export interface CompletionRequest {
  readonly model: string
  readonly prompt: string
  readonly maxTokens?: number
}

export type Role = 'system' | 'user' | 'assistant'

export type ChatMessages = Array<{ role: Role; content: string }>

export interface ChatRequest {
  readonly model: string
  messages: ChatMessages
  readonly maxTokens?: number
}
