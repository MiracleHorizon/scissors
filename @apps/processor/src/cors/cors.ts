import { CLIENT_API } from '../config/constants'

export const withCors = (res: Response): Response => {
  res.headers.set('Access-Control-Allow-Origin', CLIENT_API)
  res.headers.set('Access-Control-Allow-Methods', 'POST')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  res.headers.set('Access-Control-Allow-Credentials', 'false')

  return res
}

export const handleCors = (req: Request): Response | null => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': CLIENT_API,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'false'
      }
    })
  }

  return null
}
