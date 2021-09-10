/*
|--------------------------------------------------------------------------
| Custom JS
|--------------------------------------------------------------------------
|
| About author: https://Sticky.vn/
|
*/

/* ------------------------------------------------------------------------ *  
    Sticky header when scroll
* ------------------------------------------------------------------------ */
// jQuery(document).ready(function () {
//   $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if (scroll > 62) {
//       $(".header").addClass("sticky");
//     }
//     else {
//       $(".header").removeClass("sticky");
//     }
//   });
// });

/* ------------------------------------------------------------------------ *  
    jQuery inview
* ------------------------------------------------------------------------ */
// ('div').on('inview', function(event, isInView) {
//   if (isInView) {
//   } else {
//   }
// });

jQuery(document).ready(function () {

    $('.header-main .main-menu').append($('.header-main .logo'));

    // Header Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 62) {
            $(".header").addClass("sticky");
            $(".scrollToTop").addClass("is-scroll");
        }
        else {
            $(".header").removeClass("sticky");
            $(".scrollToTop").removeClass("is-scroll");
        }
    });

    // Scroll To Top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    })

    // Open Menu Mobile
    $('.btn-menu').click(function () {
        $('.popup-offcanvas-menu').addClass('show');
        $('.overlay').addClass('show');
        $('html').addClass('overscoll');
    });

    $('.popup-offcanvas-menu .btn-close').click(function () {
        $('.popup-offcanvas-menu').removeClass('show');
        $('.overlay').removeClass('show');
        $('html').removeClass('overscoll');
    });

    // Sub Menu Toggle
    $('.popup-offcanvas-menu ul.main-menu li.menu-item-has-children').click(function () {
        $(this).children('ul.sub-menu').slideToggle();
        $(this).toggleClass('active');
    });

    // Open map
    $('.location .btn-view-location').click(function() {
        $('.box-map').slideToggle();
    })

    $('.slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        infinite: true,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.slider-partner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});




