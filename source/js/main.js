'use strict';

var header = document.querySelector('.header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('header__toggle--nojs');

navToggle.addEventListener('click', function () {
  header.classList.toggle('header--opened');
  navMain.classList.toggle('main-nav--opened');
  navToggle.classList.toggle('header__toggle--opened');
});
