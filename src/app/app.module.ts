import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { PartsCartComponent } from './components/parts-cart/parts-cart.component';
import { FiltersComponent } from './components/parts-cart/filters/filters.component';
import { ProductListComponent } from './components/parts-cart/product-list/product-list.component';
import { CartComponent } from './components/parts-cart/cart/cart.component';
import { CartItemComponent } from './components/parts-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/parts-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PartsCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
