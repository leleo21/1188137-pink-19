'use strict';


  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navToggle.classList.remove('main-nav__toggle--nojs');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--opened');
    navToggle.classList.toggle('main-nav__toggle--opened');
  });
