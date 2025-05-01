import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

config({
  path: join(__dirname, '../../../.env.development')
})

const app = express()
const PORT = 4201

app.use(
  cors({
    origin: process.env.CLIENT_API
  })
)
app.use(morgan('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

const yaGptApiKey = process.env.YANDEX_CLOUD_API_KEY
const yaGptFolderId = process.env.YANDEX_CLOUD_FOLDER

app.post('/api/ai/completion', async (req, res) => {
  const { prompt } = req.body

  if (!prompt) {
    return res.status(400).json({
      message: 'Prompt is required'
    })
  }

  try {
    const url = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Api-Key ${yaGptApiKey}`,
        'Content-Type': 'application/json',
        'x-folder-id': yaGptFolderId
      },
      body: JSON.stringify({
        modelUri: `gpt://${yaGptFolderId}/yandexgpt-lite`,
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
      console.log(response)

      return res.status(400).json({
        message: 'Bad request',
        error: response.statusText
      })
    }

    const {
      result: { alternatives }
    } = await response.json()

    const messages = []
    for (const { message } of alternatives) {
      messages.push(message.text)
    }

    res.status(200).json(messages)
  } catch (error) {
    console.error('Error: ', error)

    res.status(500).json({
      message: 'Something went wrong',
      error: error.message
    })
  }
})

app.use((err, _req, res, _next) => {
  console.error(err.stack)

  res.status(500).json({
    message: 'Something went wrong'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
