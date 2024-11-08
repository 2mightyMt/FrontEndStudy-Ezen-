document.addEventListener('DOMContentLoaded', function () {
    // 기본 Swiper (기존 스와이퍼)
    const swiper1 = new Swiper('.swiper-container', {
        loop: false, // loop 비활성화
        spaceBetween: 28, // 슬라이드 간 간격
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // 페이지네이션 클릭 가능
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                const prevButton = document.querySelector('.swiper-button-prev');
                const nextButton = document.querySelector('.swiper-button-next');

                // 첫 번째 슬라이드에 있을 때
                if (this.activeIndex === 0) {
                    prevButton.classList.add('disabled');
                    prevButton.style.pointerEvents = 'none'; // 클릭 비활성화
                } else {
                    prevButton.classList.remove('disabled');
                    prevButton.style.pointerEvents = 'auto';
                }

                // 마지막 슬라이드에 있을 때
                if (this.activeIndex === this.slides.length - 1) {
                    nextButton.classList.add('disabled');
                    nextButton.style.pointerEvents = 'none'; // 클릭 비활성화
                } else {
                    nextButton.classList.remove('disabled');
                    nextButton.style.pointerEvents = 'auto';
                }
            },
        },
    });
    const swiper2 = new Swiper('.swiper-container2', {
        loop: true, // loop 비활성화
        spaceBetween: 16, // 슬라이드 간 간격
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // 페이지네이션 클릭 가능
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                const prevButton = document.querySelector('.swiper-button-prev');
                const nextButton = document.querySelector('.swiper-button-next');

                // 첫 번째 슬라이드에 있을 때
                if (this.activeIndex === 0) {
                    prevButton.classList.add('disabled');
                    prevButton.style.pointerEvents = 'none'; // 클릭 비활성화
                } else {
                    prevButton.classList.remove('disabled');
                    prevButton.style.pointerEvents = 'auto';
                }

                // 마지막 슬라이드에 있을 때
                if (this.activeIndex === this.slides.length - 1) {
                    nextButton.classList.add('disabled');
                    nextButton.style.pointerEvents = 'none'; // 클릭 비활성화
                } else {
                    nextButton.classList.remove('disabled');
                    nextButton.style.pointerEvents = 'auto';
                }
            },
        },
    });
    const swiper3 = new Swiper('.swiper-container3', {
        loop: true, // loop 비활성화
        spaceBetween: 16, // 슬라이드 간 간격
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // 페이지네이션 클릭 가능
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                const prevButton = document.querySelector('.swiper-button-prev');
                const nextButton = document.querySelector('.swiper-button-next');

                // 첫 번째 슬라이드에 있을 때
                if (this.activeIndex === 0) {
                    prevButton.classList.add('disabled');
                    prevButton.style.pointerEvents = 'none'; // 클릭 비활성화
                } else {
                    prevButton.classList.remove('disabled');
                    prevButton.style.pointerEvents = 'auto';
                }

                // 마지막 슬라이드에 있을 때
                if (this.activeIndex === this.slides.length - 1) {
                    nextButton.classList.add('disabled');
                    nextButton.style.pointerEvents = 'none'; // 클릭 비활성화
                } else {
                    nextButton.classList.remove('disabled');
                    nextButton.style.pointerEvents = 'auto';
                }
            },
        },
    });
});
