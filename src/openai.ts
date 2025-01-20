import { AzureOpenAI } from 'openai'

import { CompletionRequest, ChatRequest } from './types'

export interface OpenAIClientOptions {
  readonly apiKey: string
  readonly endpoint: string
  readonly apiVersion: string
}

export class OpenAIClient {
  private client: AzureOpenAI

  constructor(opts: OpenAIClientOptions) {
    this.client = new AzureOpenAI({
      apiVersion: opts.apiVersion,
      apiKey: opts.apiKey,
      endpoint: opts.endpoint,
    })
  }

  async getCompletion(request: CompletionRequest): Promise<string> {
    const response = await this.client.completions.create({
      model: request.model,
      prompt: request.prompt,
      max_tokens: request.maxTokens,
    })

    return response.choices[0]!.text
  }

  async getChatResponse(request: ChatRequest): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: request.model,
      messages: request.messages,
    })
    return response.choices[0]!.message.content!
  }
}
