import { Component, OnInit } from '@angular/core';
import { ServerRequestsService } from './header/serverRequests.service';
import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  constructor(
    private http: ServerRequestsService,
    private recipesService: RecipesService){}

  ngOnInit(): void {
    this.http.fetchRecipes();
  }
}
