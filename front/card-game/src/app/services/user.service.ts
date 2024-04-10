import { Injectable } from '@angular/core';
import {IUser} from "../interfaces/IUser";
import {UserWebServices} from '../web-services/user-web-services'
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User:IUser={
    login:"",
    password:"",
  };

  isLoggedIn:boolean=false;

  isLoggedIn$ = new BehaviorSubject(this.isLoggedIn);

  async login(user: IUser) {
    this.isLoggedIn= await this.UserWebService.login(user)
    return this.isLoggedIn;
  }

  CreateUser(user: IUser) {
    return this.UserWebService.createUser(user)
  }

  DisconnectUser() {
    this.isLoggedIn = false;
  }

  GetUser(){
    return this.User;
  }


  constructor(private UserWebService: UserWebServices) {

  }
}
