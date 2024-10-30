import { getUserRecipes } from '@/services/recipes'
import recipesStore from '@/store/recipesStore'

const allRecipes = () => {
  try {
    const { recipes, setRecipes } = recipesStore()
    const store = recipes
    let page = 1
    const result = getUserRecipes(page)
    if (result) {
      const { totalPages, currentPage, recipes } = result
      setRecipes(recipes)
      let current = currentPage
      while (totalPages !== current) {
        page++
        const newResult = getUserRecipes(page)
        if (newResult) {
          const { currentPage, recipes } = newResult
          setRecipes([...store, ...recipes])
          current = currentPage
        }
      }
    }
    return 'ok'
  } catch (error) {
    return error
  }
}

export default allRecipes