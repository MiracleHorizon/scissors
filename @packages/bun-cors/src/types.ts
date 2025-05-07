export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface CorsOptions {
  origin?: string
  methods?: HttpMethod[]
  headers?: string[]
  credentials?: boolean
}

// eslint-disable-next-line
type RouteHandler<Path extends string> = (req: Bun.BunRequest<Path>) => Response | Promise<Response>

type Route<Path extends string> =
  | RouteHandler<Path>
  // eslint-disable-next-line
  | { [Method in HttpMethod]?: RouteHandler<Path> }
  | Response

export type Routes = {
  [Path in string]: Route<Path> | RouteHandler<Path> | Response
}
