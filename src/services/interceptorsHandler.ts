import axios, { AxiosResponse } from 'axios'
import { Router } from 'next/router'
import { destroyCookie } from 'nookies';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { cleanCookies } from '../utils';
import createCookie from './createCookie';
import { refreshToken } from './refreshToken';

export const responseHandler = (response: AxiosResponse) => response

export async function errorHandler(error: { response?: any; config?: any }, ctx?: any) {
  const { status } = error?.response || {}

  if (status === 401) {
    const { config } = error

    try {
      const refreshTokenResponse = await refreshToken(ctx)
      const { headers } = refreshTokenResponse

      createCookie(ctx, '@ioasys-books:token', headers.authorization)
      createCookie(ctx, '@ioasys-books:refresh-token', headers['refresh-token'])

      const response = await axios({
        headers: {
          ...config.headers,
          Authorization: `Bearer ${headers.authorization}`
        },
        method: config.method,
        url: 'https://books.ioasys.com.br/api/v1'+config.url,
        data: config.data,
      })

      return response
    } catch(error) {
      cleanCookies(ctx)

      return Promise.reject(error)
    }
  }

  return Promise.reject(error)
}
