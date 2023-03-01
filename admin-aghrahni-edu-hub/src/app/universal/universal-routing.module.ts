import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UniversalComponent } from './universal.component';

const routes: Routes = [{
  path: '', component: UniversalComponent,
  children: [
    { path: '', component: LoginComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
