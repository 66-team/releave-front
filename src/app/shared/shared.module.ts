import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { LiveComponent } from './live/live.component';
import { SafePipe } from './safe/safe.pipe';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { ButtonComponent } from './button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    LiveComponent,
    SafePipe,
    SimpleCardComponent,
    ButtonComponent,
    NotificationComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    LiveComponent,
    SafePipe,
    SimpleCardComponent,
    ButtonComponent,
    FontAwesomeModule,
    NotificationComponent
  ]
})
export class SharedModule { }
