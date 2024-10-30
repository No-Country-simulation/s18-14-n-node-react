import { useEffect } from "react";

import Recipes from "./Recipes";
import CategoriesList from "./CategoriesList";

import CategoriesStore from '@/store/categoriesStore'
import allRecipes from "@/utils/retrieveRecipes";
import recipesStore from "@/store/recipesStore";

export default function Categories() {

  const { selected } = CategoriesStore()
  const { recipes } = recipesStore()

  useEffect(() => { allRecipes() }, [])

  const filteredRecipes =  !selected ? recipes : recipes.filter(recipe => {
    return recipe.description.includes(selected) || recipe.categories?.includes(selected)
  })

  return (
    <div className='flex flex-col gap-8 pb-8'>
      <CategoriesList />
      <Recipes recipes={filteredRecipes} />
    </div>
  )
}
