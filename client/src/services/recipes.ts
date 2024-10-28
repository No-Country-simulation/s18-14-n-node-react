import axios from "axios";
// import { recipesList } from "./datatemp";
import { recipes } from "./datatemp";

const RECIPES_URL = "/recipes";
const headers = {
  Authorization: `bearer ${localStorage.getItem(`tkn`) || ""}`,
};

// obtener todas las recetas del usuario o según busqueda
export const getUserRecipes = (page?: number | undefined, keyword?: string | undefined) => {
  try {
    console.log(recipes?.length);
    let collectedRecipes
    if (keyword) {
      collectedRecipes = recipes.filter(recipe => {
        if(recipe.title.includes(keyword)) return true
        else if(recipe.description.includes(keyword)) return true
        else if(recipe.categories.includes(keyword)) return true
        else if(recipe.ingredients?.length > 0) {
          for(const ingredient of recipe.ingredients) {
            if (ingredient.name.includes(keyword)) return true
            else if (ingredient.description.includes(keyword)) return true
          }
        } 
        else return false
      })
    } else collectedRecipes = recipes

    if (page) {
      const limit = 8 * page + 8
      const offset = 8 * page
      return collectedRecipes.slice(offset, limit)
    } else return collectedRecipes.slice(0, 8)

    
  } catch (error) {
    console.log(error);
  }
};

export const addRecipe = async (recipe: {
  title: string;
  description: string;
  userId: string;
}) => {
  try {
    await axios.post(RECIPES_URL, recipe, { headers });
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = async (recipe: {
  recipeId: string
  title: string;
  description: string;
  userId: string;
}) => {
  try {
    await axios.patch(RECIPES_URL, recipe, { headers });
  } catch (error) {
    console.log(error);
  }
}
/* 
{
  Vegetariana: "lacto ovo vegetarian",
  Vegana: "vegan",
  Sin Gluten: "gluten free",
  Paleo: "paleolithic",
  Cetogénica: "ketogenic",
  Mediterranea: ["sin gluten", "sin lácteos", "vegetariana", "vegana", "pescatariana"]
}
 */