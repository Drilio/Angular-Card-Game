import {Injectable} from "@angular/core";
import {ICard} from "../interfaces/ICard";

@Injectable({providedIn:'root'})
export class CardWebService {

  async GetAllCards(){
    try{
      const response = await fetch("http://localhost:3000/api/cards",{
        method: "GET",
      });
      return response.json( );
    }catch(error){
      console.log('error',error);
    }
  }

  async GetOneCard(id:string){
    try{
      const response = await fetch(`http://localhost:3000/api/cards/${id}`,{
        method: "GET",
      });
      return response.json()


    }catch(error){
      console.log('error',error);
    }
  }

  async createCard(card:ICard){
    try {
      const response = await fetch("http://localhost:3000/api/cards",{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      });
      console.log(response)
    } catch (error) {
      console.log('error', error);
    }
  }
}
