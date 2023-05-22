import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  deleteRecipe(recipeId: string) {
    this.alertController
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          {
            text: 'Delete',
            handler: () => {
              this.recipes = this.recipes.filter(
                (recipe) => recipe.id !== recipeId
              );
              this.router.navigate(['/']);
            },
          },
        ],
      })
      .then((alertEL) => alertEL.present());
  }
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
