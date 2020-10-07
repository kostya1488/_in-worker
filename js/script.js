$(document).ready(function() {

    // smooth scrolling
    $(".nav_link").on("click", function(e) {
        e.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 900);
        $('.header, body').removeClass('menu_active')
    });

    $('.menu_toggle').click(function(e) {
        e.preventDefault();
        $('.header, body').toggleClass('menu_active');
    });
});