import { injectCORS } from '@scissors/bun-cors'

import { ImageConverter, ImageResizer } from './sharp'

const PORT = Bun.env.SERVER_PORT ?? 4200
const CLIENT_API = Bun.env.CLIENT_API ?? 'http://localhost:3000'

Bun.serve({
  port: PORT,
  routes: injectCORS(
    {
      '/api/v1/convert': async req => {
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
      },
      '/api/v1/resize': async req => {
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
    },
    {
      origin: CLIENT_API,
      methods: ['POST'],
      credentials: false
    }
  )
})
