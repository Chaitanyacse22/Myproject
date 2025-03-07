import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BuyingComponent } from './buying/buying.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path : "home", component : HomeComponent, canActivate: [authGuard]},
  {path : "products", component : ProductsComponent, canActivate: [authGuard]},
  {path : "aboutus", component : AboutUsComponent, canActivate: [authGuard]},
  {path : "buying", component : BuyingComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
