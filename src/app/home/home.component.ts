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
  };

  constructor(private router: Router) { }

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

  selectLive() {
    console.log('teste');
    
    this.router.navigate(['user']);
  }

}
