export interface IStats {
  value: number;
  description: string;
}

export interface INutrition {
  value: number;
  description: string;
}

export interface IRecetData {
  title: string;
  description: string;
  rating: number;
  stats: IStats[];
  nutritionalData: INutrition[];
  ingredients: string[];
  steps: string[];
  media: string;
}
