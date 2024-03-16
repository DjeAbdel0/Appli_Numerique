/*---------LP---------*/

document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper('.swiper-screenshots', {
    direction: 'horizontal',
    loop: true,
    watchSlidesProgress: true,
    slidesPerView: 'auto', 
    centeredSlides: true, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
     
      1200: {
        slidesPerView: 3, 
      },
    },
  });
});

/*---------App---------*/

var swiperOeuvre = new Swiper(".swiper-oeuvre", {
  slidesPerView: 'auto',
  freeMode: true,
});

var swiper = new Swiper(".swiper-list", {
  slidesPerView: 'auto',
  freeMode: true,
});

const btn = document.querySelector('.bi-heart-fill');
var clicked = true;

btn.addEventListener('click', () => {
  clicked=! clicked;
  if(clicked){
    btn.classList.add('unlike');
    btn.classList.remove('like');
  }
  else{
    btn.classList.add('like');
    btn.classList.remove('unlike');
  }
})