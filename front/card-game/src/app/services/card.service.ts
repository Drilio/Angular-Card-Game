import { Injectable } from '@angular/core';
import {CardWebService} from "../web-services/card-web-service";
import {ICard} from "../interfaces/ICard";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  allCards:ICard[]=[];

  async GetAllCard() {
    const Cards = await this._cardWebService.GetAllCards()
    for(let card of Cards){
    this.allCards.push(card)
    }
    return this.allCards;
  }

  GetOneCard(id:string){
    return this._cardWebService.GetOneCard(id)
  }

  CreateCard(card:ICard){
    this.allCards.push(card);
    return this._cardWebService.createCard(card);
  }

  DeleteCard(id:string){
    return this._cardWebService.DeleteCard(id);
  }

  constructor(private _cardWebService: CardWebService) { }
}
