import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Ingredient } from 'src/app/shared/Models/ingredient.model';
import { Recipe } from 'src/app/shared/Models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  ingredient: Ingredient = {name: 'Halopinos', amount: 2};
  constructor(public recipeService: RecipesService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }
  onNewRecipe()
  {
    this.router.navigate(['new'], {relativeTo: this.activeRoute})
  }

  ngOnInit(): void {
  }

}
