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

  const loadRecipes = (page: number) => {
    const result = getUserRecipes(page)
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
