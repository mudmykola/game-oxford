var swiper = new Swiper(".sliderSwiper", {
    slidesPerView: 1,
    slidesPerColumn: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".slider-btn__next",
        prevEl: ".slider-btn__prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        480: {
            slidesPerView: 1,
            centeredSlides: true,
        },
    },
});