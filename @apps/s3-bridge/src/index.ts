import { serve } from 'bun'

import { injectCORS } from '@scissors/bun-cors'

import { slides } from './slides'

const PORT = Bun.env.S3_SERVER_PORT ?? 4202
const CLIENT_API = Bun.env.CLIENT_API ?? 'http://localhost:3000'

// TODO: Нормальный S3 :)
serve({
  port: PORT,
  routes: injectCORS(
    {
      '/api/v1/photos/compare-slides': {
        GET: async () => Response.json(slides)
      }
    },
    {
      origin: CLIENT_API,
      methods: ['GET'],
      credentials: false
    }
  ),
  fetch: () =>
    new Response('Not Found', {
      status: 404
    })
})

console.log(`[S3 Bridge] Server is running on port ${PORT}`)
