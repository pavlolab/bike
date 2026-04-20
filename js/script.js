document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    loop: true,
    slidesPerView: 3,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: -5,
      depth: 5,
      modifier: 0.5, 
      scale: 0.9,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    speed: 600,
    cssMode: false,
    watchOverflow: true,
  });

  // Оновлення курсору для центральної картки
  swiper.on("slideChange", function () {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      const link = activeSlide.getAttribute("data-link");
      activeSlide.style.cursor = link ? "pointer" : "default";
    }
  });

  // Обробка кліку на центральну картку
  document.querySelector(".swiper").addEventListener("click", function (e) {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide && activeSlide.contains(e.target)) {
      const link = activeSlide.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    }
  });
});
