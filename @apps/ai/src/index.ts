import { serve } from 'bun'

import { handleCors, withCors } from './cors'

const PORT = Bun.env.AI_SERVER_PORT || 4201
const YA_GPT_API_KEY = Bun.env.YANDEX_CLOUD_API_KEY
const YA_GPT_FOLDER_ID = Bun.env.YANDEX_CLOUD_FOLDER
const YA_GPT_MODEL = 'yandexgpt-lite'

if (!YA_GPT_API_KEY || !YA_GPT_FOLDER_ID) {
  throw new Error('[AI Environment] YaGPT API key and folder ID are required')
}

serve({
  port: PORT,
  routes: {
    '/api/v1/completion': async req => {
      const cors = handleCors(req)
      if (cors) return cors

      const { prompt } = await req.json()

      if (!prompt) {
        return new Response('Prompt is required', { status: 400 })
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
                text: prompt
              }
            ]
          })
        })

        if (!response.ok) {
          console.error(`[AI] Bad request: ${response.status}: "${response.statusText}"`)

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

        return withCors(Response.json(messages))
      } catch (error) {
        console.error('Error: ', error)

        if (error instanceof Error) {
          return Response.json(
            {
              message: 'Something went wrong',
              error: error.message
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
})
