import { Component, OnInit} from '@angular/core';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent{

  public recipe: Recipe | undefined;

  constructor() { }

  Details(data: Recipe)
  {
   this.recipe = data;
  }
  ngOnInit(): void {
  }

}
