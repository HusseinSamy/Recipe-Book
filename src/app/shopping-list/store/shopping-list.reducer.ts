import { Ingredient } from "../../shared/Models/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface ShoppingListState{
  ingredients: Ingredient[];
}

const initialState: ShoppingListState = {
  ingredients:[
    new Ingredient('Apples',5)
  ]
}
export const shoppingListReducer = (state:ShoppingListState = initialState, action: ShoppingListActions.AddIngredient ) =>{
  switch(action.type){
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
  };
}
