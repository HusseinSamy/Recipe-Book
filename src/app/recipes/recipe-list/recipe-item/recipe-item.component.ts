import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {

  @Input() name: string = '';
  @Input() description: string = '';
  @Input() imagePath: string = '';
  @Input() i: number = 0;

  @Output() detailsListner = new EventEmitter <{name:string, description: string, imagePath: string}>();


  showDetails()
  {
    let details = {name: this.name, description:this.description, imagePath: this.imagePath}
    this.detailsListner.emit(details)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
