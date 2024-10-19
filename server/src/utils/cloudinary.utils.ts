import * as fs from 'node:fs'
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
  UploadApiOptions,
  DeleteApiResponse,
} from 'cloudinary'
import { envs } from '../config'

cloudinary.config({
  cloud_name: envs.cloudinaryCloudName,
  api_key: envs.cloudinaryApiKey,
  api_secret: envs.cloudinaryApiSecret,
  secure: true,
})

export default class CloudinaryUtils {
  static async uploadFile(
    file: Express.Multer.File,
    folder: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    const options: UploadApiOptions = {
      folder: folder,
      use_filename: true,
      unique_filename: true,
      overwrite: true,
    }
    return new Promise<UploadApiResponse | UploadApiErrorResponse | undefined>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
          if (error) return reject(error)
          resolve(result)
        })
        fs.createReadStream(file.buffer).pipe(uploadStream)
      },
    )
  }

  static async deleteFile(publicId: string): Promise<DeleteApiResponse | undefined> {
    return new Promise<DeleteApiResponse | undefined>((resolve, reject) => {
      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) return reject(error)
        resolve(result)
      })
    })
  }
}
