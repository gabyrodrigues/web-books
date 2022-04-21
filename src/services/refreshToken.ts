import { parseCookies } from 'nookies'
import { api } from './api'

export async function refreshToken(ctx?: any) {
  const { '@ioasys-books:refresh-token': refreshToken } = parseCookies(ctx)

  const response = await api.post('/auth/refresh-token', {
    refreshToken
  })

  return response
}
