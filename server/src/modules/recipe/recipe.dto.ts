export class CreateRecipeDto {
  private constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly ingredients: CreateIngredientDto[],
  ) {}
  static create(object: { [key: string]: any }): [string?, CreateRecipeDto?] {
    const { title, description = '', ingredients = [] } = object;
    if (!title) return ['Missing title'];
    const ingredientDtos = ingredients.map((ingredient: any) => {
      const [error, ingredientDto] = CreateIngredientDto.create(ingredient);
      if (error) throw new Error(error);  // Optional: Handle ingredient errors here
      return ingredientDto!;
    });
    return [undefined, new CreateRecipeDto(title, description, ingredientDtos)];
  }
}