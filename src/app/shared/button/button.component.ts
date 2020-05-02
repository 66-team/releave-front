import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() act = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  action() {
    this.act.emit();
  }

}
