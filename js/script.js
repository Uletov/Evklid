// slider-pagination

const container = document.querySelector('.container')
const swiper = new Swiper('.hero__swiper', {

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})

// stages-tabs

let tabsBtn = document.querySelectorAll('.stages-btn');
let tabsItem = document.querySelectorAll('.stages-step');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('stages-btn_active') });
    e.currentTarget.classList.add('stages-btn_active');

    tabsItem.forEach(function (element) { element.classList.remove('stages-step_active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('stages-step_active')
  })
})

// burger-menu

let burger = document.querySelector('.burger-open');
let burgerClose = document.querySelector('.nav-close');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header-list__link');

burger.addEventListener('click', function () {
  menu.classList.add('active');
  document.body.classList.toggle('stop-scroll');
});

burgerClose.addEventListener('click', function () {
  menu.classList.remove('active');
  document.body.classList.remove('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('active');
    document.body.classList.remove('stop-scroll');
  });
});

// search-form

let searchBtn = document.querySelector('.search-btn_open');
let searchForm = document.querySelector('.search-form');
let searchClose = document.querySelector('.search-btn_close');

searchBtn.addEventListener('click', function () {
  searchForm.classList.add('active');
})

searchClose.addEventListener('click', function () {
  searchForm.classList.remove('active');
})

document.addEventListener('click', function (e) {
  let target = e.target;
  if (!target.closest('.search')) {
    searchForm.classList.remove('active');
    searchForm.querySelector('search-input').value = "";
  }
})

// accordion

$(function () {
  $(".accordion__list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  });

});
