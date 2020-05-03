import { Injectable } from '@angular/core';
import { SocketIoModule, SocketIoConfig, Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  getMessages() {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
          observer.next(message);
      });
    });
  }
}
