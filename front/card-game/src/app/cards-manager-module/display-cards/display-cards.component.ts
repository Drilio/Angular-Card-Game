import {Component, OnInit} from '@angular/core';
import {ICard} from "../../interfaces/ICard";
import {CardService} from "../../services/card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit{
  cards:ICard[]= [];

  async getAllCards(){
    return this.cards = await this._cardService.GetAllCard()

  }
  async ngOnInit() {
    await this.getAllCards()
    this._cardService.allCards$.subscribe(cards =>this.cards = cards)
  }

  async DeleteCard(id:string){
    const deleteObject =this._cardService.DeleteCard(id);

  }

  constructor(private _cardService: CardService, private _router:Router) {
  }

}
