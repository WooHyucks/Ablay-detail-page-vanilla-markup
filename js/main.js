new Swiper(".img-swiper .swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".img-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".img-swiper .swiper-prev",
    nextEl: ".img-swiper .swiper-next",
  },
});
