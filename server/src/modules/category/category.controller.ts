import { CategoryService } from './category.service'
import { Controller } from '../../types'
import { CreateCategory } from './category.dto'

export class CategoryController {
  static createCategory: Controller = (req, res, next) => {
    try {
      const category = req.body as CreateCategory
      const newCategory = CategoryService.createCategory(category)
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }
}
