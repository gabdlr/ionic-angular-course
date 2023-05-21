import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      imageURL:
        'https://imag.bonviveur.com/wiener-schnitzel-o-escalope-vienes.webp',
      ingredients: ['French fries', 'Pork meat', 'Salad'],
    },
    {
      id: '2',
      title: 'Spaghetti',
      imageURL:
        'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/36C4D0A8-A26C-438B-9871-27ABEABB2E66/Derivates/A94C5717-A483-4ADF-B8AE-6D170994FEA1.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return this.recipes.slice();
  }

  getRecipe(recipeId: string): Recipe | undefined {
    const recipe = this.recipes.find((recipe) => recipe.id === recipeId);
    if (recipe) {
      return { ...recipe };
    } else {
      return undefined;
    }
  }
}
