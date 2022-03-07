import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {
  itemName: string = '';
  itemAmount: number = 0;

  constructor(public shoppingListService: ShoppingListService) { }

  addItem()
  {
    let element = new Ingredient (this.itemName, this.itemAmount)
    this.shoppingListService.addItem(element);
    this.itemName = '';
    this.itemAmount = 0;
  }

  ngOnInit(): void {
  }

}
