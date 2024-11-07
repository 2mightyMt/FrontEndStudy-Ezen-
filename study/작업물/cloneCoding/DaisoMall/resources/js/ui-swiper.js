// swiper__container
var swiper = new Swiper(".swiper__container", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// swiper__main
var swiper2 = new Swiper(".swiper__main", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span> | <span class="' + totalClass + '"></span>';
        }
    },
});

var swiper3 = new Swiper(".swiper-review", {
    spaceBetween: 5,
    slidesPerView: 12,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper4 = new Swiper(".swiper-pic", {
    spaceBetween: 5,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});