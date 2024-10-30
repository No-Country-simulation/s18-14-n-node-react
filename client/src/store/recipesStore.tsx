import { Recipe } from '@/types'
import { create } from 'zustand'

type Store = {
  recipes: Recipe[] | [],
  setRecipes: (recipes: Recipe[] | []) => void
}

const recipesStore = create<Store>()((set) => ({
  recipes: [],
  setRecipes: (recipes) => set({recipes})
}))

export default recipesStore
