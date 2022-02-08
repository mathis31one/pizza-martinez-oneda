import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaFormulaireComponent } from './pizza-formulaire/pizza-formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaFormulaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
