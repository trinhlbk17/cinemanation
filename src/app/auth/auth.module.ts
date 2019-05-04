import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {ShareModule} from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule, AuthRoutingModule, ShareModule
  ]
})
export class AuthModule { }
