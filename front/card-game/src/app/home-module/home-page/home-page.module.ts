import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../home/home.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    DisplayDataComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterLink,
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomePageModule { }
