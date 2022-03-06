import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = "the app template component"
  recipeTab = false;
  shoppingTab = false;

  displayRecipe()
  {
    this.recipeTab =  true;
    this.shoppingTab =  false;
  }
  displayShoppingList()
  {
    this.recipeTab =  false;
    this.shoppingTab =  true;
  }
}
