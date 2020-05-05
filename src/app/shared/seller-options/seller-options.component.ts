import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seller-options',
  templateUrl: './seller-options.component.html',
  styleUrls: ['./seller-options.component.scss']
})
export class SellerOptionsComponent implements OnInit {
  @Input() opts: [
    {
      img: string,
      description: string
    },
  ];
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  act(action: string) {
    this.action.emit(action);
  }

}
