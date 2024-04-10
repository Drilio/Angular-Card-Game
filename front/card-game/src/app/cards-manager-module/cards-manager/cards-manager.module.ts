import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPageManagerComponent } from '../cards-page-manager/cards-page-manager.component';
import { CardsManagerComponentComponent } from '../cards-manager-component/cards-manager-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DisplayCardsComponent } from '../display-cards/display-cards.component';



@NgModule({
  declarations: [
    CardsPageManagerComponent,
    CardsManagerComponentComponent,
    DisplayCardsComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports:[CardsPageManagerComponent]
})
export class CardsManagerModule { }
