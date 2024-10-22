import { PrismaClient } from '@prisma/client';
import { CreateIngredientDto } from '../ingredient/ingredient.dto';
import { PaginationDto } from '../shared/pagination.dtos';
import { CustomError } from '../errors/custom.errors';

const prisma = new PrismaClient();

export class IngredientService {
  constructor() {}

  async createIngredient(createIngredientDto: CreateIngredientDto) {
    try {
      const ingredient = await prisma.ingredient.create({
        data: {
          ...createIngredientDto,
        },
      });
      return ingredient;
    } catch (error) {
      throw CustomError.InternalServerError(`${error}`);
    }
  }

  async getIngredients(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    try {
      const total = await prisma.ingredient.count();
      const ingredients = await prisma.ingredient.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      return {
        page: page,
        limit: limit,
        total: total,
        next: `/api/ingredients?page=${page + 1}&limit=${limit}`,
        prev: page - 1 > 0 ? `/api/ingredients?page=${page - 1}&limit=${limit}` : null,
        ingredients: ingredients,
      };
    } catch (error) {
      throw CustomError.InternalServerError('Internal Server Error');
    }
  }

  async deleteIngredient(ingredientId: string) {
    const ingredientExists = await prisma.ingredient.findUnique({ where: { id: ingredientId } });
    if (!ingredientExists) throw CustomError.badRequest('Ingredient does not exist');
    try {
      await prisma.ingredient.delete({ where: { id: ingredientId } });
      return { message: 'Ingredient deleted successfully' };
    } catch (error) {
      throw CustomError.InternalServerError(`${error}`);
    }
  }
}