//  Show / close  sidebar menu 

let sideBar = document.querySelector('.sidebar');
let openSideBar = document.querySelector('.open');
let closeSideBar = document.querySelector('.close');
let blurBox = document.querySelector('.blur_box');

openSideBar.addEventListener ('click', () => {
  sideBar.classList.add('show_sidebar');
  blurBox.classList.add('show_blur_box')
})

closeSideBar.addEventListener ('click', () => {
  sideBar.classList.remove('show_sidebar');
  blurBox.classList.remove('show_blur_box')
})

var swiper = new Swiper ('.productSwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    }
  }
});

/* swiper auto play TI */

var swiper = new Swiper ('.testSwiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

