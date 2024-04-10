import { Injectable } from '@angular/core';
import {IUser} from "../interfaces/IUser";
import {UserWebServices} from '../web-services/user-web-services'
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn:boolean=false;

  isLoggedIn$ = new BehaviorSubject(this.isLoggedIn);

  async login(user: IUser) {
    this.isLoggedIn= await this._userWebService.login(user)
    return this.isLoggedIn;
  }

  CreateUser(user: IUser) {
    return this._userWebService.createUser(user)
  }

  DisconnectUser() {
    this.isLoggedIn = false;
  }


  constructor(private _userWebService: UserWebServices) {
  }

}
