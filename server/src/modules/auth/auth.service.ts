import { PrismaClient, Roles } from '@prisma/client'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { envs } from '../../config'
import { IAuth } from './auth.interface'
import HttpErr from '../../errors/HttpErr'

const prisma = new PrismaClient()

export class AuthService {
  static async login(data: IAuth) {
    let userFound
    const accessSecret = envs.nodeEnv === 'prod' ? (envs.jwtAccessSecret as string) : 'secret'

    if (data.email) userFound = await prisma.user.findUnique({ where: { email: data.email } })
    else if (data.username)
      userFound = await prisma.user.findUnique({ where: { username: data.username } })

    if (!userFound) throw new HttpErr(404, 'Not found', 'User not found!')

    const match = await bcrypt.compare(data.password, userFound.password)

    if (!match) throw new HttpErr(401, 'Unauthorized', 'Password does not match!')

    const payload = {
      id: userFound.id,
      role: userFound.role,
    }

    const accessToken = jwt.sign(payload, accessSecret, { expiresIn: '20m' })

    return { accessToken }
  }

  static async register(data: IAuth) {
    const userFound = await prisma.user.findUnique({
      where: { email: data.email },
    })

    if (userFound) throw new HttpErr(409, 'Conflict', 'User already exists!')

    const hash = await bcrypt.hash(data.password, 10)

    await prisma.user.create({
      data: {
        ...data,
        password: hash,
        role: Roles.CLIENT,
      },
    })
    return { msg: 'New user registered' }
  }
}
