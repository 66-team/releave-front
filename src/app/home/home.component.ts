import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigation = {
    right: faChevronCircleRight,
    left: faChevronCircleLeft
  };
  optList = [
    {
      img: './../../assets/img/cam.svg',
      description: 'Começar uma live',
      action: 'live'
    },
    {
      img: './../../assets/img/add.svg',
      description: 'Cadastrar produtos',
      action: 'addProd'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  selectLive() {
    this.router.navigate(['user']);
  }

  toolChoose(event) {
    console.log(event);
  }

}
