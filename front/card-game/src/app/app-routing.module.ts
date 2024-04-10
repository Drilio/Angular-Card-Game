import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home-module/home/home.component";
import {LoginFormComponent} from "./login-module/login-form/login-form.component";
import {SignUpFormComponent} from "./sign-up-module/sign-up-form/sign-up-form.component";
import {CardsPageManagerComponent} from "./cards-manager-module/cards-page-manager/cards-page-manager.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component:LoginFormComponent},
  {path:'sign-up', component:SignUpFormComponent},
  {path:'cards-manager', component:CardsPageManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
