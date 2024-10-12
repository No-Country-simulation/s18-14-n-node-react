import { Roles } from '@prisma/client'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { envs } from '../../config'
import { IAuth, IChangePassword } from './auth.interface'
import HttpErr from '../../errors/HttpErr'
import { IPayload } from '../../user'
import { connDb } from '../../db/connDb'

export class AuthService {
  static async login(data: IAuth): Promise<{ accessToken: string }> {
    let userFound
    const accessSecret = envs.nodeEnv === 'prod' ? (envs.jwtAccessSecret as string) : 'secret'

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

    const accessToken = jwt.sign(payload, accessSecret, { expiresIn: '20m' })

    return { accessToken }
  }

  static async register(data: IAuth): Promise<void> {
    const userFound = await connDb.user.findUnique({
      where: { email: data.email },
    })

    if (userFound) throw new HttpErr(409, 'Conflict', 'User already exists!')

    const hash = await bcrypt.hash(data.password, 10)

    await connDb.user.create({
      data: {
        ...data,
        password: hash,
        role: Roles.CLIENT,
      },
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
}
