import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

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
  config = {
    direction: 'horizontal',
    slidesPerView: 1.5,
    loop: false,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
