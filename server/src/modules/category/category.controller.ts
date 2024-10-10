import { CategoryService } from './category.service'
import { Controller } from '../../types'
import { CreateCategory } from './category.dto'

export class CategoryController {
  static createCategory: Controller = async (_req, res, next) => {
    try {
      const dto = res.locals.body as CreateCategory
      const newCategory = await CategoryService.createCategory(dto)

      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }
}
