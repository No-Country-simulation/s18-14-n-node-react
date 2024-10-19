import axios from "axios";
import { recipesList } from "./datatemp";

const RECIPES_URL = "/ruta-de-recipes";
const headers = {
  Authorization: `bearer ${localStorage.getItem(`tkn`) || ""}`,
};

// obtener todas las recetas del usuario o según busqueda
export const getUserRecipes = (page: number | undefined) => {
  try {
    if (page) {
      const end = 8 + page * 4
      return recipesList.slice(0, end)
    } else return recipesList.slice(0, 8)
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
