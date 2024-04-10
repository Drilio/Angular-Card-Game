import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ICard} from "../../interfaces/ICard";

@Component({
  selector: 'app-cards-manager-component',
  templateUrl: './cards-manager-component.component.html',
  styleUrls: ['./cards-manager-component.component.css']
})
export class CardsManagerComponentComponent implements OnInit {
  card:ICard ={
    name:"",
    value:0,
    id:undefined,
  }
  createCardForm: FormGroup = this._formBuilder.group({
    name: new FormControl(''),
    value: new FormControl(''),
  })

  submitted = false;

  ngOnInit(): void {
    this.createCardForm = this._formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        value: [
          '',
          [
            Validators.required,
          ]
        ],
      },
    );

  }

  //Simplify data handle on html
  get f(): { [key: string]: AbstractControl } {
    return this.createCardForm.controls;
  }

  constructor(private _cardService: CardService, private _formBuilder: FormBuilder) {
  }

  onSubmit(){

    this.card.name = this.createCardForm.value.name;
    this.card.value = this.createCardForm.value.value;

    this.submitted = true;

    if(this.createCardForm.invalid){
      return;
    }

    console.warn('Your card was created successfully.', this.card);
    this.createCardForm.reset();
    return this._cardService.CreateCard(this.card);
  }
}
