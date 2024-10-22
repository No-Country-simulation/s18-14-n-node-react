import { Router } from 'express';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';

const router = Router();
const ingredientService = new IngredientService();
const ingredientController = new IngredientController(ingredientService);

router.post('/ingredients', ingredientController.createIngredient);
router.get('/ingredients', ingredientController.getIngredients);
router.delete('/ingredients/:id', ingredientController.deleteIngredient);

export default router;
