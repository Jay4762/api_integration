import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    component: AllProductsComponent
  },
  {
    path: 'products/:id',
    component: SingleProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
