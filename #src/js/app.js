import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
flsFunctions.subMenu();
flsFunctions.showBurger();

import Swiper, { Navigation } from 'swiper';

var heroSlider = new Swiper(".hero-slider", {
    loop: true,
    loopedSlides: 5,
    slideClass: "hero-swiper__slide",
    navigation: {
        nextEl: ".hero-slider__button--next",
        prevEl: ".hero-slider__button--prev",
    },
});
