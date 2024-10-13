import env from 'env-var'

export const envs = {
  nodeEnv: env.get('NODE_ENV').asString(),
  databaseUrlDev: env.get('DATABASE_URL_DEV').asString(),
  databaseUrlProd: env.get('DATABASE_URL_PROD').asString(),
  jwtAccessSecret: env.get('JWT_ACCESS_SECRET').asString(),
  jwtRefreshSecret: env.get('JWT_REFRESH_SECRET').asString(),
}
