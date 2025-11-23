export type Difficulty = 'سهل' | 'متوسط' | 'صعب';
export type Category = 'طبق رئيسي' | 'مقبلات' | 'حلويات' | 'شوربة';

export interface Recipe {
  id: number;
  name: string;
  icon: string; // Using Emoji for consistent visual language without heavy icon libraries
  servings: number;
  category: Category;
  region: string;
  time: string;
  isVegetarian: boolean;
  difficulty: Difficulty;
  mainIngredient: string;
  intro: string;
  ingredients: string[];
  steps: string[];
}

export interface FilterState {
  category: string;
  region: string;
  difficulty: string;
  mainIngredient: string;
  isVegetarian: boolean;
}