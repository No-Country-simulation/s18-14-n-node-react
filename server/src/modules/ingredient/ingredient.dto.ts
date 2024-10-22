export class CreateIngredientDto {
  private constructor(
    public readonly name: string,
    public readonly amount: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateIngredientDto?] {
    const { name, amount } = object;
    if (!name) return ['Missing name'];
    if (!amount) return ['Missing amount'];
    return [undefined, new CreateIngredientDto(name, amount)];
  }
}
