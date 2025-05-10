import { CorsOptions, HttpMethod, Routes } from './types'

const allowedMethods = new Set(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'] as const)

// TODO: Улучшить
export const injectCORS = (routes: Routes, options: CorsOptions = {}): Routes => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': options.origin ?? '*',
    'Access-Control-Allow-Methods': String(options.methods ?? '*'),
    'Access-Control-Allow-Headers': String(options.headers ?? '*'),
    'Access-Control-Allow-Credentials': String(options.credentials ?? true)
  }

  const wrappedRoutes: Routes = {}

  for (const [path, body] of Object.entries(routes)) {
    if (typeof body === 'function') {
      wrappedRoutes[path] = async (req: Bun.BunRequest<string>) => {
        if (
          options.methods &&
          req.method !== 'OPTIONS' &&
          !options.methods.includes(req.method as HttpMethod)
        ) {
          return new Response('Method Not Allowed', {
            status: 405,
            headers: corsHeaders
          })
        }

        if (options.headers && req.headers.has('access-control-request-headers')) {
          const requestedHeaders =
            req.headers
              .get('access-control-request-headers')
              ?.split(',')
              .map(h => h.trim().toLowerCase()) || []
          const allowedHeaders = options.headers.map(h => h.toLowerCase())

          const hasDisallowedHeader = requestedHeaders.some(
            header => !allowedHeaders.includes(header)
          )

          if (hasDisallowedHeader) {
            return new Response('Forbidden Headers', {
              status: 403,
              headers: corsHeaders
            })
          }
        }

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
        if (allowedMethods.has(method as HttpMethod)) {
          const typedMethod = method as HttpMethod
          wrappedRoutes[path][typedMethod] = async (req: Bun.BunRequest<string>) => {
            if (
              options.methods &&
              typedMethod !== 'OPTIONS' &&
              !options.methods.includes(typedMethod)
            ) {
              return new Response('Method Not Allowed', {
                status: 405,
                headers: corsHeaders
              })
            }

            if (options.headers && req.headers.has('access-control-request-headers')) {
              const requestedHeaders =
                req.headers
                  .get('access-control-request-headers')
                  ?.split(',')
                  .map(h => h.trim().toLowerCase()) || []
              const allowedHeaders = options.headers.map(h => h.toLowerCase())

              const hasDisallowedHeader = requestedHeaders.some(
                header => !allowedHeaders.includes(header)
              )

              if (hasDisallowedHeader) {
                return new Response('Forbidden Headers', {
                  status: 403,
                  headers: corsHeaders
                })
              }
            }

            const res = await handler!(req)
            if (!res) throw new Error('Response not specified')
            for (const [key, value] of Object.entries(corsHeaders)) {
              res.headers.set(key, value)
            }
            return res
          }
        }
      }

      const route = wrappedRoutes[path]
      if ('OPTIONS' in route && !route['OPTIONS']) {
        route['OPTIONS'] = async () =>
          new Response(null, {
            status: 204,
            headers: corsHeaders
          })
      }
    }
  }

  return wrappedRoutes
}
