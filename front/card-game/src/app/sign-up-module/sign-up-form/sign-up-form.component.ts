import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})

export class SignUpFormComponent {

  checkoutForm:FormGroup = this._formBuilder.group({
    login:"",
    password:"",
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
  ) {
  }

  onSubmit( ){
    console.warn('Your account was created successfully.', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
