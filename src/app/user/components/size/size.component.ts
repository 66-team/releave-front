import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  @Input() sizes = [];

  constructor() { }

  ngOnInit(): void {
  }

}
