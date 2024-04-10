import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  user:IUser = {
    login:"",
    password:""
  }

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;


  homeUrl:string = '/'
  loginError:boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router:Router,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group(
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

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.user.login = this.loginForm.value.login;
    this.user.password = this.loginForm.value.password;

    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    const connection = await this._userService.login(this.user);
    if (connection) {
      await this._router.navigateByUrl(this.homeUrl);
    }else{
      this.loginError = true;
    }
  }

}
