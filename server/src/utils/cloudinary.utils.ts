import * as stream from 'node:stream'
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
  UploadApiOptions,
  DeleteApiResponse,
} from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default class CloudinaryUtils {
  static async uploadFile(
    file: Express.Multer.File,
    name: string,
    folder: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    const buffer = Buffer.from(file.buffer)
    const bufferStream = new stream.PassThrough()

    const options: UploadApiOptions = {
      folder: `recetapp/${folder}`,
      public_id: name,
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
        bufferStream.end(buffer).pipe(uploadStream)
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
