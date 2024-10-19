export type Recipe = {
  id: number,
  title: string,
  description: string,
  categoryId: number
}

export type Category = {
  id: number,
  name: string
}

export type Login = { 
  email: string, 
  password: string 
}

export type Register = { 
  username: string,
  email: string, 
  password: string 
}
