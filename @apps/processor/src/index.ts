import { serve } from 'bun'

import { handleCors, withCors } from './cors'
import { ImageConverter, ImageResizer } from './sharp'

const PORT = Bun.env.SERVER_PORT ?? 4200

serve({
  port: PORT,
  routes: {
    '/api/v1/convert': async req => {
      const cors = handleCors(req)
      if (cors) return cors

      const formData = await req.formData()
      const file = formData.get('file')
      const settings = formData.get('settings')

      if (file && file instanceof File && settings && typeof settings === 'string') {
        const arrayBuffer = await file.arrayBuffer()
        const converter = new ImageConverter(arrayBuffer)
        const buffer = await converter.convert(JSON.parse(settings))

        return withCors(new Response(buffer))
      }

      return new Response('Error', { status: 500 })
    },
    '/api/v1/resize': async req => {
      const cors = handleCors(req)
      if (cors) return cors

      const formData = await req.formData()
      const file = formData.get('file')
      const settings = formData.get('settings')

      if (file && file instanceof File && settings && typeof settings === 'string') {
        const arrayBuffer = await file.arrayBuffer()
        const resizer = new ImageResizer(arrayBuffer)
        const buffer = await resizer.resizeImage(JSON.parse(settings))

        return withCors(new Response(buffer))
      }

      return new Response('Error', { status: 500 })
    }
  }
})
