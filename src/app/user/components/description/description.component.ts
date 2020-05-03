import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit, AfterViewInit {
  @Input() content: {
    title: string,
    text: string,
    pics: string[]
  };
  navigation = {
    right: faChevronCircleRight,
    left: faChevronCircleLeft
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 3,
      loop: false,
      initialSlide: 1,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: false
    });
  }

}
