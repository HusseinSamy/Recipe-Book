import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shared/Services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.compononet.html',
  styleUrls: ['./shopping-list.component.scss']

})
export class ShoppingListComponent implements OnInit{
  constructor(public shoppingListService: ShoppingListService){}

  ngOnInit(){

  }
}
