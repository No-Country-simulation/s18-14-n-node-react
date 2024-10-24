import { connDb } from '../../db/connDb'
import { Roles } from '../../enums/roles'
import HttpErr from '../../errors/HttpErr'

export class UserService {
  static async getUsers() {
    const usersFound = await connDb.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!usersFound) throw new HttpErr(404, 'Not found', 'No users found!')

    return usersFound
  }

  static async assignRole(id: string, roles: Roles) {
    let role: 'ADMIN' | 'CHIEF' | 'CLIENT' | undefined = undefined
    switch (roles) {
      case Roles.ADMIN:
        role = 'ADMIN'
        break
      case Roles.CHIEF:
        role = 'CHIEF'
        break
      case Roles.CLIENT:
        role = 'CLIENT'
        break
      default:
        break
    }

    await connDb.user.update({
      where: { id: id },
      data: {
        role: role,
      },
    })
  }
}
