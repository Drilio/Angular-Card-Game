import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm:FormGroup = this._formBuilder.group({
    login:"",
    password:"",
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
  ) {
  }

  onSubmit( ){
    console.warn('Your account was created successfully.', this.loginForm.value);
    this._userService.login(this.loginForm.value);

  }

}
