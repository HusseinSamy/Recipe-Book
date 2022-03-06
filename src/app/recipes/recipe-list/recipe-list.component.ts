import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];
  constructor() { }



  @Output() detailsListner = new EventEmitter <Recipe>();

  createNewRecipe(name: string, description: string, imagePath: string)
  {
    const newRecipe = new Recipe(name,description,imagePath);
    this.recipes.push(newRecipe)
  }


  showDetails(data: Recipe)
  {
    const clickedItem = new Recipe(data.name, data.description, data.imagePath)
    this.detailsListner.emit(clickedItem)
  }
  ngOnInit(): void {
  }

}
