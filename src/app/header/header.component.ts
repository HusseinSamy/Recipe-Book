import { Component, OnInit} from '@angular/core';
import { ServerRequestsService } from './serverRequests.service';
import { RecipesService } from '../recipes/recipes.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


  constructor(
    private serverRequestsService: ServerRequestsService,
    private recipesService: RecipesService) { }


  ngOnInit(): void {
  }
  saveDataToServer(){
    this.serverRequestsService.saveRecipes(this.recipesService.getRecipes());
  }
  fetchDataFromServer(){
    this.serverRequestsService.fetchRecipes();
  }
}
