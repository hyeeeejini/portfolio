//header.js

//전역변수 
var headerH = 0; //header의 높잇값

$(document).ready(function(){
    var headerH = $('header').outerHeight();
    console.log('header의 높잇값: ' +headerH);
    
    
});

$(window).scroll(function (){
    //console.log('스크롤발생');
    
    var scTop = $(this).scrollTop();
    console.log('스크롤 위치값 반환: ' +scTop);

    if (scTop > headerH){
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }

});