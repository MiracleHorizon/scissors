import { injectCORS } from '@scissors/bun-cors'

import { slides } from './slides'

const PORT = Bun.env.S3_SERVER_PORT ?? 4202
const CLIENT_API = Bun.env.CLIENT_API ?? 'http://localhost:3000'

// TODO: Нормальный S3 :)
Bun.serve({
  port: PORT,
  routes: injectCORS(
    {
      '/api/v1/photos/compare-slides': async () => new Response(JSON.stringify(slides))
    },
    {
      origin: CLIENT_API,
      methods: ['POST'],
      credentials: false
    }
  )
})
