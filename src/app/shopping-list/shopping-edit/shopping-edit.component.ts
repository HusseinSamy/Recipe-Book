import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {
  itemName: string = '';
  itemAmount: number = 0;
  @Output() itemAdded = new EventEmitter<Ingredient>();
  @Output() itemDeleted = new EventEmitter<Ingredient>();
  @Output() listCleared = new EventEmitter<Ingredient>();

  constructor() { }

  addItem()
  {
    this.itemAdded.emit(new Ingredient(this.itemName,this.itemAmount))
    this.itemName = '';
    this.itemAmount = 0;
  }
  deleteItem()
  {
    this.itemDeleted.emit();
  }
  clearList()
  {
    this.listCleared.emit();
  }

  ngOnInit(): void {
  }

}
