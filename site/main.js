$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.header').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
    $('.header-menu__icon').toggleClass('icon_active');
    $('.menu-btn').toggleClass('menu-btn_active');
    $('.content-menu__item').toggleClass('.content-menu__item_active');
})