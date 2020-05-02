import { Component, OnInit } from '@angular/core';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  navigation = {
    right: faChevronCircleRight,
    left: faChevronCircleLeft
  };
  config = {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: false,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
