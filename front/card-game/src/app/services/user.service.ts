import { Injectable } from '@angular/core';
import {IUser} from "../interfaces/IUser";
import {UserWebServices} from '../web-services/user-web-services'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User:IUser={
    login:"",
    password:"",
  };

  login(user:IUser){
console.log(user)
    return this.UserWebService.login(user)
  }

  CreateUser(user: IUser) {
    return this.UserWebService.createUser(user)
  }

  GetUser(){
    return this.User;
  }


  constructor(private UserWebService: UserWebServices) {

  }
}
