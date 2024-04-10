import { Injectable } from '@angular/core';
import {CardWebService} from "../web-services/card-web-service";
import {ICard} from "../interfaces/ICard";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  allCards:ICard[]=[];
  //This Observable is here for display correct data on creation and delete
  allCards$ = new BehaviorSubject(this.allCards);

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
    this.allCards = this.allCards.filter(card => card.id !== id);
    return this._cardWebService.DeleteCard(id);
  }

  constructor(private _cardWebService: CardWebService) { }
}
