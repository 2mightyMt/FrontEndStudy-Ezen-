$(".el-collapse-item__wrap-1").on("click", function () {
    const $wrapCon = $(".el-collapse-item__wrap-con-1");

    if ($wrapCon.hasClass("active")) {
        // active 클래스가 있을 경우 슬라이드업하고 active 클래스 제거
        $wrapCon.slideUp().removeClass("active");
    } else {
        // active 클래스가 없을 경우 슬라이드다운하고 active 클래스 추가
        $wrapCon.slideDown().addClass("active");
    }
});

$('.el-collapse-item__wrap-2').on('click', function () {
    const $wrapCon = $('.el-collapse-item__wrap-con-2');

    if ($wrapCon.hasClass('active')) {
        // active 클래스가 있을 경우 슬라이드업하고 active 클래스 제거
        $wrapCon.slideUp().removeClass('active');
    } else {
        // active 클래스가 없을 경우 슬라이드다운하고 active 클래스 추가
        $wrapCon.slideDown().addClass('active');
    }
});


const radioButtons = document.querySelectorAll('.el-radio-button__orig-radio');

radioButtons.forEach((radio) => {
    radio.addEventListener('click', () => {
        // 모든 라디오 버튼의 부모 요소에서 active 클래스 제거
        radioButtons.forEach((btn) => {
            btn.parentElement.classList.remove('active');
            // 부모의 부모 요소 배경색 제거
            btn.parentElement.parentElement.style.border = '';
        });

        // 클릭된 라디오 버튼의 부모 요소에 active 클래스 추가
        radio.parentElement.classList.add('active');

        // 부모 요소에 active 클래스가 있는 경우 그 부모의 부모 요소 배경색 설정
        if (radio.parentElement.classList.contains('active')) {
            radio.parentElement.parentElement.style.border = '2px solid #067dfd';
        }
    });
});


$(document).ready(function () {
    $('.product-cont__lst a').on('click', function (e) {
        e.preventDefault(); // 기본 앵커 클릭 동작을 방지

        // 모든 <li> 요소에서 'active' 클래스 제거
        $('.product-cont__lst li').removeClass('active');

        // 클릭한 <a> 태그의 부모 <li>에 'active' 클래스 추가
        $(this).parent('li').addClass('active');

        // 대상 섹션으로 부드럽게 스크롤
        const targetId = $(this).attr('href');
        const targetPosition = $(targetId).offset().top;

        $('html, body').animate({ scrollTop: targetPosition }, 500);
    });
});

// 신고하기 버튼
$(".report").on("click", function (event) {
    // 이벤트가 document로 전파되지 않도록 방지
    event.stopPropagation();

    // 모든 .report-act 요소에서 active 클래스를 제거
    $(".report-act").removeClass("active");

    // 클릭된 요소와 가장 가까운 .report-act 요소에 active 클래스를 추가
    const $reportAct = $(this).closest(".report").find(".report-act");
    $reportAct.addClass("active");
});

// document의 다른 부분을 클릭하면 active 클래스를 제거
$(document).on("click", function () {
    $(".report-act").removeClass("active");
});

// 도움돼요 버튼
$(".help-cou").on("click", function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");

        // 클릭 해제 시 카운트 감소
        let count = parseInt($(this).find(".counting").text(), 10);
        if (count > 0) {
            $(this).find(".counting").text(count - 1);
        }
    } else {
        $(this).addClass("active");

        // 클릭 시 카운트 증가
        let count = parseInt($(this).find(".counting").text(), 10);
        $(this).find(".counting").text(count + 1);
    }
});

// 좋아요 버튼
$(".like").on("click", function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
});

// header
// .goto의 li 클릭 시 a태그의 class 제거/활성화
const gotoLis = document.querySelectorAll('.goto li');
gotoLis.forEach((gotoLi) => {
    gotoLi.addEventListener('click', function () {
        gotoLis.forEach((li) => {
            li.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// menu-btn에 hover시 .menu-all 보이기
const menuBtn = document.querySelector('.menu-btn');
const menuAll = document.querySelector('.menu-all');
const depth2First = document.querySelector('.depth1 >  .depth2');
const titles = document.querySelectorAll('.depth1 li > a');
const depth2 = document.querySelectorAll('.depth2');

menuBtn.addEventListener('mouseenter', function () {
    menuAll.style.display = 'block';
    depth2First.style.display = 'flex';
});

menuBtn.addEventListener('mouseleave', function () {
    menuAll.style.display = 'none';
});

menuAll.addEventListener('mouseenter', function () {
    menuAll.style.display = 'block';
});
menuAll.addEventListener('mouseleave', function () {
    menuAll.style.display = 'none';
});

titles.forEach((title, index) => {
    title.addEventListener('mouseenter', function () {
        if (index === 0) {
            depth2First.style.display = 'flex';
        } else {
            depth2First.style.display = 'none';
        }
    });
});