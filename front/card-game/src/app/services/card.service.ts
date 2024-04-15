import {Injectable} from '@angular/core';
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
      this.allCards=await this._cardWebService.GetAllCards();
    this.allCards$.next(this.allCards);
    return this.allCards;
  }

  GetOneCard(id:string){
    return this._cardWebService.GetOneCard(id)
  }

  CreateCard(card:ICard){
    this.allCards.push(card);
    return this._cardWebService.createCard(card);
  }

  async DeleteCard(id: string) {
    await this._cardWebService.DeleteCard(id);
    this.allCards = this.allCards.filter(card => card.id !== id);

    return this.allCards$.next(this.allCards);
  }

  constructor(private _cardWebService: CardWebService) { }
}
