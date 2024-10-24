import { Roles } from '@prisma/client'
import { Middleware } from '../types'
import HttpErr from '../errors/HttpErr'

const roleAuthentication = (...roles: (string | Roles[])[]): Middleware => {
  return (req, _res, next) => {
    const role = req.user?.role
    if (roles.includes(role as string)) next()
    else throw new HttpErr(403, 'Forbidden', 'Role is wrong!')
  }
}

export default roleAuthentication
