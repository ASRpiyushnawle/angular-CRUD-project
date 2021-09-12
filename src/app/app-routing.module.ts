import { ProductsComponent } from './component/products/products.component';
// import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
