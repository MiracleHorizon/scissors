import { CorsOptions, HttpMethod, Routes } from './types'

const allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] as const

export const injectCORS = (routes: Routes, options: CorsOptions = {}): Routes => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': (options.origin ?? '*') as string,
    'Access-Control-Allow-Methods': (options.methods ?? '*') as string,
    'Access-Control-Allow-Headers': (options.headers ?? '*') as string,
    'Access-Control-Allow-Credentials': (options.credentials ?? 'true') as string
  }

  const wrappedRoutes: Routes = {}

  for (const [path, body] of Object.entries(routes)) {
    if (typeof body === 'function') {
      wrappedRoutes[path] = async (req: Bun.BunRequest<string>) => {
        const res = await body(req)
        if (!res) throw new Error('Response not specified')
        for (const [key, value] of Object.entries(corsHeaders)) {
          res.headers.set(key, value)
        }
        return res
      }
    } else if (body instanceof Response) {
      wrappedRoutes[path] = async () => {
        const newRes = new Response(null, {
          status: body.status,
          statusText: body.statusText,
          headers: new Headers(body.headers)
        })

        for (const [key, value] of Object.entries(corsHeaders)) {
          newRes.headers.set(key, value)
        }

        return newRes
      }
    } else if (typeof body === 'object' && body !== null) {
      wrappedRoutes[path] = {}

      for (const [method, handler] of Object.entries(body)) {
        if (allowedMethods.includes(method as HttpMethod)) {
          const typedMethod = method as HttpMethod
          wrappedRoutes[path][typedMethod] = async (req: Bun.BunRequest<string>) => {
            const res = await handler!(req)
            if (!res) throw new Error('Response not specified')
            for (const [key, value] of Object.entries(corsHeaders)) {
              res.headers.set(key, value)
            }
            return res
          }
        }
      }
    }
  }

  return wrappedRoutes
}
