import Recipes from "./Recipes";
import CategoriesList from "./CategoriesList";

import CategoriesStore from '@/store/categoriesStore'
import recipesStore from "@/store/recipesStore";

export default function Categories() {

  const { selected } = CategoriesStore()
  const { recipesGlobal } = recipesStore()

  const filteredRecipes =  !selected ? recipesGlobal : recipesGlobal.filter(recipe => {
    return recipe.description.includes(selected) || recipe.categories?.includes(selected)
  })

  return (
    <div className='flex flex-col gap-8 pb-8'>
      <CategoriesList />
      <Recipes recipes={filteredRecipes} />
    </div>
  )
}
