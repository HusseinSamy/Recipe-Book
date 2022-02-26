import { Component, OnInit} from '@angular/core';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent{

  public recipeDetails = {name: "", description: "", imagePath: ""}

  constructor() { }

  Details(data:{name:string, description: string, imagePath: string})
  {
    this.recipeDetails.name = data.name;
    this.recipeDetails.description = data.description;
    this.recipeDetails.imagePath = data.imagePath;

  }
  ngOnInit(): void {
  }

}
