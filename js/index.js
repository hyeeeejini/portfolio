//index.js


///////// 전역변수 설정 ///////////////////////////////////////////////
var pageCount = 0;  //현재 페이지 번호! (첫 페이지 0 = 초깃값)

//총 페이지 수가 고정된 값이라면 상수 선언가능! 상수는 값의 재할당(변경) 불가!
const total = 5;

var stat = 0;  //스크롤 상태변경 (0-실행전/허용, 1-실행중/잠금)
////////////////////////////////////////////////////////////////////////

$(document).ready(function () {

    $(document).on('mousewheel DOMMouseScroll', function () {

        if (stat === 1) return false;

        stat = 1;

        var evt = window.event;
        console.log(evt);

        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
        console.log('마우스 휠 델타값' + delta);

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
            console.log('파이어폭스 detail : ' + delta);
        }

        if (delta < 0) {
            pageCount++;
            if (pageCount === total) pageCount = total-1;
            
        } else {
            pageCount--;
            if (pageCount === -1) pageCount = 0;
        }


        // page에 따른 header 디자인 변경 -> 최종 pageCount 값을 기준으로!
        /* if (pageCount > 0) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        } */



        var pageTop = $('.page').eq(pageCount).offset().top;
        console.log('페이지 offset : ' + pageTop);

        $('html, body').animate({
            scrollTop: pageTop + 'px'
        }, 800, function () {
            stat = 0;
        });

    });

});

