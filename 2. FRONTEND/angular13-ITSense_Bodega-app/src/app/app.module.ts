import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ShowProductsComponent } from './products/show-products/show-products.component';
import { AddEditProductsComponent } from './products/add-edit-products/add-edit-products.component';
import { ProductsApiService } from './products-api.service';
import { AddExitProductsComponent } from './products/add-exit-products/add-exit-products.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShowProductsComponent,
    AddEditProductsComponent,
    AddExitProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
