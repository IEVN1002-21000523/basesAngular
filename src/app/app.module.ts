import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { CinepolisangularComponent } from './cinepolisangular/cinepolisangular.component';
import { ResistenciasangularComponent } from './resistenciasangular/resistenciasangular.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    Ejemplo1Component,
    CinepolisangularComponent,
    ResistenciasangularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Añadir la propiedad de modulos
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

