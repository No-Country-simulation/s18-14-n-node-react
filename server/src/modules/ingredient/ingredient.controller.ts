import { Response, Request } from 'express';
import { CreateIngredientDto } from '../ingredient/ingredient.dto';
import { PaginationDto } from '../shared/pagination.dtos';
import { CustomError } from '../errors/custom.errors';
import { IngredientService } from './ingredient.service';
export class IngredientController {
  constructor(
    private readonly ingredientService: IngredientService,
  ) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };
  createIngredient = (req: Request, res: Response) => {
    const [error, createIngredientDto] = CreateIngredientDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.ingredientService.createIngredient(createIngredientDto!)
      .then(ingredient => res.status(201).json(ingredient))
      .catch(error => this.handleError(error, res));
  };
  getIngredients = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });
    this.ingredientService.getIngredients(paginationDto!)
      .then(ingredients => res.json(ingredients))
      .catch(error => this.handleError(error, res));
  };
  deleteIngredient = (req: Request, res: Response) => {
    const ingredientId = req.params.id;
    if (!ingredientId) return res.status(400).json({ error: 'Invalid ingredient id' });
    this.ingredientService.deleteIngredient(ingredientId)
      .then(response => res.json(response))
      .catch(error => this.handleError(error, res));
  };
}