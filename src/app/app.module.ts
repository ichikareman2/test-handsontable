import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HotTableModule } from '@handsontable/angular';

import { AppComponent } from './app.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { AddingAComponentOnHeaderComponent } from './adding-a-component-on-header/adding-a-component-on-header.component';
import { AddingATemplateOnHeaderComponent } from './adding-a-template-on-header/adding-a-template-on-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterInputComponent,
    AddingAComponentOnHeaderComponent,
    AddingATemplateOnHeaderComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
