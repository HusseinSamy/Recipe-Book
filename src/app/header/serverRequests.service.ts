import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { RecipesService } from '../recipes/recipes.service'
import { Recipe } from '../shared/Models/recipe.model'

@Injectable({providedIn: 'root'})
export class ServerRequestsService{

  constructor(
    private http : HttpClient,
    private recipesService: RecipesService){}

  saveRecipes(recipes: Recipe[]){
    this.http.put(
      'https://recipe-book-3abf8-default-rtdb.firebaseio.com/recipes.json',
      recipes).subscribe(response => {console.log(response)})
  }

  fetchRecipes(){
    this.http.get<Recipe[]>(
      'https://recipe-book-3abf8-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(response => {
        console.log(response)

          // console.log(key);
          // console.log(response);
          this.recipesService.recipes = response;

      },)
  }

}
