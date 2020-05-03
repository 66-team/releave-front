import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { DescriptionComponent } from './components/description/description.component';
import { SharedModule } from '../shared/shared.module';
import { TitleComponent } from './components/title/title.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from '../shared/chat/chat.service';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    UserComponent,
    DescriptionComponent,
    TitleComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [
    ChatService
  ]
})
export class UserModule { }
