import axios from "axios";

const RECIPES_URL = "/ruta-de-recipes";
const headers = {
  Authorization: `bearer ${localStorage.getItem(`tkn`) || ""}`,
};

// obtener todas las recetas del usuario o según busqueda
export const getUserRecipes = async ({
  userId,
  search,
}: {
  userId: string;
  search: string;
}) => {
  try {
    const { data } = await axios(
      `${RECIPES_URL}?userId=${userId}&search=${search}`,
      { headers }
    );
    console.log(data);
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

export const updateRecipe = async(recipe: {
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
