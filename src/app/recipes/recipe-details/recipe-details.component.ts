import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() imagePath: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
