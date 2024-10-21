import * as crypto from 'node:crypto'
import { Roles } from '@prisma/client'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { envs } from '../../config'
import { IAuth, IChangePassword } from './auth.interface'
import HttpErr from '../../errors/HttpErr'
import { IPayload } from '../../user'
import { connDb } from '../../db/connDb'
import MailerSendUtils from '../../utils/mailer-send.utils'

export class AuthService {
  static async login(data: IAuth): Promise<{ accessToken: string; refreshToken: string }> {
    let userFound
    const accessSecret =
      envs.nodeEnv === 'prod' ? (envs.jwtAccessSecret as string) : 'access_secret'

    const refreshSecret =
      envs.nodeEnv === 'prod' ? (envs.jwtRefreshSecret as string) : 'refresh_secret'

    if (data.email) userFound = await connDb.user.findUnique({ where: { email: data.email } })
    else if (data.username)
      userFound = await connDb.user.findUnique({ where: { username: data.username } })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')

    const match = await bcrypt.compare(data.password, userFound.password)

    if (!match) throw new HttpErr(401, 'Unauthorized', 'Password does not match!')

    const payload: IPayload = {
      id: userFound.id,
      role: userFound.role,
    }

    const accessToken = jwt.sign(payload, accessSecret, { expiresIn: '15m' })
    const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: '2h' })

    return { accessToken, refreshToken }
  }

  static async register(data: IAuth): Promise<void> {
    const users = await connDb.user.findMany()

    const emailFound = users.some((user) => user.email === data.email)
    const usernameFound = users.some((user) => user.username === data.username)

    if (emailFound) throw new HttpErr(409, 'Conflict', 'Email already registered!')
    if (usernameFound) throw new HttpErr(409, 'Conflict', 'Username already exists!')

    const hash = await bcrypt.hash(data.password, 10)

    const newUser = await connDb.user.create({
      data: {
        ...data,
        password: hash,
        role: Roles.CLIENT,
      },
    })

    await connDb.profile.create({
      data: {
        userId: newUser.id,
      },
    })

    await MailerSendUtils.welcomeMail(newUser.email, 'views/welcome.hbs', {
      user: newUser.username,
    })
  }

  static async deleteRefreshToken(refreshToken: string) {
    const userFound = await connDb.user.findFirst({
      where: { refreshToken: { has: refreshToken } },
    })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')

    const refreshTokenArray = userFound.refreshToken.filter((rt) => rt !== refreshToken)

    await connDb.user.update({
      where: { id: userFound.id },
      data: { refreshToken: refreshTokenArray },
    })
  }

  static async changePassword(id: string, data: IChangePassword): Promise<void> {
    const userFound = await connDb.user.findUnique({
      where: { id: id },
    })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')

    const match = await bcrypt.compare(data.currentPassword, userFound.password)

    if (!match) throw new HttpErr(403, 'Forbidden', 'The current password is invalid!')

    const equal = data.newPassword === data.currentPassword

    if (equal) throw new HttpErr(409, 'Conflict', 'The new password is equal!')

    const hash = await bcrypt.hash(data.newPassword, 10)

    await connDb.user.update({
      where: { id: userFound.id },
      data: {
        password: hash,
      },
    })
  }

  static async forgotPassword(email: string): Promise<void> {
    const recoveryToken = crypto.randomBytes(32).toString('hex')
    const expiresIn = new Date()
    expiresIn.setMinutes(expiresIn.getMinutes() + 10)

    const userFound = await connDb.user.findUnique({
      where: { email: email },
    })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')

    connDb.user.update({
      where: {
        id: userFound.id,
      },
      data: {
        recoveryToken: recoveryToken,
        recoveryExpiration: expiresIn,
      },
    })

    const link = `${envs.frontendUrl}/reset-password?token=${recoveryToken}`

    await MailerSendUtils.resetPasswordMail(userFound.email, 'views/reset-password.hbs', {
      user: userFound.username,
      link: link,
    })
  }

  static async checkUserForPasswordReset(token: string) {
    const userFound = await connDb.user.findFirst({
      where: {
        recoveryToken: token,
      },
    })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')
    if (userFound.recoveryExpiration && userFound.recoveryExpiration.getMinutes() > 10)
      throw new HttpErr(403, 'Forbidden', 'Recovery token expired!')
  }

  static async resetPassword(token: string, password: string): Promise<void> {
    const userFound = await connDb.user.findFirst({
      where: { recoveryToken: token },
    })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')

    if (userFound.recoveryExpiration && userFound.recoveryExpiration.getMinutes() > 10)
      throw new HttpErr(403, 'Forbidden', 'Recovery token expired!')

    const hash = await bcrypt.hash(password, 10)

    await connDb.user.update({
      where: { id: userFound.id },
      data: {
        recoveryToken: null,
        recoveryExpiration: null,
        password: hash,
      },
    })
  }

  static async deleteAccount(id: string): Promise<void> {
    const userFound = await connDb.user.findUnique({
      where: { id: id },
    })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')

    await connDb.user.delete({
      where: { id: userFound.id },
    })
  }
}
