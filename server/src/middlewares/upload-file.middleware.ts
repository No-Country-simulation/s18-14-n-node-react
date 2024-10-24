import multer, { memoryStorage, Options } from 'multer'
import HttpErr from '../errors/HttpErr'

function uploadImageConfig(...formats: string[]): Options {
  return {
    limits: { fileSize: 3 * 1024 * 1024 },
    fileFilter: (_req, file, callback) => {
      const isMatch = formats.some((format) => format === file.mimetype)
      if (isMatch) callback(null, true)
      else
        callback(
          new HttpErr(415, 'Unsupported type media', 'The file should a jpeg, png or gif image'),
        )
    },
    storage: memoryStorage(),
  }
}

export const uploadImage = multer(uploadImageConfig('image/jpeg', 'image/png', 'image/gif'))
