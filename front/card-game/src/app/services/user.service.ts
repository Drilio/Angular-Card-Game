import { Injectable } from '@angular/core';
import {IUser} from "../interfaces/IUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User:IUser={
    login:"",
    password:"",
  };

  CreateUser(user: IUser) {
    //TODO: WebService Implementation;
  }

  GetUser(){
    return this.User;
  }


  constructor() {

  }
}
