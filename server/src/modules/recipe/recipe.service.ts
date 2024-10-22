import { PrismaClient } from '@prisma/client';
import { CreateRecipeDto } from '../recipe/recipe.dto';
import { PaginationDto } from '../shared/pagination.dtos';
import { CustomError } from '../errors/custom.errors';
const prisma = new PrismaClient();

export class RecipeService {
  constructor() {}

  async createRecipe(createRecipeDto: CreateRecipeDto) {
    try {
      const recipe = await prisma.recipe.create({
        data: {
          ...createRecipeDto,
          ingredients: {
            create: createRecipeDto.ingredients.map(ingredient => ({
              name: ingredient.name,
              amount: ingredient.amount,
            })),
          },
        },
      });
      return recipe;
    } catch (error) {
      throw CustomError.InternalServerError(`${error}`);
    }
  }

  async getRecipes(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    try {
      const total = await prisma.recipe.count();
      const recipes = await prisma.recipe.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: {
          ingredients: true,
        },
      });
      return {
        page: page,
        limit: limit,
        total: total,
        next: `/api/recipes?page=${page + 1}&limit=${limit}`,
        prev: page - 1 > 0 ? `/api/recipes?page=${page - 1}&limit=${limit}` : null,
        recipes: recipes,
      };
    } catch (error) {
      throw CustomError.InternalServerError('Internal Server Error');
    }
  }

  async deleteRecipe(recipeId: string) {
    const recipeExists = await prisma.recipe.findUnique({ where: { id: recipeId } });
    if (!recipeExists) throw CustomError.badRequest('Recipe does not exist');
    try {
      await prisma.recipe.delete({ where: { id: recipeId } });
      return { message: 'Recipe deleted successfully' };
    } catch (error) {
      throw CustomError.InternalServerError(`${error}`);
    }
  }
}