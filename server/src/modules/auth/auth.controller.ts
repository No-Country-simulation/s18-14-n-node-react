import { CookieOptions, Response } from 'express'
import { AuthService } from './auth.service'
import { Controller } from '../../types'
import HttpErr from '../../errors/HttpErr'

export class AuthController {
  private static setCookie(name: string, res: Response, token: string) {
    const options: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'prod',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 2,
    }
    res.cookie(name, token, options)
  }

  private static removeCookie(name: string, res: Response) {
    const options: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'prod',
      sameSite: 'strict',
    }
    res.clearCookie(name, options)
  }

  static login: Controller = (req, res, next) => {
    const cookieName =
      process.env.NODE_ENV === 'prod' ? (process.env.COOKIE_NAME as string) : 'recetapp'
    const cookie = req.headers.cookie

    if (cookie) throw new HttpErr(400, 'Bad Request', 'Already logged in!')

    const data = AuthService.login(req.body)
    data
      .then(({ accessToken, refreshToken }) => {
        this.setCookie(cookieName, res, refreshToken)
        res.status(200).json({ accessToken })
      })
      .catch((error) => {
        next(error)
      })
  }

  static register: Controller = (req, res, next) => {
    const data = AuthService.register(req.body)
    data
      .then(() => {
        res.status(200).json({ message: 'New user registered!' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static logout: Controller = (req, res, next) => {
    const cookieName =
      process.env.NODE_ENV === 'prod' ? (process.env.COOKIE_NAME as string) : 'recetapp'
    const cookie = req.headers.cookie

    if (!cookie) throw new HttpErr(400, 'Bad Request', 'Not logged in!')

    const refreshToken = cookie.split('=')[1].split(';')[0]

    const data = AuthService.deleteRefreshToken(refreshToken)
    data
      .then(() => {
        this.removeCookie(cookieName, res)
        res.status(200).json({ message: 'Logout successfully!' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static changePassword: Controller = (req, res, next) => {
    const id = req.user?.id

    if (!id) throw new HttpErr(400, 'Bad Request', 'User not found!')

    const data = AuthService.changePassword(id, req.body)
    data
      .then(() => {
        res.status(200).json({ message: 'Password succesfully changed!' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static forgotPassword: Controller = (req, res, next) => {
    const data = AuthService.forgotPassword(req.body['email'])
    data
      .then(() => {
        res.status(200).json({ message: 'Email sent for recovery!' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static recoveryPassword: Controller = (req, res, next) => {
    const token = req.params.token
    const password = req.body['password']

    const data = AuthService.resetPassword(token, password)
    data
      .then(() => {
        res.status(201).json({ message: 'Password reset successfully!' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static deleteAccount: Controller = (req, res, next) => {
    const id = req.user?.id

    if (!id) throw new HttpErr(400, 'Bad Request', 'Id not found!')

    const data = AuthService.deleteAccount(id)
    data
      .then(() => {
        res.status(201).json({ message: 'Account successfully deleted!' })
      })
      .catch((error) => {
        next(error)
      })
  }
}
