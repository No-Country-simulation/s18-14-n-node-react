import { Recipe } from '@/types'
import { create } from 'zustand'

type Store = {
  recipesGlobal: Recipe[] | [],
  setRecipes: (recipes: Recipe[] | []) => void
}

const recipesStore = create<Store>()((set) => ({
  recipesGlobal: [],
  setRecipes: (recipes) => set({ recipesGlobal: recipes })
}))

export default recipesStore
