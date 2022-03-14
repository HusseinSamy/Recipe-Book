import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/Models/ingredient.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {

  id!: number;
  editMode = false;
  newRecipeForm!: FormGroup;
  ingredients: Ingredient[] = [];
  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    )
    this.newRecipeForm = new FormGroup({
      'recipeName': new FormControl(null, Validators.required),
      'recipeDescription': new FormControl(null, Validators.required),
      'imageURL': new FormControl(null, Validators.required),
      'ingredientsForm': new FormGroup({
        'recipeIngredientName': new FormControl(null, Validators.required),
        'recipeIngredientAmount': new FormControl(null, Validators.required)
      })
    })
  }

  createNewIngredientElement(){
    if(this.newRecipeForm.get('ingredientsForm')?.valid){
      this.ingredients.push(new Ingredient(this.newRecipeForm.get('ingredientsForm.recipeIngredientName')?.value, this.newRecipeForm.get('ingredientsForm.recipeIngredientAmount')?.value))
      this.newRecipeForm.get('ingredientsForm')?.reset();
    }
    else alert('please fill the form')
  }

  onSubmit(){
    if(this.newRecipeForm.valid){
      this.recipesService.createNewRecipe(
        this.newRecipeForm.get('recipeName')?.value,
        this.newRecipeForm.get('recipeDescription')?.value,
        this.newRecipeForm.get('imageURL')?.value,
        this.ingredients
        )
    }
    else alert('please fill the form')
  }

}
