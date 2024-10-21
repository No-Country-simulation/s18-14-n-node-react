import { connDb } from '../../db/connDb'
import { CreateIngredient } from './ingredient.types'

export class IngredientService {
  static async createIngredient(params: CreateIngredient) {
    const newIngredient = await connDb.ingredient.create({ data: { ...params } })

    return newIngredient
  }
}
