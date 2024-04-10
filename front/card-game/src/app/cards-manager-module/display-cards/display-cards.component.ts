import {Component, OnInit} from '@angular/core';
import {ICard} from "../../interfaces/ICard";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit{
  cards:ICard[]= [];

  async ngOnInit() {
    this.cards = await this._cardService.GetAllCard()
    console.log(this.cards);
  }


  constructor(private _cardService: CardService) {
  }

}
