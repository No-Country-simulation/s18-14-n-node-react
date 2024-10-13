import { useState } from "react";

import CategoriesList from "./CategoriesList";
import Recipes from "./Recipes";

import { Recipe } from "@/types";
import fake from './dataTemp.json'

export default function Categories() {

  const categories = [
    { name: "Vegetarianismo", id: 1 },
    { name: "Veganismo", id: 2 },
    { name: "Sin Gluten", id: 3 },
    { name: "Paleo", id: 4 },
    { name: "Cetogénica (Keto)", id: 5 },
    { name: "Bajo en Carbohidratos", id: 6 },
    { name: "Mediterránea", id: 7 },
    { name: "Raw (Cruda)", id: 8 },
  ]

  const [recipes] = useState<[] | Recipe[]>(fake.slice(0, 4))
  const [filterByCategory, setFilterByCategory] = useState<number | null>()

  const filteredRecipes =
    filterByCategory ?
      fake.filter(recipe => recipe.categoryId === filterByCategory)
      : recipes

  const setFilter = (categoryId: number) => setFilterByCategory(categoryId)

  return (
    <div className='flex flex-col gap-8'>
      <CategoriesList categories={categories} setFilter={setFilter} />
      <Recipes recipes={filteredRecipes} />
    </div>
  )
}
