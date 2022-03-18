import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { HeaderComponent } from './header/header.component'
import { AppRoutingModule } from './routing.module';
import { ShoppingListModule } from './shopping-list.module';
import { RecipesModule } from './recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShoppingListModule,
    RecipesModule,
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
