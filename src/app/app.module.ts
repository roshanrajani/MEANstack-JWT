import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';  
import { RatingComponent } from './products/products/rating/rating.component';
import { DetailComponent } from './products/detail/detail.component';
import { HomeComponent } from './layout/home/home.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    DetailComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
      { path: "products", component: ProductsComponent, canActivate: [AuthGuard] },
      { path: "login", component: LoginComponent},
      { path: "details/:pId", component: DetailComponent,canActivate: [AuthGuard]  },
      { path: "",redirectTo:"home", pathMatch:"full" },
      { path:"**", redirectTo: "home" }
    ])
  ],
   providers: [AuthService, CookieService, AuthGuard],
   bootstrap: [AppComponent]     // starting the app using AppComponet
})
export class AppModule { }
