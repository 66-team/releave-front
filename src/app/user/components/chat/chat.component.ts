import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  newMessage: string;
  messageList = [];

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
    this.chat.getMessages().subscribe(message => {
      console.log(message);
      this.messageList.push();
    });
  }

  sendMessage() {
    this.chat.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}
