import { serve } from 'bun'

import { config } from '@scissors/config'
import { injectCORS } from '@scissors/bun-cors'

import { slides } from './slides'

// TODO: Нормальный S3 :)
serve({
  port: config.S3_SERVER_PORT,
  routes: injectCORS(
    {
      '/api/v1/photos/compare-slides': {
        GET: async () => Response.json(slides)
      }
    },
    {
      origin: config.CLIENT_API,
      methods: ['GET'],
      credentials: false
    }
  ),
  fetch: () =>
    new Response('Not Found', {
      status: 404
    })
})

console.log(`[S3 Bridge] Server is running on port ${config.S3_SERVER_PORT}`)
