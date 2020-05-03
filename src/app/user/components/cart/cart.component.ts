import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  customList = [
    {
      type: 'number',
      placeholder: 'Quantidade',
      formControl: new FormControl(''),
      name: 'qtd'
    },
    {
      type: 'text',
      placeholder: 'Número do Cartão',
      formControl: new FormControl(''),
      name: 'card_number'
    },
    {
      type: 'text',
      placeholder: 'Nome impresso no cartão',
      formControl: new FormControl(''),
      name: 'name'
    },
    {
      type: 'text',
      placeholder: 'Data expiração',
      formControl: new FormControl(''),
      name: 'exp'
    },
    {
      type: 'text',
      placeholder: 'CCV',
      formControl: new FormControl(''),
      name: 'ccv'
    }
  ];
  cartForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartForm = this.formBuilder.group({
      color: new FormControl({value: '', disable: false})
    });
    this.customList.map(custom => {
      this.cartForm.addControl(custom.name, custom.formControl);
    });
  }

  submit(){
    console.log(this.cartForm.value);
  }

}
