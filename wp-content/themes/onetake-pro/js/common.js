jQuery(document).ready(function($){

	//Nice scroll initialization
 $("html").niceScroll({
		scrollspeed: 50,
		autohidemode : false,
		cursorwidth : 8,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 9999
	});

/*----------------------------------------------------*/
//  page loader
/*----------------------------------------------------*/  

 if( typeof onetake_params.query_loader !== 'undefined' &&  onetake_params.query_loader == '1' ){
	 window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#efefef",
            backgroundColor: "#111",
            percentage: true,
            barHeight: 1,
            minimumTime: 200,
            fadeOutTime: 1000
        });
    });
	
	window.location.hash = ""; }
	// Parallax Scrolling
	jQuery('.onetake-navbar').onePageNav({
		changeHash: false,
		filter: ".menu-item-type-custom a[href^='#']"
	});
	// responsive nav
	jQuery(".site-nav-toggle").click(function(){
				jQuery(".site-nav").toggle();
			});
	
	//tooltip
	jQuery('#onetake-footer-container .onetake-block-last ul.onetake-social li a').tooltip();

// sticky menu
     jQuery('#onetake-head-container').onepageSticky({'scrollSpeed' : 1000 });	
	 
	 if( onetake_params.fixed_header === 'yes'){
		// jQuery("#onetake-site-container").css({"padding-top":jQuery("header").height()});
		 }
	 
	 //video background
								
if( typeof onetakeBgvideo !== 'undefined' && onetakeBgvideo != null ){

$( onetakeBgvideo.container ).tubular( onetakeBgvideo );

  }
  
  $(".onetake-sections-container .section").each(function(){
	if($(this).find("#tubular-container").length > 0){
		
		$(this).css({"min-height":$(this).find(".container").outerHeight()});
		$(this).css({"height":($(window).height()-$("header").height())+"px"});
		$(this).find("#tubular-container,#tubular-player").css({"min-height":$(this).find(".container").outerHeight()});
		$(this).find("#tubular-container,#tubular-player").css({"height":($(window).height()-$("header").height())+"px"});

		}		
		

 });

//

	$(".section.section-title-style-1").prev(".section").find(".scrolling-anchor").css({"padding-bottom":"60px"});

// smooth scrolling  btn

  $(".onetake-main-content a[href^='#']").on('click', function(e){
			if($(this).data('toggle') !='collapse'){											
																	
				var selectorHeight = $('.sticky-header').height(); 
				var scrollTop = $(window).scrollTop(); 
				e.preventDefault();
		 		var id = $(this).attr('href');
				stickyTop = 0;
				
				if($("body.admin-bar").length){
					if($(window).width() < 765) {
							stickyTop = 46;
							
						} else {
							stickyTop = 32;
						}
				  }
				
				selectorHeight = selectorHeight + stickyTop - 1;
		
				if(typeof $(id).offset() !== 'undefined'){
					var offset = $(id).offset().top ;
			             offset = offset - selectorHeight;	
				    var goTo   = offset - selectorHeight;
				$("html, body").animate({ scrollTop: goTo }, 1000);
				}
				
			}

			});	
  
//WOW
 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();

// portfolio

$('.portfolio-list-wrap .col-md-6:even').addClass('no-marin-left');
    
    
    //prettyPhoto
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    $("a[rel^='prettyPhoto']").prettyPhoto();
    $('.portfolio-list-wrap > li, .portfolio-list-wrap  article > span').hoverdir();
    $("[rel^='tooltip']").tooltip('hide');
    $("[rel^='popover']").popover('hide');
    prettyPrint();
	
// progress bar
$('.progress-bar').waypoint(function() {
$(".progress-bar").each(function(){
var percent = $(this).data("percent");					 
progressBar(percent, $(this));

});
},	
	{
	  offset: '90%',
	  triggerOnce: true
	});
//fact
$('.fact').waypoint(function(down) {
		$('.fact').each(function () {
			var $this = $(this);
			$({ Counter: 0 }).animate({ Counter: parseInt($(this).data('fact')) }, {
				duration: 2000,
				easing: 'swing',
				step: function () {
				    $this.text(Math.ceil(this.Counter));
				}
			});
		});
	},	
	{
	  offset: '90%',
	  triggerOnce: true
	});

// Testimonials
	function onAfter( curr, next, opts, fwd ) {
	  var $ht = jQuery( this ).height();

	  //set the container's height to that of the current slide
	  jQuery( this ).parent().css( 'height' , $ht );
	}

	if( jQuery().cycle ) {
		var reviews_cycle_args = {
			fx: 'fade',
			after: onAfter,
			delay: 0,
			speed:5000
		};


	    jQuery( '.reviews' ).cycle( reviews_cycle_args );
	}
	//carousel
	
	$(".ot-carousel").each(function(){
	 var items = $(this).parents(".onetake-image-carousel").data("items");
	 if( typeof items === 'undefined' || items === '' || items === '0' )
	 {
		 items = 4;
		 }
	 $(this).owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : items,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
	  navigation:true,
	  pagination:false,
	  navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
 
  });
	 });
	//
	/* ------------------------------------------------------------------------ */
/*  SNS TIP															*/
/* ------------------------------------------------------------------------ */
	 
 $('.social-icons a').tooltip('hide');
 
 /*----------------------------------------------------*/
/* MOBILE DETECT FUNCTION
/*----------------------------------------------------*/

	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };	  
	
/*----------------------------------------------------*/
// PARALLAX CALLING
/*----------------------------------------------------*/  

	$(window).bind('load', function () {
		parallaxInit();						  
	});

	function parallaxInit() {
		testMobile = isMobile.any();
		
		if (testMobile == null)
		{
			$('.onetake-parallax').parallax("50%", 0.6);
				
		} 
	}
	//
		$(window).resize(function() {
				var windowWidth = $(window).width(); 		
				if( windowWidth > 919){
					$(".site-nav").show();
					}
            })
		if( !$(".onetake-navbar").length )
		{
			$("header#onetake-head-container").css({"position":"static"});
			$("#onetake-site-container").css({"padding-top":0});
			}



/*----------------------------------------------------*/
// section title center
/*----------------------------------------------------*/  
$(".section-title-style-1 .section-title").each(function(){
	var width     = $(this).width();
	var new_width = (width/2)+15;
	$(this).css({'margin-left':-new_width});					  
								  
   });


/* ------------------------------------------------------------------------ */
/* Preserving aspect ratio for embedded iframes														*/
/* ------------------------------------------------------------------------ */
$('.entry-content embed,.entry-content iframe').each(function(){
										
		var width  = $(this).attr('width');	
		var height = $(this).attr('height');
		if($.isNumeric(width) && $.isNumeric(height)){
			if(width > $(this).width()){
				var new_height = (height/width)*$(this).width();
				$(this).css({'height':new_height});
				}
			
			}				
    });

/* ------------------------------------------------------------------------ */
/* blog shortcode ajax loader													*/
/* ------------------------------------------------------------------------ */

$('.onetake-blog-ajaxloader').on('click','.page_navi a',function(event){
				var category  = $(this).parents('.onetake-blog-ajaxloader').data('category');
				var showposts = $(this).parents('.onetake-blog-ajaxloader').data('showposts');
				var paged     = $(this).text();
				var container = $(this).parents('.onetake-blog-ajaxloader');
				
				container.html('<img class="ajax-loader" src="'+onetake_params.themeurl+'/images/ajax-loader.gif" />');

				event.preventDefault();
				$.ajax({
				 type:"POST",
				 dataType:"html",
				 url:onetake_params.ajaxurl,
				 data: {
                'paged': paged,
				'showposts':showposts,
				'category':category,
				'action':'onetake_blog_ajax',
            },
				 success:function(data){
					 container.find('.ajax-loader').remove();
					 container.html(data);
				 
				 },error:function(){
					 
					 }
					   });	
					 return false;
														 
             });


// shop

$('.product .quick-view').on('click', function() {
			           var that = $(this).parents('.product');
						that.addClass('loading');
						var that2 = $(this),
							pid = that2.data('id');
						$.post(onetake_params.ajaxurl, {
						action: 'onetake_quickview',
						id: pid,
						}, function(resp) {
						$.magnificPopup.open({
							mainClass: 'mfp-move-horizontal product-popup',
							items: {
								src: resp,
								type: 'inline'
							},
							removalDelay: 500,
							callbacks: {
								open: function() {
									$(this.content[0]).find('#lightbox-images')
									.flexslider({
										animation: "slide",
										controlNav: false,
										directionNav: true,
										animationLoop: false,
										slideshow: false,
										prevText: '<i class="fa fa-angle-left"></i>',
										nextText: '<i class="fa fa-angle-right"></i>'
									});
									
									$(this.content[0]).find('form').wc_variation_form();
								},
								change: function() {
									$(this.content[0]).find('#lightbox-images')
									.removeData("flexslider")
									.flexslider({
										animation: "slide",
										controlNav: false,
										directionNav: true,
										animationLoop: false,
										slideshow: false,
										prevText: '<i class="fa fa-angle-left"></i>',
										nextText: '<i class="fa fa-angle-right"></i>'
									});
									$(this.content[0]).find('form').wc_variation_form();
									$(this.contentContainer).removeClass('popup-loading');
								}
							}
						});
						that.removeClass('loading');
						
						$('.mfp-content .product_nav a').live('click', function() {
							$('.mfp-content').addClass('popup-loading');
							$.post(onetake_params.ajaxurl, {
								action: 'onetake_quickview',
								id: $(this).data('id'),
							}, function(resp) {
								$.magnificPopup.open({
									items: {
										src: resp,
										type: 'inline'
									}
								});
							});	
							return false;
						});
						});
						return false;
					});

//
$('#product-nav').flexslider({
					animation: "slide",
					controlNav: false,
					directionNav: false,
					animationLoop: false,
					slideshow: false,
					itemWidth: 106,
					itemMargin: 10,
					asNavFor: '#product-images'
				});
$('#product-images').flexslider({
					animation: "slide",
					controlNav: false,
					directionNav: true,
					animationLoop: false,
					slideshow: false,
					prevText: '<i class="fa fa-angle-left"></i>',
					nextText: '<i class="fa fa-angle-right"></i>',
					
				});
$('.notification-box .close').on('click',function(){
			$(this).parents('.notification-box').remove();							 
			})



$('.accordion-toggle').on('click', function () {
    var self = this;
	var toggle = $(self).parent().find('.accordion-body');
    toggle.slideToggle('normal',
					   function(){
	if(toggle.css('display') == 'none'){
		
	    $(self).parent('li').removeClass('active');
	}else{
		$(self).parent('li').addClass('active');
		}
						   }
					   );

});

//quantity button

 $("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />'); 
                $(document).on("click", ".plus, .minus", function() {
                    var $qty = $(this).closest(".quantity").find(".qty"), currentVal = parseFloat($qty.val()), max = parseFloat($qty.attr("max")), min = parseFloat($qty.attr("min")), step = $qty.attr("step");
                    currentVal && "" !== currentVal && "NaN" !== currentVal || (currentVal = 0), ("" === max || "NaN" === max) && (max = ""), 
                    ("" === min || "NaN" === min) && (min = 0), ("any" === step || "" === step || void 0 === step || "NaN" === parseFloat(step)) && (step = 1), 
                    $(this).is(".plus") ? $qty.val(max && (max === currentVal || currentVal > max) ? max : currentVal + parseFloat(step)) : min && (min === currentVal || min > currentVal) ? $qty.val(min) : currentVal > 0 && $qty.val(currentVal - parseFloat(step)), 
                    $qty.trigger("change");
                });
				

		

});


(function($){
	$.fn.onepageSticky = function( options ) {
		// adding a class to users div
		$(this).addClass('sticky-header')
		var settings = $.extend({
            'scrollSpeed '  : 500
            }, options);

	//	return $(".sticky-header #onepage-nav li.menu-item-type-custom a[href^='#']").each( function() {
			
			if ( settings.scrollSpeed ) {

				var scrollSpeed = settings.scrollSpeed

			}
			
	 stickyTop = 0;
	if(jQuery("body.admin-bar").length){
		if(jQuery(window).width() < 765) {
				stickyTop = 46;
				
			} else {
				stickyTop = 32;
			}
	  }
	
		  if( jQuery(window).width() < 600){
			  stickyTop = 0;
			   }
			   

		  $(this).css({'top':stickyTop});
		 
		  var stickyMenu = function(){
				var scrollTop = $(window).scrollTop(); 
				if (scrollTop > stickyTop) { 
					  $('.sticky-header').css({ 'position': 'fixed' }).addClass('fxd');
					} else {
					  $('.sticky-header').css({ 'position': 'static'}).removeClass('fxd'); 
					 
					}   
					//
				
			};
			if( onetake_params.fixed_header !== 'no'){
				
			stickyMenu();
			$(window).scroll(function() {
									  
				 stickyMenu();
			});
			}
					
	//	});

	}

})(jQuery);


/* ------------------------------------------------------------------------ */
/* scroller menu 													*/
/* ------------------------------------------------------------------------ */

jQuery(document).ready(function($){
								
        /** 
         * This part does the "fixed navigation after scroll" functionality
         * We use the jQuery function scroll() to recalculate our variables as the 
         * page is scrolled/
         */
        $(window).scroll(function(){
								  
    var stickyTop = 0;
	if(jQuery("body.admin-bar").length){
		if(jQuery(window).width() < 765) {
				stickyTop = 46;
				
			} else {
				stickyTop = 32;
			}
	  }
       if( $('header').length ){
		   stickyTop = stickyTop + $('header').height() ;
		   }
		   
		   
            var window_top = $(window).scrollTop() + stickyTop + 30; // the "12" should equal the margin-top value for nav.stick
			if( $('.scroller-menu #nav-anchor').length ){
            var div_top = $('.scroller-menu #nav-anchor').offset().top;
                if (window_top > div_top) {
                    $('.scroller-menu nav').addClass('stick');
					$('.scroller-menu nav').css({"top": stickyTop + 30});
                } else {
                    $('.scroller-menu nav').removeClass('stick');
					$('.scroller-menu nav').css({"top": 0});
                }
			}
        });
        
        
        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        $(".scroller-menu nav a[href^='#']").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash); 
        });
        
        
        
        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = $(".scroller-menu nav li > a[href^='#']"); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {  
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
			if( $('.onetake-sections-container').length )
			ahref = ahref.replace('#','.');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values
        
        $(window).scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();
            
            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
				if( $(theID).length ){
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
				
                var divHeight = $(theID).height(); // get the height of the div in question
				
				var offsetTop = divPos-stickyTop-200;
				
				theID = theID.replace('.','#');
                if ( windowPos >= offsetTop  && windowPos < ( offsetTop  + divHeight ) ) {
					
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
				}
				
            }
            
            if(windowPos + windowHeight == docHeight) {
                if (!$(".scroller-menu nav li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $(".nav-active").attr("href");
                    $(".scroller-menu a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $(".scroller-menu nav li:last-child a").addClass("nav-active");
                }
            }
        });
    });


/*!
 * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
 * Scroll smooth to any element in your DOM.
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/17
 **/
 ;(function($) {
$.scrollTo = $.fn.scrollTo = function(x, y, options){
    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

    options = $.extend({}, {
        gap: {
            x: 0,
            y: 0
        },
        animation: {
            easing: 'swing',
            duration: 600,
            complete: $.noop,
            step: $.noop
        }
    }, options);

    return this.each(function(){
		
		var stickyTop = 0;
	if(jQuery("body.admin-bar").length){
		if(jQuery(window).width() < 765) {
				stickyTop = 46;
				
			} else {
				stickyTop = 32;
			}
	  }
	  
	  var offsetTop = stickyTop+200;
	  
	  if(  $('.onetake-sections-container').length )
	  var offsetTop = stickyTop+50;
	  
        var elem = $(this);
        elem.stop().animate({
            scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
            scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y-offsetTop
        }, options.animation);
    });
};
})(jQuery);
 
/* jQuery tubular plugin
|* by Sean McCambridge
|* http://www.seanmccambridge.com/tubular
|* version: 1.0
|* updated: October 1, 2012
|* since 2010
|* licensed under the MIT License
|* Enjoy.
|* 
|* Thanks,
|* Sean */

;(function ($, window) {

    // test for feature support and return if failure
    
    // defaults
    var defaults = {
        ratio: 16/9, // usually either 4/3 or 16/9 -- tweak as needed
        videoId: 'ZCAnLxRvNNc', // toy robot in space is a good default, no?
        mute: false,
        repeat: true,
        width: $(window).width(),
        wrapperZIndex: 99,
        playButtonClass: 'tubular-play',
        pauseButtonClass: 'tubular-pause',
        muteButtonClass: 'tubular-mute',
        volumeUpClass: 'tubular-volume-up',
        volumeDownClass: 'tubular-volume-down',
        increaseVolumeBy: 10,
        start: 0,
		container:"body",
		defaultVolum:10
    };
	 

    // methods

    var tubular = function(node, options) { // should be called on the wrapper div
        var options = $.extend({}, defaults, options),
            $body = $(options.container) // cache body node
            $node = $(node); // cache wrapper node

        // build container
        var tubularContainer = '<div id="tubular-container" style="overflow: hidden; position: absolute; z-index: -1; width: 100%; height: 100%"><div id="tubular-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>';

        // set up css prereq's, inject tubular container and set up wrapper defaults
       // $('html,body').css({'width': '100%', 'height': '100%'});
        $body.prepend(tubularContainer);
        $node.css({position: 'relative', 'z-index': options.wrapperZIndex});

        // set up iframe player, use global scope so YT api can talk
        window.player;
		
        window.onYouTubeIframeAPIReady = function() {
            player = new YT.Player('tubular-player', {
                width: options.width,
                height: Math.ceil(options.width / options.ratio),
                videoId: options.videoId,
                playerVars: {
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    wmode: 'transparent',
					rel:0
					
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
					
                }
            });
	
        }

        window.onPlayerReady = function(e) {
            resize();
            if (options.mute) e.target.mute();
            e.target.seekTo(parseInt(options.start));
			e.target.setVolume(parseInt(options.defaultVolum));	
            e.target.playVideo();
			
        }

        window.onPlayerStateChange = function(state) {
            if (state.data === 0 && options.repeat) { // video ended and repeat option is set true
                player.seekTo(options.start); // restart
            }
        }

        // resize handler updates width, height and offset of player after resize/init
        var resize = function() {
            var width = $(window).width(),
                pWidth, // player width, to be defined
                height = $(window).height(),
                pHeight, // player height, tbd
                $tubularPlayer = $('#tubular-player');

            // when screen aspect ratio differs from video, video must center and underlay one dimension

            if (width / options.ratio < height) { // if new video height < window height (gap underneath)
                pWidth = Math.ceil(height * options.ratio); // get new player width
                $tubularPlayer.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
				$tubularPlayer.parents('section.section,#tubular-container').css({'height':height});
				
            } else { // new video width < window width (gap to right)
                pHeight = Math.ceil(width / options.ratio); // get new player height
                $tubularPlayer.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2}); // player height is greater, offset top; reset left
				$tubularPlayer.parents('section.section,#tubular-container').css({'height':pHeight});
            }
         

        }

        // events
        $(window).on('resize.tubular', function() {
            resize();
        })

        $('body').on('click','.' + options.playButtonClass, function(e) { // play button
            e.preventDefault();
            player.playVideo();
        }).on('click', '.' + options.pauseButtonClass, function(e) { // pause button
            e.preventDefault();
            player.pauseVideo();
        }).on('click', '.' + options.muteButtonClass, function(e) { // mute button
            e.preventDefault();
            (player.isMuted()) ? player.unMute() : player.mute();
        }).on('click', '.' + options.volumeDownClass, function(e) { // volume down button
            e.preventDefault();
            var currentVolume = player.getVolume();
            if (currentVolume < options.increaseVolumeBy) currentVolume = options.increaseVolumeBy;
            player.setVolume(currentVolume - options.increaseVolumeBy);
        }).on('click', '.' + options.volumeUpClass, function(e) { // volume up button
            e.preventDefault();
            if (player.isMuted()) player.unMute(); // if mute is on, unmute
            var currentVolume = player.getVolume();
            if (currentVolume > 100 - options.increaseVolumeBy) currentVolume = 100 - options.increaseVolumeBy;
            player.setVolume(currentVolume + options.increaseVolumeBy);
        })
    }

    // load yt iframe js api

    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
    // create plugin

    $.fn.tubular = function (options) {
        return this.each(function () {
            if (!$.data(this, 'tubular_instantiated')) { // let's only run one
                $.data(this, 'tubular_instantiated', 
                tubular(this, options));
            }
        });
    }

})(jQuery, window);


/*!
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008-2012 M. Alsup
 * Version: 1.7 (20-FEB-2013)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($) {
"use strict";

var ver = 'Lite-1.7';
var msie = /MSIE/.test(navigator.userAgent);

$.fn.cycle = function(options) {
    return this.each(function() {
        options = options || {};

        if (this.cycleTimeout)
            clearTimeout(this.cycleTimeout);

        this.cycleTimeout = 0;
        this.cyclePause = 0;

        var $cont = $(this);
        var $slides = options.slideExpr ? $(options.slideExpr, this) : $cont.children();
        var els = $slides.get();
        if (els.length < 2) {
            return; // don't bother
        }

        // support metadata plugin (v1.0 and v2.0)
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
        if (meta)
            opts = $.extend(opts, meta);

        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];
        opts.after.unshift(function(){ opts.busy=0; });

        // allow shorthand overrides of width, height and timeout
        var cls = this.className;
        opts.width = parseInt((cls.match(/w:(\d+)/)||[])[1], 10) || opts.width;
        opts.height = parseInt((cls.match(/h:(\d+)/)||[])[1], 10) || opts.height;
        opts.timeout = parseInt((cls.match(/t:(\d+)/)||[])[1], 10) || opts.timeout;

        if ($cont.css('position') == 'static')
            $cont.css('position', 'relative');
        if (opts.width)
            $cont.width(opts.width);
        if (opts.height && opts.height != 'auto')
            $cont.height(opts.height);

        var first = 0;
        $slides.css({position: 'absolute', top:0}).each(function(i) {
            $(this).css('z-index', els.length-i);
        });

        $(els[first]).css('opacity',1).show(); // opacity bit needed to handle reinit case
        if (msie)
            els[first].style.removeAttribute('filter');

        if (opts.fit && opts.width)
            $slides.width(opts.width);
        if (opts.fit && opts.height && opts.height != 'auto')
            $slides.height(opts.height);
        if (opts.pause)
            $cont.hover(function(){this.cyclePause=1;}, function(){this.cyclePause=0;});

        var txFn = $.fn.cycle.transitions[opts.fx];
        if (txFn)
            txFn($cont, $slides, opts);

        $slides.each(function() {
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : $el.height();
            this.cycleW = (opts.fit && opts.width) ? opts.width : $el.width();
        });

        if (opts.cssFirst)
            $($slides[first]).css(opts.cssFirst);

        if (opts.timeout) {
            // ensure that timeout and speed settings are sane
            if (opts.speed.constructor == String)
                opts.speed = {slow: 600, fast: 200}[opts.speed] || 400;
            if (!opts.sync)
                opts.speed = opts.speed / 2;
            while((opts.timeout - opts.speed) < 250)
                opts.timeout += opts.speed;
        }
        opts.speedIn = opts.speed;
        opts.speedOut = opts.speed;

        opts.slideCount = els.length;
        opts.currSlide = first;
        opts.nextSlide = 1;

        // fire artificial events
        var e0 = $slides[first];
        if (opts.before.length)
            opts.before[0].apply(e0, [e0, e0, opts, true]);
        if (opts.after.length > 1)
            opts.after[1].apply(e0, [e0, e0, opts, true]);

        if (opts.click && !opts.next)
            opts.next = opts.click;
        if (opts.next)
            $(opts.next).unbind('click.cycle').bind('click.cycle', function(){return advance(els,opts,opts.rev?-1:1);});
        if (opts.prev)
            $(opts.prev).unbind('click.cycle').bind('click.cycle', function(){return advance(els,opts,opts.rev?1:-1);});

        if (opts.timeout)
            this.cycleTimeout = setTimeout(function() {
                go(els,opts,0,!opts.rev);
            }, opts.timeout + (opts.delay||0));
    });
};

function go(els, opts, manual, fwd) {
    if (opts.busy)
        return;
    var p = els[0].parentNode, curr = els[opts.currSlide], next = els[opts.nextSlide];
    if (p.cycleTimeout === 0 && !manual)
        return;

    if (manual || !p.cyclePause) {
        if (opts.before.length)
            $.each(opts.before, function(i,o) { o.apply(next, [curr, next, opts, fwd]); });
        var after = function() {
            if (msie)
                this.style.removeAttribute('filter');
            $.each(opts.after, function(i,o) { o.apply(next, [curr, next, opts, fwd]); });
            queueNext(opts);
        };

        if (opts.nextSlide != opts.currSlide) {
            opts.busy = 1;
            $.fn.cycle.custom(curr, next, opts, after);
        }
        var roll = (opts.nextSlide + 1) == els.length;
        opts.nextSlide = roll ? 0 : opts.nextSlide+1;
        opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
    } else {
      queueNext(opts);
    }

    function queueNext(opts) {
        if (opts.timeout)
            p.cycleTimeout = setTimeout(function() { go(els,opts,0,!opts.rev); }, opts.timeout);
    }
}

// advance slide forward or back
function advance(els, opts, val) {
    var p = els[0].parentNode, timeout = p.cycleTimeout;
    if (timeout) {
        clearTimeout(timeout);
        p.cycleTimeout = 0;
    }
    opts.nextSlide = opts.currSlide + val;
    if (opts.nextSlide < 0) {
        opts.nextSlide = els.length - 1;
    }
    else if (opts.nextSlide >= els.length) {
        opts.nextSlide = 0;
    }
    go(els, opts, 1, val>=0);
    return false;
}

$.fn.cycle.custom = function(curr, next, opts, cb) {
    var $l = $(curr), $n = $(next);
    $n.css(opts.cssBefore);
    var fn = function() {$n.animate(opts.animIn, opts.speedIn, opts.easeIn, cb);};
    $l.animate(opts.animOut, opts.speedOut, opts.easeOut, function() {
        $l.css(opts.cssAfter);
        if (!opts.sync)
            fn();
    });
    if (opts.sync)
        fn();
};

$.fn.cycle.transitions = {
    fade: function($cont, $slides, opts) {
        $slides.not(':eq(0)').hide();
        opts.cssBefore = { opacity: 0, display: 'block' };
        opts.cssAfter  = { display: 'none' };
        opts.animOut = { opacity: 0 };
        opts.animIn = { opacity: 1 };
    },
    fadeout: function($cont, $slides, opts) {
        opts.before.push(function(curr,next,opts,fwd) {
            $(curr).css('zIndex',opts.slideCount + (fwd === true ? 1 : 0));
            $(next).css('zIndex',opts.slideCount + (fwd === true ? 0 : 1));
        });
        $slides.not(':eq(0)').hide();
        opts.cssBefore = { opacity: 1, display: 'block', zIndex: 1 };
        opts.cssAfter  = { display: 'none', zIndex: 0 };
        opts.animOut = { opacity: 0 };
        opts.animIn = { opacity: 1 };
    }
};

$.fn.cycle.ver = function() { return ver; };

// @see: http://malsup.com/jquery/cycle/lite/
$.fn.cycle.defaults = {
    animIn:        {},
    animOut:       {},
    fx:           'fade',
    after:         null,
    before:        null,
    cssBefore:     {},
    cssAfter:      {},
    delay:         0,
    fit:           0,
    height:       'auto',
    metaAttr:     'cycle',
    next:          null,
    pause:         false,
    prev:          null,
    speed:         1000,
    slideExpr:     null,
    sync:          true,
    timeout:       4000
};

})(jQuery);

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);


function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}

;(function ( $, window, document, undefined ) {

	"use strict";
	
	var $plugin_name = "onetake_maps",
		$defaults 	 = {
			addresses: 	{},
			address_pin: true,
			animations: true,
			delay: 10, // delay between each address if over_query_limit is reached
			infobox_background_color: false,
			infobox_styling: 'default',
			infobox_text_color: false,
			map_style: 'default',
			map_type: 'roadmap',
			marker_icon: false,
			overlay_color: false,
			overlay_color_hsl: {}, // hue, saturation, lightness object
			pan_control: true,
			show_address: true,
			scale_control: true,
			scrollwheel: true,
			zoom: 9,
			zoom_control: true
		};

	// Plugin Constructor
	function Plugin( $element, $options ) {
		this.element 	= $element;
		this.settings 	= $.extend( {}, $defaults, $options );
		this._defaults 	= $defaults;
		this._name 		= $plugin_name;

		this.geocoder = new google.maps.Geocoder();
		this.next_address = 0;
		this.infowindow = new google.maps.InfoWindow();
		
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function() {
			var $map_options = {
					zoom: this.settings.zoom,
					mapTypeId: this.settings.map_type,
					scrollwheel: this.settings.scrollwheel,
					scaleControl: this.settings.scale_control,
					panControl: this.settings.pan_control,
					zoomControl: this.settings.zoom_control
				},
				$latlng, $styles,
				$isDraggable = $(document).width() > 640 ? true : false;


			if( this.settings.scrollwheel ) {
				$map_options.draggable = $isDraggable;
			}

			if( ! this.settings.address_pin ) {
				this.settings.addresses = [ this.settings.addresses[0] ];
			}

			if( this.settings.addresses[0].coordinates ) {
				$latlng = new google.maps.LatLng( this.settings.addresses[0].latitude, this.settings.addresses[0].longitude );
				$map_options.center = $latlng;
			}

			this.map = new google.maps.Map( this.element, $map_options );

			if( this.settings.overlay_color && this.settings.map_style == 'custom' ) {
				$styles = [
					{
						stylers: [
							{ hue: this.settings.overlay_color },
							{ lightness: this.settings.overlay_color_hsl.lum * 2 - 100 },
							{ saturation: this.settings.overlay_color_hsl.sat * 2 - 100 }
						]
					},
					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [
							{ visibility: 'simplified' }
						]
					},
					{
						featureType: 'road',
						elementType: 'labels'
					}
				];

				this.map.setOptions({
					styles: $styles
				});
			}

			this.next_geocode_request();
		},
		/**
		 * Geocoding Addresses
		 * @param  object $search object with address
		 * @return void
		 */
		geocode_address: function( $search ) {
			var $plugin_object = this,
				$address_object;

			if( $search.coordinates === true ) {
				$address_object = { latLng: new google.maps.LatLng( $search.latitude, $search.longitude ) };
			} else {
				$address_object = { address: $search.address };
			}

			this.geocoder.geocode($address_object, function( $results, $status ) {
				var $latitude, $longitude, $location;

				if( $status == google.maps.GeocoderStatus.OK ) {
					$location = $results[0].geometry.location; // first location
					$latitude = $location.lat();
					$longitude = $location.lng();
					
					if( $search.coordinates === true && $search.infobox_content === '' ) {
						$search.geocoded_address = $results[0].formatted_address;
					}

					// If first address is not a coordinate, set a center through address
					if( $plugin_object.next_address == 1 && ! $search.coordinates ) {
						$plugin_object.map.setCenter( $results[0].geometry.location );
					}

					if( $plugin_object.settings.address_pin ) {
						$plugin_object.create_marker( $search, $latitude, $longitude );
					}
				} else {
					// if over query limit, go back and try again with a delayed call
					if( $status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT ) {
						$plugin_object.next_address--;
						$plugin_object.settings.delay++;
					}
				}

				$plugin_object.next_geocode_request();
			});
		},
		create_marker: function( $address, $latitude, $longitude ) {
			var $content_string,
				$marker_settings = {
					position: new google.maps.LatLng( $latitude, $longitude ),
					map: this.map
				},
				$marker;

			if( $address.infobox_content ) {
				$content_string = $address.infobox_content;
			} else {
				$content_string = $address.address;

				// Use google maps suggested address if coordinates were used
				if( $address.coordinates === true && $address.geocoded_address ) {
					$content_string = $address.geocoded_address;
				}
			}

			if( this.settings.animations ) {
				$marker_settings.animation = google.maps.Animation.DROP;
			}

			if( this.settings.map_style == 'custom' && this.settings.marker_icon == 'theme' ) {
				$marker_settings.icon = new google.maps.MarkerImage( $address.marker, null, null, null, new google.maps.Size( 37, 55 ) );
			} else if( this.settings.map_style == 'custom' && $address.marker ) {
				$marker_settings.icon = $address.marker;
			}

			$marker = new google.maps.Marker( $marker_settings );

			this.create_infowindow( $content_string, $marker );
		},
		create_infowindow: function( $content_string, $marker ) {
			var $info_window, $info_box_div, $info_box_options,
				$plugin_object = this;

			if( this.settings.infobox_styling == 'custom' && this.settings.map_style == 'custom' ) {
				$info_box_div = document.createElement('div');
				
				$info_box_options = {
					content: $info_box_div,
					disableAutoPan: false,
					maxWidth: 150,
					pixelOffset: new google.maps.Size( -125, 10 ),
					zIndex: null,
					boxStyle: { 
						background: 'none',
						opacity: 1,
						width: '250px'
					},
					closeBoxMargin: '2px 2px 2px 2px',
					closeBoxURL: '//www.google.com/intl/en_us/mapfiles/close.gif',
					infoBoxClearance: new google.maps.Size( 1, 1 )
				};

				$info_box_div.className = 'onetake-info-box';
				$info_box_div.style.cssText = 'background-color:' + this.settings.infobox_background_color + ';color:' + this.settings.infobox_text_color  + ';';

				$info_box_div.innerHTML = $content_string;

				$info_window = new InfoBox( $info_box_options );
				$info_window.open( this.map, $marker );

				if( ! this.settings.show_address ) {
					$info_window.setVisible( false );
				}

				google.maps.event.addListener( $marker, 'click', function() {
					if( $info_window.getVisible() ) {
						$info_window.setVisible( false );
					} else {
						$info_window.setVisible( true );
					}
				});	
			} else {
				$info_window = new google.maps.InfoWindow({
					content: $content_string
				});
			
				if( this.settings.show_address ) {
					$info_window.show = true;
					$info_window.open( this.map, $marker );
				}		  

				google.maps.event.addListener( $marker, 'click', function() {
					if( $info_window.show ) {
						$info_window.close( $plugin_object.map, this );
						$info_window.show = false;
					} else {
						$info_window.open( $plugin_object.map, this );
						$info_window.show = true;
					}
				});
			}
		},
		/**
		 * Helps with avoiding OVER_QUERY_LIMIT google maps limit
		 * @return void
		 */
		next_geocode_request: function() {
			var $plugin_object = this;

			if ( this.next_address < this.settings.addresses.length ) {
				setTimeout( function() {
					$plugin_object.geocode_address( $plugin_object.settings.addresses[$plugin_object.next_address] );
					$plugin_object.next_address++;
				}, this.settings.delay );
			}
		}
	});

	$.fn[ $plugin_name ] = function ( $options ) {
		this.each(function() {
			if ( ! $.data( this, 'plugin_' + $plugin_name ) ) {
				$.data( this, 'plugin_' + $plugin_name, new Plugin( this, $options ) );
			}
		});

		return this;
	};

})( jQuery, window, document );

