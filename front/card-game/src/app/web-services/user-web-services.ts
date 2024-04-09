import {IUser} from "../interfaces/IUser";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserWebServices {

  async createUser(user: IUser) {
    try {
      const reponse = await fetch("http://localhost:3010/api/profiles",{
        method: "PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user}),
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async login(user: IUser) {
    console.log("toto")
    try{
      const reponse = await fetch("http://localhost:3010/api/login",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user}),
      })
      console.log('reponse',reponse)
    }catch(error){
      console.log('error',error);
    }
  }
}
