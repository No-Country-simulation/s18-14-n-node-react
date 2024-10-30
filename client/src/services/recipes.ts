import axios from "axios";
// import { recipesList } from "./datatemp";
import { recipes } from "./datatemp";
import { Recipe } from "@/types";

const RECIPES_URL = "/recipes";
const headers = {
  Authorization: `bearer ${localStorage.getItem(`tkn`) || ""}`,
};

// obtener todas las recetas del usuario o según busqueda
export const getUserRecipes =
  (page?: number | undefined): 
    { recipes: Recipe[], totalPages: number, currentPage: number } | undefined => {
    try {
      if (page) {
        const limit = 8 * page + 8
        const totalPages = Math.ceil(recipes.length / limit)
        const offset = 8 * page

        return {
          recipes: recipes.slice(offset, limit) as Recipe[],
          totalPages: totalPages,
          currentPage: page,
        }
      } else return {
        recipes: recipes.slice(0, 8),
        totalPages: Math.ceil(recipes.length / 8),
        currentPage: 1,
      }


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