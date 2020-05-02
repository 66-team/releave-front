import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiper: ElementRef; 
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

  constructor(private renderer2: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', { 
      direction: 'horizontal',
      slidesPerView: 1.5,
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

  ngAfterViewInit() {
  }

}
