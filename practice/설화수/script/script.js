

    // 메뉴영역
    $('.main_menu').mouseover(function(){
        $(this).find('.submenu_wrap').stop().fadeIn();
    }).mouseout(function(){
        $(this).find('.submenu_wrap').stop().fadeOut();
    });
    