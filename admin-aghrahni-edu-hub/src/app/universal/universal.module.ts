import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UniversalRoutingModule } from './universal-routing.module';
import { UniversalComponent } from './universal.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    UniversalComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    UniversalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniversalModule { }
