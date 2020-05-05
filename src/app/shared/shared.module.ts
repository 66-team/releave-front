import { NgModule } from '@angular/core';
import { LiveComponent } from './live/live.component';
import { SafePipe } from './safe/safe.pipe';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { ButtonComponent } from './button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationComponent } from './notification/notification.component';
import { CInputComponent } from './c-input/c-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { StepperComponent } from './stepper/stepper.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInService } from './services/sign-in/sign-in.service';
import { SellerOptionsComponent } from './seller-options/seller-options.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LiveComponent,
    SafePipe,
    SimpleCardComponent,
    ButtonComponent,
    NotificationComponent,
    CInputComponent,
    LogoComponent,
    StepperComponent,
    SellerOptionsComponent
  ],
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    LiveComponent,
    SafePipe,
    SimpleCardComponent,
    ButtonComponent,
    FontAwesomeModule,
    NotificationComponent,
    CInputComponent,
    ReactiveFormsModule,
    LogoComponent,
    StepperComponent,
    SellerOptionsComponent,
    CommonModule
  ],
  providers: [
    SignInService
  ]
})
export class SharedModule { }
