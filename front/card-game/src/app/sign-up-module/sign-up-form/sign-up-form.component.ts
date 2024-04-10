import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})

export class SignUpFormComponent implements OnInit {

  user:IUser = {
    login:"",
    password:""
  }

  signUpForm:FormGroup = this._formBuilder.group({
    login: new FormControl(''),
    password: new FormControl(''),
  })

  submitted = false;

  homeUrl:string = '/'

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router:Router,
  ) {
  }


  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group(
      {
        login: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(40)
          ]
        ],
      },
    );
  }
  //Simplify data handle on html
  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }


  onSubmit( ){

    this.user.login = this.signUpForm.value.login;
    this.user.password = this.signUpForm.value.password;

    this.submitted = true;

    if(this.signUpForm.invalid){
      return;
    }

    console.warn('Your account was created successfully.', this.user);
    const connect = this._userService.CreateUser(this.user);

    return this._router.navigateByUrl(this.homeUrl);

  }
}
