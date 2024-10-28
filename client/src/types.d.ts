export type Recipe = {
  id?: string,
  title: string,
  description: string,
  image: string,
  categories?: string[]
  ingredients?: Ingredient[] | []
  createdAt?: string,
  updatedAt?: string
}

export type Ingredient = {
  id?: string,
  name: string,
  img: string,
  description: string,
  amount?: string,
  recipeId?: string,
  createdAt?: string,
  updatedAt?: string
}

export type Login = {
  email?: string,
  password: string
}

export type Register = {
  username: string,
  email: string,
  password: string
}

export type Category = {
  id: string,
  name: string,
  image: string
}
