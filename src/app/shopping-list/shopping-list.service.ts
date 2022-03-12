import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/Models/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService{


  ingredients: Ingredient[] = [
    new Ingredient('Apples',5)
  ];


  addItem(data: Ingredient)
  {
    this.ingredients.push(data)
  }

  deleteItem()
  {
    this.ingredients.pop();
  }
  clearList()
  {
    this.ingredients.splice(0,this.ingredients.length);
  }

}
