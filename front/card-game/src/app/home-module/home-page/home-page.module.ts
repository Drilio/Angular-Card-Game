import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../home/home.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    DisplayDataComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomePageModule { }
