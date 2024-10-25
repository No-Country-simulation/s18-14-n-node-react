import { Controller } from '../../types'
import { IngredientService } from './ingredient.service'
import { CreateIngredient, ReadIngredients } from './ingredient.types'

export class IngredientController {
  static createIngredient: Controller = async (_req, res, next) => {
    try {
      const dto = res.locals?.body as CreateIngredient
      const newIngredient = await IngredientService.createIngredient(dto)

      res.status(201).json(newIngredient)
    } catch (error) {
      next(error)
    }
  }

  static readIngredients: Controller = async (_req, res, next) => {
    try {
      const dto = res.locals?.query as ReadIngredients
      const ingredients = await IngredientService.readIngredients(dto)

      res.status(200).json(ingredients)
    } catch (error) {
      next(error)
    }
  }

  static updateIngredients: Controller = async (_req, _res, next) => {
    try {
      // const dto = res.locals?.body as UpdateIngredient
      // const ingredientUpdated = await IngredientService.updateIngredient(dto)
      // res.status(200).json(ingredientUpdated)
    } catch (error) {
      next(error)
    }
  }
}
