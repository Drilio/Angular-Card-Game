import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isConnected : boolean = false;

  constructor(private _userService: UserService) {
    this._userService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isConnected = isLoggedIn;
    });
  }

}
