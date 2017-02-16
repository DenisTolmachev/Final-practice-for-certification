/**
 * Created by Регион on 16.12.2016.
 */

$(document).ready(function(){
    $("div").children(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        }
    );
    $("section").children(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:0,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                400:{
                    items:2,
                    nav:true
                },
                600:{
                    items:3,
                    nav:true
                },
                800:{
                    items:4,
                    nav:true
                },
                1050:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        }
    );
});

jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });
});
