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



  @Output() detailsListner2 = new EventEmitter <{name:string, description: string, imagePath: string}>();


  createNewRecipe(name: string, description: string, imagePath: string)
  {
    const newRecipe = new Recipe(name,description,imagePath);
    this.recipes.push(newRecipe)
  }

  showingDetails(data:{name:string, description: string, imagePath: string})
  {
    let clickedItem = {name: data.name, description: data.description, imagePath: data.imagePath}
    this.detailsListner2.emit(clickedItem)
  }
  ngOnInit(): void {
  }

}
