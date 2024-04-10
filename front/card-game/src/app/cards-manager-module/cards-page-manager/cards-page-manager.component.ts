import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-page-manager',
  templateUrl: './cards-page-manager.component.html',
  styleUrls: ['./cards-page-manager.component.css']
})
export class CardsPageManagerComponent {

  isCardsManagerOpen = false;
  isDecksManagerOpen = false;

  toggleCardsManager() {
    this.isDecksManagerOpen = false
    this.isCardsManagerOpen = !this.isCardsManagerOpen;

  }
  toggleDecksManager() {
    this.isCardsManagerOpen = false
    this.isDecksManagerOpen = !this.isDecksManagerOpen;
  }

}
