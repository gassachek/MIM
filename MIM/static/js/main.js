document.querySelector('.header-menu--btn').addEventListener('click', function() {
    document.querySelectorAll('[class^="header"]').forEach(function(element) {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    });
});

document.addEventListener('click', function(event) {
    var headerElements = document.querySelectorAll('[class^="header"]');
    var isClickedInsideHeader = false;

    headerElements.forEach(function(element) {
        if (element.contains(event.target)) {
            isClickedInsideHeader = true;
        }
    });

    if (!isClickedInsideHeader) {
        headerElements.forEach(function(element) {
            element.classList.remove('active');
        });
    }
});

function autoResize() {
    const textarea = document.getElementById("message");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
}




// $('.header-menu-btn').click(function() {
//     $('[class^="header"]').filter(function() {
//         return this.className.match(/\bheader/);
//     }).toggleClass('active');
// });

// $(document).on('click', function(event) {
//     if (!$(event.target).closest('.header').length) {
//         $('[class^="header"]').removeClass('active');
//     }
// });