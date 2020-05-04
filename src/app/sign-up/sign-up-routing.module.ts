import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', component: SignUpComponent
  },
  {
    path: 'register/:type',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
