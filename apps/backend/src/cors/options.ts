import type { CorsOptions } from './types'

export const getClientAPI = (): string | null => process.env.CLIENT_API ?? null

const corsOptions: CorsOptions = {
  methods: ['POST'],
  credentials: false
}

const clientAPI = getClientAPI()
if (clientAPI) {
  corsOptions.origin = clientAPI
}

export { corsOptions }
