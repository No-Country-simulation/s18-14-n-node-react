import { Response, Request } from 'express';
import { CreateRecipeDto } from '../recipe/recipe.dto';
import { PaginationDto } from '../shared/pagination.dtos';
import { CustomError } from '../errors/custom.errors';
import { RecipeService } from './recipe.service';
export class RecipeController {
  constructor(
    private readonly recipeService: RecipeService,
  ) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };
  createRecipe = (req: Request, res: Response) => {
    const [error, createRecipeDto] = CreateRecipeDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.recipeService.createRecipe(createRecipeDto!)
      .then(recipe => res.status(201).json(recipe))
      .catch(error => this.handleError(error, res));
  };
  getRecipes = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });
    this.recipeService.getRecipes(paginationDto!)
      .then(recipes => res.json(recipes))
      .catch(error => this.handleError(error, res));
  };
  deleteRecipe = (req: Request, res: Response) => {
    const recipeId = req.params.id;
    if (!recipeId) return res.status(400).json({ error: 'Invalid recipe id' });
    this.recipeService.deleteRecipe(recipeId)
      .then(response => res.json(response))
      .catch(error => this.handleError(error, res));
  };
}