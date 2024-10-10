import { connDb } from '../../db/connDb'
import { CreateCategory, ReadCategories } from './category.dto'

export class CategoryService {
  static async createCategory(params: CreateCategory) {
    const newCategory = await connDb.category.create({ data: { ...params } })

    return newCategory
  }

  static async readCategories({ name }: ReadCategories) {
    const categories = await connDb.category.findMany({
      where: { name: { contains: name, mode: 'insensitive' } },
    })

    return categories
  }
}
