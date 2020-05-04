import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seller-options',
  templateUrl: './seller-options.component.html',
  styleUrls: ['./seller-options.component.scss']
})
export class SellerOptionsComponent implements OnInit {
  @Input() opts = [
    {
      img: './../../assets/img/cam.svg',
      description: 'Começar uma live'
    },
    {
      img: './../../assets/img/add.svg',
      description: 'Cadastrar produtos'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
