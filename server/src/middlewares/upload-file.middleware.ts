import multer, { memoryStorage, Options } from 'multer'

function uploadImageConfig(...formats: string[]): Options {
  return {
    limits: { fileSize: 3 * 1024 * 1024 },
    fileFilter: (_req, file, callback) => {
      const isMatch = formats.some((format) => format === file.mimetype)
      if (isMatch) callback(null, true)
      else callback(null, false)
    },
    storage: memoryStorage(),
  }
}

export const uploadImage = multer(uploadImageConfig('image/jpeg', 'image/png', 'image/gif'))
