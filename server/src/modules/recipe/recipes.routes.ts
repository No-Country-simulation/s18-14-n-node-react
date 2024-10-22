import { Router } from 'express';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

const router = Router();
const recipeService = new RecipeService();
const recipeController = new RecipeController(recipeService);

router.post('/recipes', recipeController.createRecipe);
router.get('/recipes', recipeController.getRecipes);
router.delete('/recipes/:id', recipeController.deleteRecipe);

export default router;