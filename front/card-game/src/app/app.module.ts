import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {NgOptimizedImage} from "@angular/common";
import {LoginModule} from "./login-module/login/login.module";
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule} from "@angular/forms";
import {SignUpModule} from "./sign-up-module/sign-up/sign-up.module";
import {HomePageModule} from "./home-module/home-page/home-page.module";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    LoginModule,
    SignUpModule,
    ReactiveFormsModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
