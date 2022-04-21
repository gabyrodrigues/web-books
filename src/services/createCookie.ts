import { setCookie } from "nookies"

export default function createCookie(cookieTitle:string, cookieValue: string) {
  const cookie = setCookie(undefined, cookieTitle, cookieValue, {
    maxAge: 30 * 24 * 60 * 60
  })

  return cookie
}
