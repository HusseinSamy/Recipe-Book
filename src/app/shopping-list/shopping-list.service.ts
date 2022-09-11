import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/Models/ingredient.model";
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }


  addItem(data: Ingredient)
  {
    this.ingredients.push(data)
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
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
