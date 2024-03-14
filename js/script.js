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
