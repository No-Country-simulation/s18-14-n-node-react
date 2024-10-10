import { CategoryService } from './category.service'
import { Controller } from '../../types'
import { CreateCategory, ReadCategories } from './category.dto'

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

  static readCategories: Controller = async (_req, res, next) => {
    try {
      const filters = res.locals.query as ReadCategories
      const categories = await CategoryService.readCategories(filters)

      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  }
}
