import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SignUpFormComponent,
  ]
})
export class SignUpModule { }
