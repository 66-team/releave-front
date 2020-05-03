import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  custom = {
    type: 'number',
    placeholder: 'Quantidade',
    formControl: new FormControl('')
  };
  cartForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartForm = this.formBuilder.group({
      qtd: this.custom.formControl
    });
  }
  submit(){
    console.log(this.cartForm.value);
  }

}
