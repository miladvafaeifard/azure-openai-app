import { config } from './config'
import { OpenAIClient } from './openai'
import { CompletionRequest, ChatRequest } from './types'

const client = new OpenAIClient({
  apiVersion: '2024-08-01-preview',
  apiKey: config.apiKey,
  endpoint: config.endpoint,
})

const completionRequest: CompletionRequest = {
  model: 'gpt-4o',
  prompt: 'Once upon a time',
  maxTokens: 100,
}

const chatRequest: ChatRequest = {
  model: 'gpt-4o',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'What is the meaning of life?' },
  ],
  maxTokens: 100,
}

client.getCompletion(completionRequest).then((response) => {
  console.log(response)
})

client.getChatResponse(chatRequest).then((response) => {
  console.log(response)
})
