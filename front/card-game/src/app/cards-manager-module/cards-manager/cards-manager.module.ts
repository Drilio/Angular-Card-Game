import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPageManagerComponent } from '../cards-page-manager/cards-page-manager.component';



@NgModule({
  declarations: [
    CardsPageManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CardsPageManagerComponent]
})
export class CardsManagerModule { }
