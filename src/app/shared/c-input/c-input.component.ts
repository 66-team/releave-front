import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-c-input',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.scss']
})
export class CInputComponent implements OnInit {
  @Input() custom: {
    type: string,
    placeholder: string,
    formControl: FormControl
  };

  constructor() { }

  ngOnInit(): void {
  }

}
