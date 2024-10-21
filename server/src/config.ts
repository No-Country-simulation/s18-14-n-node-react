import env from 'env-var'

export const envs = {
  nodeEnv: env.get('NODE_ENV').asString(),
  frontendUrl: env.get('FRONTEND_URL').asString(),
  backendUrl: env.get('BACKEND_URL').asString(),
  cookieName: env.get('COOKIE_NAME').asString(),
  jwtAccessSecret: env.get('JWT_ACCESS_SECRET').asString(),
  jwtRefreshSecret: env.get('JWT_REFRESH_SECRET').asString(),
  cloudinaryCloudName: env.get('CLOUDINARY_CLOUD_NAME').asString(),
  cloudinaryApiKey: env.get('CLOUDINARY_API_KEY').asString(),
  cloudinaryApiSecret: env.get('CLOUDINARY_API_SECRET').asString(),
  mailerSendApiKey: env.get('MAILERSEND_API_KEY').asString(),
  mailerSendDomain: env.get('MAILERSEND_DOMAIN').asString(),
}
