import { Component, OnInit } from '@angular/core';
import { faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notification = {
    view: faEye,
    arrow: faArrowRight
  };

  constructor() { }

  ngOnInit(): void {
  }

}
