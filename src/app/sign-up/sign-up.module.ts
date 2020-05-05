import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [SignUpComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
