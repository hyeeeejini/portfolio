////nerdy///


/* /////////////// 첫번째 세로 배너 /////////////*/
$(function () {

    var fixHeight = $('.fiximg-box').height();
    console.log(fixHeight);

    $('.slide-box').css({
        height: fixHeight
    });
});



/* /////////////// 마퀴효과 /////////////*/
var moveNum = 0;  //이동하는 left값을 담을 변수

function flow() {

    moveNum++;  //left 이동값을 1씩 증가


    //(무한반복을 위해) 다음을 위한 준비
    //1) li 하나의 너비보다 이동한 left값(moveNum)이 커졌을 때
    //2) li 하나의 너비 구하기

    var boxWidth = $('.marquee-track li').first().outerWidth();

    //if else문
    if (moveNum > boxWidth){
        // 이동한 px수가 li 하나의 너비보다 커졌을 때 다음을 위한 준비
        // (왼쪽으로 흘러가서) 사라진 첫번째 li를 .flow의 맨 뒤로 이동 >> append
        // .flow의 li 순서가 변경 되었으므로 left값 초기화
        // 동시에 이동값(moveNun) 변경 >> moveNum 초기화 (.flow의 li 순서가 변경되었으므로!)

        $('.marquee-track').append($('.marquee-track li').first()).css({
            left: 0
        });

        moveNum = 0;
        
    } else {

        $('.marquee-track').css({
            left: -moveNum
        });

    }

}