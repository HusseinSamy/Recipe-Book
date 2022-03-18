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

  constructor(private route: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    )
    if (!this.editMode){
      this.newRecipeForm = new FormGroup({
        'recipeData': new FormGroup({
          'recipeName': new FormControl(null, Validators.required),
          'recipeDescription': new FormControl(null, Validators.required),
          'imageURL': new FormControl(null, Validators.required)
        }),
        'ingredientsForm': new FormGroup({
          'recipeIngredientName': new FormControl(null, Validators.required),
          'recipeIngredientAmount': new FormControl(null, Validators.required)
        })
      })
    }
    else{
      this.newRecipeForm = new FormGroup({
        'recipeData': new FormGroup({
          'recipeName': new FormControl(this.recipesService.getRecipe(this.id).name, Validators.required),
          'recipeDescription': new FormControl(this.recipesService.getRecipe(this.id).description, Validators.required),
          'imageURL': new FormControl(this.recipesService.getRecipe(this.id).imagePath, Validators.required)
        }),
        'ingredientsForm': new FormGroup({
          'recipeIngredientName': new FormControl(null, Validators.required),
          'recipeIngredientAmount': new FormControl(null, Validators.required)
        })
      })
      this.ingredients = this.recipesService.getRecipe(this.id).ingredients;
    }
  }

  createNewIngredientElement(){
    if(this.newRecipeForm.get('ingredientsForm')?.valid){
      this.ingredients.push(new Ingredient(this.newRecipeForm.get('ingredientsForm.recipeIngredientName')?.value, this.newRecipeForm.get('ingredientsForm.recipeIngredientAmount')?.value))
      this.newRecipeForm.get('ingredientsForm')?.reset();
    }
    else alert('please fill the ingredient form')
  }

  createNewRecipe(){
    this.recipesService.createNewRecipe(
      this.newRecipeForm.get('recipeData.recipeName')?.value,
      this.newRecipeForm.get('recipeData.recipeDescription')?.value,
      this.newRecipeForm.get('recipeData.imageURL')?.value,
      this.ingredients
      )
  }
  onSubmit(){
    if(!this.editMode){
      if(this.newRecipeForm.get('recipeData')?.valid && this.ingredients.length > 0){
        this.createNewRecipe();
      }
      else alert('please fill the form')
    }
    else{
      if(this.newRecipeForm.get('recipeData')?.valid && this.ingredients.length > 0){
        this.recipesService.getRecipe(this.id).name = this.newRecipeForm.get('recipeData.recipeName')?.value;
        this.recipesService.getRecipe(this.id).description = this.newRecipeForm.get('recipeData.recipeDescription')?.value;
        this.recipesService.getRecipe(this.id).imagePath= this.newRecipeForm.get('recipeData.imageURL')?.value;
      }
      else alert('please fill the form')
    }
  }

}
