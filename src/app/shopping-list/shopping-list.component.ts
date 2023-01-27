import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/Models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.compononet.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Observable<{ingredients: Ingredient[]}>;
  constructor(
    private slService: ShoppingListService,
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList')
  }

  // onEditItem(index: number) {
  //   this.slService.startedEditing.next(index);
  // }
}
