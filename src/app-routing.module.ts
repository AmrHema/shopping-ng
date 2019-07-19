import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './app/products/products.component';
import { OrdersComponent } from './app/orders/orders.component';
import { ProductsAdminComponent } from './app/admin/products-admin/products-admin.component';
import { OrdersAdminComponent } from './app/admin/orders-admin/orders-admin.component';
import { LoginComponent } from './app/login/login.component';
import { ShoppingComponent } from './app/shopping/shopping.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'admin/orders', component: OrdersAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping', component: ShoppingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
