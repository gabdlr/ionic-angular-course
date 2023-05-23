import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { ViewWillEnter } from '@ionic/angular';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, ViewWillEnter {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {
    this.recipes = this.recipesService.getAllRecipes();
  }
  ionViewWillEnter(): void {
    this.recipes = this.recipesService.getAllRecipes();
  }
  ngOnInit() {}
}
