import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../../shared/Models/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;

  constructor(private recipesService: RecipesService,
     private shoppingListService: ShoppingListService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.recipe = this.recipesService.getRecipe(params['id']);
      }
    )
  }

  addToShoppingList(){
    for (let ingredient of this.recipe.ingredients){
      this.shoppingListService.addItem(ingredient);
    }
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
