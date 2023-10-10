/*
    
    Template Name: AirIP
    Template URI: https://template.hasthemes.com/airip/
    Description: This is html5 template
    Author: HasTech
    Author URI: https://hasthemes.com/
    Version: 1.0
    
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. One Page Nav
	03. Slick Carousel
	04. Owl Carousel
	05. Mail Chimp
	06. Wow js
	07. Counter Up
	08. MeanMenu
	09. ScrollUp
 
======================================
[ End table content ]
======================================*/

(function ($) {
 "use strict";
 
/*------------------------------------
    01. Sticky Menu
------------------------------------- */
    var win = $(window);
    var stic = $(".header-area");
    win.on('scroll',function() {    
       var scroll = win.scrollTop();
       if (scroll < 245) {
        stic.removeClass("sticky");
       }else{
        stic.addClass("sticky");
       }
    }); 
    
/*--------------------------------
    02. One Page Nav
-----------------------------------*/
    var top_offset = $('.main-menu').height() -38;
    $('.main-menu nav ul#nav').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset
    });
    
/*------------------------------------
	03. Slick Carousel
--------------------------------------*/
    $('.feature-wrapper').slick({
        slidesToShow: 3,
        vertical:true,
        verticalSwiping:true,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
    });
/*--------------------------------
    04. Owl Carousel
--------------------------------- */
/*--------------------------------
    FAQ Carousel
--------------------------------- */
	$('.faq-wrapper').owlCarousel({
		loop:true,
		margin:0,
        dots: true,
		nav:false,
		animateOut: 'slideOutDown',
		animateIn: 'zoomInLeft',		
		autoplay:false,
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});     
/*--------------------------------
    Testimonial Carousel
--------------------------------- */
	$('.testimonial-wrapper').owlCarousel({
		loop:true,
		margin:0,
        dots: true,
		nav:false,
		animateOut: 'slideOutDown',
		animateIn: 'slideInDown',		
		autoplay:false,
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});  
    
/*------------------------------------
	05. Mail Chimp
--------------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });
    
    function mailChimpResponse(resp) {
        
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
            
        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }  
    }
    
/*-------------------------------------------
    06. Wow js
--------------------------------------------- */
    new WOW().init();
    
/*--------------------------
    07. Counter Up
---------------------------- */	
    // $('.counter').counterUp({
    //     delay: 70,
    //     time: 5000
    // });
    
/*----------------------------
    08. MeanMenu
------------------------------ */
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
    
/*--------------------------
    09. ScrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
    
})(jQuery);  