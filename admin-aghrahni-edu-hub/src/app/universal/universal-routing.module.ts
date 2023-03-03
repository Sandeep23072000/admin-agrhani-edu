import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { UniversalComponent } from './universal.component';

const routes: Routes = [{
  path: '', component: UniversalComponent,
  children: [
    { path: '', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
