import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PromotionComponent } from './home-page/promotion/promotion.component';
import { FeaturedPromotionComponent } from './home-page/featured-promotion/featured-promotion.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FeaturesComponent } from './home-page/features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsTabComponent } from './home-page/products-tab/products-tab.component';
import { TabProductComponent } from './home-page/products-tab/tab-product/tab-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    PromotionComponent,
    FeaturedPromotionComponent,
    ProductCardComponent,
    FeaturesComponent,
    FooterComponent,
    ProductsTabComponent,
    TabProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
