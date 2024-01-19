import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './all-products/all-products.component';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
