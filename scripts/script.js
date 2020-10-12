const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');

const buttonOpenMenu = document.querySelector('.main__menu');
const buttonCloseMenu = document.querySelector('.menu__close-icon');

const buttonOpenModal = document.querySelector('.region__button');
const buttonOpenModalToo = document.querySelector('.region__button_deactive');
const buttonCloseModal = document.querySelector('.modal__close-icon');

const checkContainer = document.querySelector('.main__chekboxes');
const linkActive = './images/checkbox-active.svg';
const link = './images/checkbox.svg';

function openAndCloseSomeForm(popup) {
    popup.classList.toggle('open-popup');
}


var mySwiper = new Swiper('.region-swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.region__swiper-pagination',
      clickable: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,        
      },
    navigation: {
      nextEl: '.swiper-button-rigth',
      prevEl: '.swiper-button-left',
    },
})

var mySwiperTwo = new Swiper('.main-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,        
      },
    pagination: {
      el: '.main__swiper-pagination',
      clickable: true
    },
  }) 

buttonOpenMenu.addEventListener('click', ()=> openAndCloseSomeForm(menu));
buttonCloseMenu.addEventListener('click', ()=> openAndCloseSomeForm(menu));

buttonOpenModal.addEventListener('click', ()=> openAndCloseSomeForm(modal));
buttonOpenModalToo.addEventListener('click', ()=>openAndCloseSomeForm(modal));
buttonCloseModal.addEventListener('click', ()=> openAndCloseSomeForm(modal));
