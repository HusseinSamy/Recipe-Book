import { Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../shared/Models/recipe.model';
import { RecipesService } from './recipes.service';
import { observable, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
})
export class RecipesComponent implements OnInit, OnDestroy{

  public recipe!: Recipe;
  scheduler!: Subscription;
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
