$(document).ready(function() {
    $slick_slider = $('.slider_algorithm');

    $settings_slider = {
        infinite: false,
        focusOnSelect: true,
        variableWidth: true,
        slidesToShow: 1,
        initialSlide: 0,
        arrows: false,
        // responsive: [{
        //         breakpoint: 320,
        //         settings: {
        //             centerMode: true,
        //             slidesToShow: 1,
        //             variableWidth: true,
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             centerMode: true,
        //             slidesToShow: 2
        //         }
        //     }
        // ]
    }

    slick_on_mobile($slick_slider, $settings_slider);
})

function slick_on_mobile(slider, settings) {
    $(window).on('load resize', function() {
        if ($(window).width() > 992) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
};