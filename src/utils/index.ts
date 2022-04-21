import { destroyCookie } from 'nookies'

export function cleanCookies (ctx: any) {
  destroyCookie(ctx, '@ioasys-books:token')
  destroyCookie(ctx, '@ioasys-books:refresh-token')
  destroyCookie(ctx, '@ioasys-books:user')
}
