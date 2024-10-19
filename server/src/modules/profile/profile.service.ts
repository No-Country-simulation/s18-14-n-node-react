import { connDb } from '../../db/connDb'
import HttpErr from '../../errors/HttpErr'
import CloudinaryUtils from '../../utils/cloudinary.utils'

export class ProfileService {
  static async getProfile(id: string) {
    const profileFound = connDb.profile.findUnique({
      where: {
        id: id,
      },
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

  static async createProfile(
    userId: string,
    description: string,
    image: Express.Multer.File | undefined,
  ) {
    if (!image) return
    const uploadImage = await CloudinaryUtils.uploadFile(image, 'profile')
    connDb.profile.create({
      data: {
        userId,
        description,
        img: uploadImage?.public_id ?? 'image',
      },
    })
  }

  static async updateProfile(
    userId: string,
    description: string,
    image: Express.Multer.File | undefined,
  ) {
    if (!image) return
    await CloudinaryUtils.uploadFile(image, 'profile')

    connDb.profile.update({
      where: {
        userId,
      },
      data: {
        description,
      },
    })
  }
}
