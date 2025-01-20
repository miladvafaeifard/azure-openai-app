import dotenv from 'dotenv'

dotenv.config()

export const config = {
  apiKey: process.env.AZURE_OPENAI_API_KEY || '',
  endpoint: process.env.AZURE_OPENAI_ENDPOINT_URL || '',
}
