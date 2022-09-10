import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesRoutingModule } from "./receipes-routing.module";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { DropdownMenuDirective } from "../shared/Directives/dropdown-menu.directive";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    DropdownMenuDirective
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RecipesRoutingModule,
  ],
  exports: [DropdownMenuDirective]
})
export class RecipesModule{}
