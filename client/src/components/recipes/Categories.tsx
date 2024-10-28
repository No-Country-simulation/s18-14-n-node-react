import { useEffect, useState } from "react";

import Recipes from "./Recipes";
import CategoriesList from "./CategoriesList";

import { Recipe } from "@/types";
import CategoriesStore from '@/store/categoriesStore'
import { getUserRecipes } from "@/services/recipes";

export default function Categories() {

  const { selected } = CategoriesStore()
  console.log(selected);
 
  const [recipes, setRecipes] = useState<Recipe[] | []>([])

  useEffect(() => {
    loadRecipes(1)
  }, [])

  useEffect(() => {
    if (selected) loadRecipes(1, selected)
    else loadRecipes()
  }, [selected])

  const loadRecipes = (page?: number, keyword?: string) => {
    const result = getUserRecipes(page, keyword)
    if (result) {
      setRecipes(result)
    }
  }

  return (
    <div className='flex flex-col gap-8 pb-8'>
      <CategoriesList />
      <Recipes recipes={recipes} />
    </div>
  )
}
