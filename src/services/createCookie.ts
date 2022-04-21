import { setCookie } from 'nookies'

export default function createCookie(ctx: any, cookieTitle: string, cookieValue: string) {
  const cookie = setCookie(ctx, cookieTitle, cookieValue, {
    maxAge: 30 * 24 * 60 * 60
  })

  return cookie
}
