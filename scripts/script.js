const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');

const buttonOpenMenu = document.querySelector('.main__menu');
const buttonCloseMenu = document.querySelector('.menu__close-icon');

const buttonOpenModal = document.querySelector('.region__button');
const buttonCloseModal = document.querySelector('.modal__close-icon');

const checkContainer = document.querySelector('.main__chekboxes');
const linkActive = './images/checkbox-active.svg';
const link = './images/checkbox.svg';

const info = document.querySelector('.main__statistics-info');
const title = document.querySelector('.main__statistics-title');
const subtitle = document.querySelector('.main__statistics-subtitle');

const one = document.getElementById('check-one');
const two = document.getElementById('check-two');
const three = document.getElementById('check-three');
const four = document.getElementById('check-four');

const arrCheck =[
    {
        name: one,
        info: 'Площадь для комфортного делового климата1',
        title: '101 000',
        subtitle: 'Квадратных киллометров 1',
        flag: true
    },
    {
        name: two,
        info: 'Площадь для комфортного делового климата2',
        title: '102 000',
        subtitle: 'Квадратных киллометров 2',
        flag: false
    },
    {
        name: three,
        info: 'Площадь для комфортного делового климата3',
        title: '103 000',
        subtitle: 'Квадратных киллометров 3',
        flag: false
    },
    {
        name: four,
        info: 'Площадь для комфортного делового климата4',
        title: '104 000',
        subtitle: 'Квадратных киллометров 4',
        flag: false
    },
];

info.textContent = arrCheck[0].info;
title.textContent = arrCheck[0].title;
subtitle.textContent = arrCheck[0].subtitle;

function openAndCloseSomeForm(popup) {
    popup.classList.toggle('open-popup');
}

/* меняет флаг */
function cangeFlag(arr){
   let i = 0;
   while(i < arr.length) {
    if (arr[i].flag === true){  
        if (i === arr.length-1){
            arr[0].flag = true;
        }
        else {
            arr[i+1].flag = true;
        }
        break;
    }
   }
   return arr;
}
/* в зависимости от значение флага , меняет иконку и класс*/
function oneOfFiveSecond(arrCheck){
    return arrCheck.forEach((item,index)=>{
        if (item.flag === true){  
            item.name.setAttribute('src', link);
            item.name.classList.remove('ckeck-active');

            if (index !== arrCheck.length-1){
                info.textContent = arrCheck[index+1].info;
                title.textContent = arrCheck[index+1].title;
                subtitle.textContent = arrCheck[index+1].subtitle;
                arrCheck[index+1].name.setAttribute('src', linkActive);
                arrCheck[index+1].name.classList.add('ckeck-active');
            } 
            else {
                info.textContent = arrCheck[0].info;
                title.textContent = arrCheck[0].title;
                subtitle.textContent = arrCheck[0].subtitle;
                arrCheck[0].name.setAttribute('src', linkActive);
                arrCheck[0].name.classList.add('ckeck-active');
            }
        }
    })
}

function changeContent(el) {
    const obj = arrCheck.find((item)=> {
        return item.name === el
    })
    info.textContent = obj.info;
    title.textContent = obj.title;
    subtitle.textContent = obj.subtitle;
}

function toggleCheck(event) {
    arrCheck.forEach((item)=>{
        item.name.setAttribute('src', link);
        item.name.classList.remove('ckeck-active');
    })

    if (event.target.classList.contains('ckeck-active')){
        event.target.setAttribute('src', link);
        event.target.classList.remove('ckeck-active');
    }
    else {
        event.target.setAttribute('src', linkActive);
        event.target.classList.add('ckeck-active');

        changeContent(event.target);
    }
}

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
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

  
buttonOpenMenu.addEventListener('click', ()=> openAndCloseSomeForm(menu));
buttonCloseMenu.addEventListener('click', ()=> openAndCloseSomeForm(menu));

buttonOpenModal.addEventListener('click', ()=> openAndCloseSomeForm(modal));
buttonCloseModal.addEventListener('click', ()=> openAndCloseSomeForm(modal));

checkContainer.addEventListener('click', toggleCheck);
