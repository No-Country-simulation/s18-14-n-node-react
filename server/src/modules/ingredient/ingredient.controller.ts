import { Controller } from '../../types'
import { IngredientService } from './ingredient.service'
import { CreateIngredient } from './ingredient.types'

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
}
