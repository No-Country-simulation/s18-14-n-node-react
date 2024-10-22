import { connDb } from '../../db/connDb'
import { CreateCategory, ReadCategories, UpdateCategory } from './category.types'

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

  static async updateCategory(cateogoryId: string, data: UpdateCategory) {
    const category = await connDb.category.update({
      where: { id: cateogoryId },
      data
    })

    return category
  }

  static async deleteCategory(cateogoryId: string) {
    const categoryDeleted = await connDb.category.delete({
      where: { id: cateogoryId },
    })

    return categoryDeleted
  }
}
