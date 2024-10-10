import { connDb } from '../../db/connDb'
import { CreateCategory } from './category.dto'

export class CategoryService {
  static async createCategory(params: CreateCategory) {
    const newCategory = await connDb.category.create({ data: { ...params } })

    return newCategory
  }
}
