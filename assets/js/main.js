(function ($) {
	"use strict";
    
    //document ready function
    jQuery(document).ready(function($){
/*-----
main carousel active
----------------------
        var HomeSlider = $('.home-slider');
        HomeSlider.owlCarousel({
            animateOut: 'fadeOutLeft',
            animateIn: 'bounceInDown',
            dots:false,
            items:1,
            autoplay:true,
            loop:true,
            margin:0,
            stagePadding:0,
            smartSpeed:450
        });*/ 

/*-----
Offset for Main Navigation
----------------------*/
        var MainNav = $('#mainNav');
        MainNav.affix({
            offset: {
                top: 100
            }
        });

/*-----
Owl carousel active for all Instagram carousel
----------------------*/
        var instaCarousel = $('.instagram-carousel');
        instaCarousel.owlCarousel({
            items:5,
            margin:0,
            stagePadding:0,
            smartSpeed:450,
            loop:true,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        });

/*-----
Owl carousel active for Related post
----------------------*/
        var relatedCarousel = $('.related-post');
        relatedCarousel.owlCarousel({
            items:3,
            margin:10,
            stagePadding:0,
            smartSpeed:450,
            loop:true,
            dots:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:3,
                }
            }
        });


/*-----
scrollreveal jQuery plugin
----------------------*/
window.sr = ScrollReveal();
sr.reveal('.bfade', {
        duration: 600,
        delay: 200
    });

/*-----
jQuery scroll up plugin
----------------------*/        
        $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });
    


    });//End document ready function
   
    //window load
    jQuery(window).load(function(){
        
    /*Preloader*/
	var preeLoad = $('#loading');
	preeLoad.fadeOut(2000);


    });

}(jQuery));	


