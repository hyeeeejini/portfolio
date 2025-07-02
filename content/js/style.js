//style loadMore


$(document).ready(function () {

    //초기설정
    $('.img-box').hide();
    $('.img-box').slice(0, 3).show();

    //slice(start, end) : 시작 인덱스부터 종료 인덱스 이전까지
    //slice(0,4) : 인덱스 0번부터 4번 이전까지 >> 0,1,2,3

    $('#loadMore').on('click', function (evt) {

        //a태그 기본기능 막기
        evt.preventDefault();

        //length -> 갯수 구하는 메서드
        var hiddenBox = $('.img-box:hidden').length;
        console.log('숨겨진 box 갯수 :' + hiddenBox);

        //숨겨진 박스 등장
        $('.img-box:hidden').slice(0, 3).slideDown();

        //2) 숨겨진 상품이 없을 때, loadMore 버튼 숨기기
        hiddenBox = $('.img-box:hidden').length;
        console.log('슬라이드다운 후 남은 박스 갯수 : ' + hiddenBox);

        if(hiddenBox === 0) {
            $('#loadMore').fadeOut();
        }


        //스크롤 애니메이션
        var offTop = $(this).offset().top;

        $('html, body').animate({
            scrollTop: offTop
        }, 1500);


        //브라우저의 스크롤을 이동할 때 대상은 무조건 'html, body'

    });


});

//스크롤 이벤트
$(window).scroll(function () {

    //console.log('스크롤 이벤트 발생');

    //현재 스크롤 위치값 반환
    var scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop > 100) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }

});