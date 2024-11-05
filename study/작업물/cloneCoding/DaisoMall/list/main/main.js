document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: false, // loop 비활성화 (마지막에서 첫 번째로, 또는 그 반대로 순환하지 않음)
        spaceBetween: 28,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
    // 새로운 Swiper 초기화
    const swiper2 = new Swiper('.pt-swiper-container', {
        // 새로운 클래스명을 사용합니다
        loop: false,
        spaceBetween: 28,
        pagination: {
            el: '.pt-swiper-pagination', // 새로운 페이지네이션 클래스
            clickable: true,
        },
        navigation: {
            nextEl: '.pt-swiper-button-next', // 새로운 다음 버튼 클래스
            prevEl: '.pt-swiper-button-prev', // 새로운 이전 버튼 클래스
        },
        on: {
            slideChange: function () {
                const prevButton = document.querySelector('.pt-swiper-button-prev');
                const nextButton = document.querySelector('.pt-swiper-button-next');

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
