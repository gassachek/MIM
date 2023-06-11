$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.header').toggleClass('menu_active');
    $('.header-menu__icon').toggleClass('icon_active');
    $('.menu-btn').toggleClass('menu-btn_active');
})
