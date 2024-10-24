import { connDb } from '../src/db/connDb'
import { CATEGORIES } from './mockup/categories'
import { INGREDIENTS } from './mockup/ingredients'

async function seed() {
  await connDb.ingredient.deleteMany()
  await connDb.ingredient.createMany({ data: INGREDIENTS })
  await connDb.category.deleteMany()
  await connDb.category.createMany({ data: CATEGORIES })
}

seed()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e)
  })
  .finally(() => {
    connDb.$disconnect()
  })
