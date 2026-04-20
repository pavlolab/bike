document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {

    loop: true,
    grabCursor: true,
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    speed: 600,
  });
});