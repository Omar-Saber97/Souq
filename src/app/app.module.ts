import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderModule } from './components/main-header/main-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { AllSubCategoryComponent } from './components/all-sub-category/all-sub-category.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/+auth/login/login.component';
import { SignupComponent } from './components/+auth/signup/signup.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/+shared_UI/card/card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SlideshowComponent } from './components/homepage/slideshow/slideshow.component';
import { ProductCardDesignComponent } from './components/+shared_UI/product-card-design/product-card-design.component';
import { ShowcategoryComponent } from './components/showcategory/showcategory.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { RatingComponent } from './components/+shared_UI/rating/rating.component';
import { PopularComponent } from './components/homepage/popular/popular.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SpinnerComponent } from './components/+shared_UI/spinner/spinner.component';
import { CategoryDetailsComponent } from './components/showcategory/category-details/category-details.component';
import { UserPropertiesComponent } from './components/user-properties/user-properties.component';
import { WishListsComponent } from './components/user-properties/wish-lists/wish-lists.component';
import { AddressComponent } from './components/user-properties/address/address.component';
import { OrdersComponent } from './components/user-properties/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductSliderComponent } from './components/product-details/product-slider/product-slider.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { ChcekoutComponent } from './components/chcekout/chcekout.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCategoryComponent,
    AllSubCategoryComponent,
    FooterComponent,
    FilterComponent,
   
    LoginComponent,
    SignupComponent,
    CardComponent,
    HomepageComponent,
    SlideshowComponent,
    ProductCardDesignComponent,
    ShowcategoryComponent,

    RatingComponent,
    PopularComponent,
    SpinnerComponent,
    CategoryDetailsComponent,
    UserPropertiesComponent,
    WishListsComponent,
    AddressComponent,
    OrdersComponent,
    ProductSliderComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    CartComponent,
    ChcekoutComponent,
    CartItemComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainHeaderModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
