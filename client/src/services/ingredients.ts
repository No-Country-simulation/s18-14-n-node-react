import { Ingredient } from "@/types";
import axios from "axios";
import { recipes } from "./datatemp";

const INGREDIENTS_URL = "/ingredient";

export const getIngredients = () => {
  try {
    // axios(`${INGREDIENTS_URL}/read-ingredients`)
    //   .then(({ data }) => console.log(data))
    //   .catch(console.error)

    let allIngredients: Ingredient[] = []
    recipes.forEach(({ ingredients }) => allIngredients = [...allIngredients, ...ingredients])
    const allOrdered = allIngredients.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    return [...new Set(allOrdered.map(ingredient => ingredient.name))];
  } catch (error) {
    console.log(error);
  }
};

export const createIngredient = async (ingredient: Ingredient) => {
  try {
    await axios.post(`${INGREDIENTS_URL}/create-ingredient`, { body: ingredient})
  } catch (error) {
    console.error(error);
  }
}