import { handleCors, withCors } from './cors'
import { slides } from './slides'

const PORT = Bun.env.S3_SERVER_PORT ?? 4202

// TODO: Нормальный S3 :)
Bun.serve({
  port: PORT,
  routes: {
    '/api/v1/photos/compare-slides': async req => {
      const cors = handleCors(req)
      if (cors) return cors

      return withCors(new Response(JSON.stringify(slides)))
    }
  }
})
