import { connDb } from '../../db/connDb'
import HttpErr from '../../errors/HttpErr'
import CloudinaryUtils from '../../utils/cloudinary.utils'
import { IProfile } from './profile.interface'

export class ProfileService {
  static async getProfile(userId: string) {
    const profileFound = await connDb.profile.findFirst({
      where: { userId },
      select: {
        description: true,
        img: true,
        user: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    })

    if (!profileFound) throw new HttpErr(404, 'Not found', 'Profile not found!')

    return profileFound
  }

  static async createProfile(userId: string, description: string) {
    connDb.profile.create({
      data: {
        userId,
        description,
      },
    })
  }

  static async updateProfile(
    userId: string,
    data: IProfile,
    image: Express.Multer.File | undefined,
  ) {
    const profileFound = await connDb.profile.findFirst({
      where: { userId },
    })

    if (!profileFound) throw new HttpErr(404, 'Not found', 'User not found!')

    if (image) {
      const uploadImage = await CloudinaryUtils.uploadFile(image, profileFound.id, 'profiles')
      await connDb.profile.update({
        where: { userId },
        data: {
          description: data.description ? data.description : profileFound.description,
          img: uploadImage ? uploadImage.secure_url : profileFound.img,
        },
      })
    } else {
      await connDb.profile.update({
        where: { userId },
        data: { description: data.description },
      })
    }
  }
}
