import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe = {
    id: '',
    title: '',
    imageURL: '',
    ingredients: [],
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/']);
      }

      const recipeId = paramMap.get('recipeId');
      const recipe = this.recipesService.getRecipe(recipeId ?? '');
      if (recipe) this.recipe = recipe;
    });
  }

  deleteRecipe(recipeId: string) {
    this.recipesService.deleteRecipe(recipeId);
  }
}
