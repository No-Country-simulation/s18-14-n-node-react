import { UUID } from 'node:crypto'
import { connDb } from '../../db/connDb'
import { CreateIngredient, ReadIngredients, UpdateIngredient } from './ingredient.types'
import { NFRecordErr } from '../../errors/NFRecordErr'

export class IngredientService {
  static async createIngredient(params: CreateIngredient) {
    const newIngredient = await connDb.ingredient.create({ data: { ...params } })

    return newIngredient
  }

  static async readIngredients(params: ReadIngredients) {
    const { page = 1, limit = 20, name } = params

    const totalIngredients = await connDb.ingredient.count({
      where: { name: { contains: name, mode: 'insensitive' } },
    })

    const totalPages = Math.ceil(totalIngredients / limit)

    const ingredients = await connDb.ingredient.findMany({
      where: { name: { contains: name, mode: 'insensitive' } },
      select: { id: true, name: true, img: true, description: true },
      take: limit,
      skip: (page - 1) * limit,
    })

    return {
      totalPages,
      currentPage: page,
      limit,
      results: ingredients,
    }
  }

  static async updateIngredient(ingredientId: UUID, params: UpdateIngredient) {
    const ingredientUpdated = await connDb.ingredient.update({
      where: { id: ingredientId },
      data: { ...params },
    })

    if (!ingredientUpdated) throw new NFRecordErr()

    return ingredientUpdated
  }
}
