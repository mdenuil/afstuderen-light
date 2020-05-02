import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './modules/app-material.module';
import { HomeComponent } from './pages/home/home.component';
import { ToastrModule } from 'ngx-toastr';

import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    MenuListItemComponent,
    OrdersComponent,
    ProductsComponent,
    ShoppingcartComponent
  ],
  entryComponents: [
    ShoppingcartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
