import { Injectable } from '@angular/core';
import {CardWebService} from "../web-services/card-web-service";
import {ICard} from "../interfaces/ICard";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  GetAllCard(){
    return this._cardWebService.GetAllCards()
  }

  GetOneCard(id:string){
    return this._cardWebService.GetOneCard(id)
  }

  CreateCard(card:ICard){
    return this._cardWebService.createCard(card);
  }

  constructor(private _cardWebService: CardWebService) { }
}
