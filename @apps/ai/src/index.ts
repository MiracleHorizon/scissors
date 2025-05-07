import { serve } from 'bun'

import { injectCORS } from '@scissors/bun-cors'

import { getContextForPrompt } from './mcp/context'
import { parseSettingsFromGpt } from './utils/parseSettingsFromGpt'

const PORT = Bun.env.AI_SERVER_PORT || 4201
const YA_GPT_API_KEY = Bun.env.YANDEX_CLOUD_API_KEY
const YA_GPT_FOLDER_ID = Bun.env.YANDEX_CLOUD_FOLDER
const CLIENT_API = Bun.env.CLIENT_API ?? 'http://localhost:3000'
const YA_GPT_MODEL = 'yandexgpt-lite'

if (!YA_GPT_API_KEY) {
  throw new Error('[AI] YaGPT API key is required')
}
if (!YA_GPT_FOLDER_ID) {
  throw new Error('[AI] YaGPT folder ID is required')
}

/**
 * The limit on the number of requests per hour is made to prevent abuse of the YaGPT API
 * and the consumption of tokens (money).
 *
 * Because there is no authorization in the application, I made a limit on the entire backend.
 * For a request, a successful response from the YaGPT API is considered.
 */
// TODO: Redis?
const MAX_REQUESTS_PER_HOUR = 25
const RESET_TIME_INTERVAL = 60 * 60 * 1000

let totalRequests = 0
setInterval(() => {
  totalRequests = 0
}, RESET_TIME_INTERVAL)

// TODO: Logger
// TODO: server.requestIP
serve({
  port: PORT,
  routes: injectCORS(
    {
      '/api/v1/completion': {
        POST: async req => {
          // TODO: Нужен какой-то алерт в ТГ (etc), что кто-то пытается абузить
          if (totalRequests >= MAX_REQUESTS_PER_HOUR) {
            return Response.json(
              {
                message: 'Rate limit exceeded'
              },
              {
                status: 429
              }
            )
          }

          const { prompt } = await req.json()

          if (!prompt) {
            return Response.json(
              {
                message: 'Prompt is required'
              },
              {
                status: 400
              }
            )
          }

          try {
            const url = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion'
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                Authorization: `Api-Key ${YA_GPT_API_KEY}`,
                'Content-Type': 'application/json',
                'x-folder-id': YA_GPT_FOLDER_ID
              },
              body: JSON.stringify({
                modelUri: `gpt://${YA_GPT_FOLDER_ID}/${YA_GPT_MODEL}`,
                completionOptions: {
                  stream: false,
                  temperature: 0.6,
                  maxTokens: '2000'
                },
                messages: [
                  {
                    role: 'user',
                    text: getContextForPrompt(prompt)
                  }
                ]
              })
            })

            if (!response.ok) {
              console.error(
                `[AI] [api/v1/completion] Bad request: ${response.status}: "${response.statusText}"`
              )

              return Response.json(
                {
                  message: 'Bad request',
                  error: response.statusText
                },
                {
                  status: 400
                }
              )
            }

            const { result } = await response.json()
            const alternatives: { message: YaGptMessage }[] = result.alternatives
            const messages = alternatives.map(({ message }) => message.text)
            totalRequests++

            if (messages.some(message => message.toLowerCase().startsWith('invalid'))) {
              return Response.json(
                {
                  message: 'WRONG_DATA'
                },
                {
                  status: 400
                }
              )
            }

            const settings = parseSettingsFromGpt(messages[0])

            return Response.json(settings)
          } catch (error) {
            console.error('[AI] [api/v1/completion] Error: ', error)

            if (error instanceof Error) {
              return Response.json(
                {
                  message: 'Something went wrong'
                },
                {
                  status: 500
                }
              )
            }

            return Response.json(
              {},
              {
                status: 500
              }
            )
          }
        }
      }
    },
    {
      origin: CLIENT_API,
      methods: ['POST'],
      credentials: false
    }
  ),
  fetch: () =>
    new Response('Not Found', {
      status: 404
    })
})

console.log(`[AI] Server is running on port ${PORT}`)
