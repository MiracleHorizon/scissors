import { serve } from 'bun'

import { config } from '@scissors/config'
import { injectCORS } from '@scissors/bun-cors'

import { ImageConverter, ImageResizer } from './sharp'

serve({
  port: config.SERVER_PORT,
  routes: injectCORS(
    {
      '/api/v1/convert': {
        POST: async req => {
          const formData = await req.formData()
          const file = formData.get('file')
          const settings = formData.get('settings')

          if (file && file instanceof File && settings && typeof settings === 'string') {
            const arrayBuffer = await file.arrayBuffer()
            const converter = new ImageConverter(arrayBuffer)
            const buffer = await converter.convert(JSON.parse(settings))

            return new Response(buffer)
          }

          return new Response('Error', { status: 500 })
        }
      },
      '/api/v1/resize': {
        POST: async req => {
          const formData = await req.formData()
          const file = formData.get('file')
          const settings = formData.get('settings')

          if (file && file instanceof File && settings && typeof settings === 'string') {
            const arrayBuffer = await file.arrayBuffer()
            const resizer = new ImageResizer(arrayBuffer)
            const buffer = await resizer.resizeImage(JSON.parse(settings))

            return new Response(buffer)
          }

          return new Response('Error', { status: 500 })
        }
      }
    },
    {
      origin: config.CLIENT_API,
      methods: ['POST'],
      credentials: false
    }
  ),
  fetch: () =>
    new Response('Not Found', {
      status: 404
    })
})

console.log(`[Processor] Server is running on port ${PORT}`)
