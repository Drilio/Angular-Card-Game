import {Component} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent{

  constructor(    private _userService: UserService,
  ) {
    this._userService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isConnected = isLoggedIn;
    });
  }

  isConnected :boolean = false;


  disconnection(){
    this._userService.DisconnectUser()
    this.isConnected = this._userService.isLoggedIn;
    console.log(this._userService.isLoggedIn);
  }
}
