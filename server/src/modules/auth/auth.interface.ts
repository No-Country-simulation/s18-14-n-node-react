export interface IAuth {
  email: string
  username: string
  password: string
}

export interface IChangePassword {
  currentPassword: string
  newPassword: string
}
