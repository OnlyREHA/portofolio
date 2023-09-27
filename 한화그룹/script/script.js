jQuery(document).ready(function () {


    // 메뉴
    $(".main_menu").mouseover(function () {
        $(".submenu_wrap").stop().fadeIn(200);
        $('header').addClass('on');
    });

    $(".main_menu").mouseout(function () {
        $(".submenu_wrap").stop().fadeOut(200);
        $('header').removeClass('on');
    });

    //    슬라이드







});