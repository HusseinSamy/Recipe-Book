import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() showRecipes = new EventEmitter();
  @Output() showShoppingList = new EventEmitter();
  ngOnInit(): void {
  }

  onRecipesClick()
  {
    this.showRecipes.emit();
  }
  onShoppingListClick()
  {
    this.showShoppingList.emit();
  }
}
