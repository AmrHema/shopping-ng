import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginComponent } from './login/login.component';
import { OrdersAdminComponent } from './admin/orders-admin/orders-admin.component';
import { AppRoutingModule } from 'src/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    ProductsAdminComponent,
    OrdersComponent,
    OrdersAdminComponent,
    ShoppingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
