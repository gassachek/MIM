// $('.header-menu-btn').click(function() {
//     $('[class^="header"]').filter(function() {
//         return this.className.match(/\bheader/);
//     }).toggleClass('active');
// });

$('.header-menu-btn').click(function() {
    $('[class^="header"]').filter(function() {
        return this.className.match(/\bheader/);
    }).toggleClass('active');
});

$(document).on('click', function(event) {
    if (!$(event.target).closest('.header').length) {
        $('[class^="header"]').removeClass('active');
    }
});

// $('.menu-btn').on('click', function(e) {
//     e.preventDefault();
//     $('.header').toggleClass('active');
//     $('.header-menu__icon').toggleClass('active');
//     $('.menu-btn').toggleClass('menu-btn_active');
// })


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById(".menu-btn").addEventListener("click", function(event) {
//         event._MenuIsOpen = true;
//         document.querySelector(".header").classList.toggle(".menu_active")
//     })
// });
// document.body.addEventListener("click", function(event) {
//     if (event._MenuIsOpen || event.target.classList.contains("menu")) return;
//     document.querySelector(".header").classList.remove(".menu_active")
// });