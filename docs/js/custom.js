// ------------------ Zoom Gallery ------------------//
$(document).ready(function() {
    $(".xzoom, .xzoom-gallery").xzoom({
        position: 'inside',
        mposition: 'fullscreen',
        openOnSmall: false
    });
    // ------------------ End Zoom Gallery ------------------//
    // $('.xzoom').bind('click', function(event) {
    //     var xzoom = $(this).data('xzoom');
    //     xzoom.closezoom();
    //     $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
    //     event.preventDefault();
    // });
    // ------------------ Filter For Mobile ------------------//
    jQuery("#filter").click(function() {
        jQuery(".kss_filter").addClass("kss_filter_mobile");
    });
    jQuery("#kss_hide-filter").click(function() {
        jQuery(".kss_filter").removeClass("kss_filter_mobile");
    });
    // ------------------ Disable Arrow on single product ------------------//
    jQuery(".center img").click(function() {
        jQuery(".swipe-arrow").removeClass("swipe-arrow-visible");
    });
    // ------------------ Mobile View ------------------//
    if ($(window).width() < 790) {
        $('.center').slick({
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.mobile-fixed').show();
                jQuery(".mobile-fixed").addClass("visible");
            } else {
                $('.mobile-fixed').hide();
            }
        });
    }
    // ------------------ Mobile Zoom ------------------//
    document.addEventListener('DOMContentLoaded', function() {
        new SmartPhoto(".js-smartphoto");
    });
    if ($(window).width() < 790) {
        $('.kss_zoom a').addClass('js-smartphoto');
    } else {
        $('.kss_zoom a').removeClass('js-smartphoto');
    }
    // ------------------ Swipe Animation ------------------//
    jQuery(function() {
        jQuery('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            jQuery(".swipe-arrow").removeClass("swipe-arrow-visible");
        });
    })
    // ------------------ Every time the window is scrolled ------------------//
    $(window).scroll(function() {
        /* Check the location of each desired element */
        $('.fade-on').each(function(i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 300);
            }
        });
    });
    // ------------------ Shortlist Icon ------------------//
    $('.kss_heart').on('click', function() {
        $(this).toggleClass('animated-heart');
    });
    // ------------------ Shortlist Icon ------------------//
    $(".navbar-collapse").mmenu({
        wrappers: ["bootstrap4"],
        "extensions": [
            "fx-menu-zoom",
            "fx-panels-zoom",
            "pagedim-black",
            "theme-dark"
        ]
    },{
      clone: true
    });

    api = $('#mm-0').data('mmenu');
    api.bind('open:finish', function() {
      return $('.navbar-toggler').addClass('is-active');
    });
    api.bind('close:finish', function() {
      return $('.navbar-toggler').removeClass('is-active');
    });

    //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
    var $L = 1200,
      $menu_navigation = $('#main-nav'),
      $cart_trigger = $('#cd-cart-trigger'),
      $hamburger_icon = $('#cd-hamburger-menu'),
      $lateral_cart = $('#cd-cart'),
      $shadow_layer = $('#cd-shadow-layer');
      $cart_cancel  = $('#cart_close');

    //open lateral menu on mobile
    $hamburger_icon.on('click', function(event){
      event.preventDefault();
      //close cart panel (if it's open)
      $lateral_cart.removeClass('speed-in');
      toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
    });

    //open cart
    $cart_trigger.on('click', function(event){
      event.preventDefault();
      //close lateral menu (if it's open)
      $menu_navigation.removeClass('speed-in');
      toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
      $( "body" ).addClass( "hide-scroll" );
    });

    // //close lateral cart or lateral menu
    // $shadow_layer.on('click', function(){
    //   $shadow_layer.removeClass('is-visible');
    //   // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    //   if( $lateral_cart.hasClass('speed-in') ) {
    //     $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    //       $('body').removeClass('overflow-hidden');
    //     });
    //     $menu_navigation.removeClass('speed-in');
    //   } else {
    //     $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    //       $('body').removeClass('overflow-hidden');
    //     });
    //     $lateral_cart.removeClass('speed-in');
    //   }
    //     $( "body" ).removeClass( "hide-scroll" );
    // });
 $cart_cancel.on('click', function(){
      $shadow_layer.removeClass('is-visible');
      // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
      if( $lateral_cart.hasClass('speed-in') ) {
        $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          $('body').removeClass('overflow-hidden');
        });
        $menu_navigation.removeClass('speed-in');
      } else {
        $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          $('body').removeClass('overflow-hidden');
        });
        $lateral_cart.removeClass('speed-in');
      }
        $( "body" ).removeClass( "hide-scroll" );
    });
    //move #main-navigation inside header on laptop
    //insert #main-navigation after header on mobile
    move_navigation( $menu_navigation, $L);
    $(window).on('resize', function(){
      move_navigation( $menu_navigation, $L);

      if( $(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
        $menu_navigation.removeClass('speed-in');
        $shadow_layer.removeClass('is-visible');
        $('body').removeClass('overflow-hidden');
      }

    });

    $('body').on('click', '.view-signup', function(){
      $('.sign-in-box').addClass('d-none');
      $('.sign-up-box').removeClass('d-none');
    })
    $('body').on('click', '.view-signin', function(){
      $('.sign-up-box , .reset-box').addClass('d-none');
      $('.sign-in-box').removeClass('d-none');
    })
    $('body').on('click', '.view-reset', function(){
      $('.sign-in-box').addClass('d-none');
      $('.reset-box').removeClass('d-none');
    })
})

function toggle_panel_visibility ($lateral_panel, $background_layer, $body) {
  if( $lateral_panel.hasClass('speed-in') ) {
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    $lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      $body.removeClass('overflow-hidden');
    });
    $background_layer.removeClass('is-visible');

  } else {
    $lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      $body.addClass('overflow-hidden');
    });
    $background_layer.addClass('is-visible');
  }
}

function move_navigation( $navigation, $MQ) {
  if ( $(window).width() >= $MQ ) {
    $navigation.detach();
    $navigation.appendTo('header');
  } else {
    $navigation.detach();
    $navigation.insertAfter('header');
  }
}

// ------------------ Image Load ------------------//
jQuery(window).on("load", function() {
    jQuery.ready.then(function() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('data-imgsrc')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-imgsrc'));
                imgDefer[i].removeAttribute('data-imgsrc');
            }
        }
    });
    jQuery(".swipe-arrow").addClass("swipe-arrow-visible");
    $('.kss_shipping').appendTo('#cd-cart');
    $('.kss_payment').appendTo('#cd-cart');
})

 //getting click event to show modal
    $('#checkout').click(function () {
        $('#signin').modal();
        
      //appending modal background inside the bigform-content
        $('.modal-backdrop').appendTo('#cd-cart');
      //removing body classes to able click events
        $('body').removeClass();
        $('body').addClass('hide-scroll');
    });
      $('.btn-signin').click(function () {
        $('#signin').modal();
        
      //appending modal background inside the bigform-content
        $('.modal-backdrop').appendTo('#cd-cart');
      //removing body classes to able click events
        $('body').removeClass();
          $(".state-1").removeClass('d-block'),100;
         $(".state-1").addClass('d-none'),100;
         $(".state-2").removeClass('d-none'),100;
         $(".state-2").addClass('d-block'),100;
    });
      $('.btn-back').click(function () {
         $(".state-2").removeClass('d-block'),100;
         $(".state-2").addClass('d-none'),100;
         $(".state-1").removeClass('d-none'),100;
         $(".state-1").addClass('d-block'),100;

        });

 $('.btn-verify').click(function () {
    $('#checkout-flow').modal();
   $('#signin').modal('hide');
    $('.modal-backdrop').appendTo('#cd-cart');
    $('body').removeClass();
    $('body').addClass('hide-scroll');
});
 $('.close').click(function () {
  $( "body" ).removeClass( "hide-scroll" );
  $('#checkout-flow').modal('hide');
  $('.modal-backdrop').remove();
 })

 $('.shipping-details-save').click(function () {
    $(".fixed-bottom").removeClass('d-block'),100;
  $(".fixed-bottom").addClass('d-none'),100;
    $('#checkout-flow2').modal();
   $('.kss_shipping').removeClass('slide_to_show'),100;
       $('#checkout-flow2').appendTo('#cd-cart');
    $('.modal-backdrop').appendTo('#cd-cart');
    $('body').removeClass();
    $('body').addClass('hide-scroll');
           $( ".kss_shipping" ).addClass( "d-none" );
  $( ".kss_shipping" ).removeClass( "d-block" );
});

  $('#customRadio1, #customRadio2 ').click(function () {
    $(".fixed-bottom").removeClass('d-block'),100;
  $(".fixed-bottom").addClass('d-none'),100;
    $('#checkout-flow2').modal();
   $('.kss_payment').removeClass('slide_to_show'),100;
       $('#checkout-flow2').appendTo('#cd-cart');
    $('.modal-backdrop').appendTo('#cd-cart');
    $('body').removeClass();
    $('body').addClass('hide-scroll');
       $( ".kss_payment" ).addClass( "d-none" );
  $( ".kss_payment" ).removeClass( "d-block" );
});


  $('#shipping-details').click(function () {
  $( "body" ).removeClass( "hide-scroll" );
  $('#checkout-flow').modal('hide');
  $('.modal-backdrop').remove();
  $( ".kss_shipping" ).addClass( "slide_to_show" );
  $( ".kss_shipping" ).addClass( "d-block" );
  $( ".kss_shipping" ).removeClass( "d-none" );
  $(".fixed-bottom").removeClass('d-none'),100;
  $(".fixed-bottom").addClass('d-block'),100;
      $('body').removeClass();
    $('body').addClass('hide-scroll');
 })

   $('#payment-details').click(function () {
  $( "body" ).removeClass( "hide-scroll" );
  $('#checkout-flow').modal('hide');
  $('.modal-backdrop').remove();
  $( ".kss_payment" ).addClass( "slide_to_show" );
    $( ".kss_payment" ).addClass( "d-block" );
  $( ".kss_payment" ).removeClass( "d-none" );
      $('body').removeClass();
    $('body').addClass('hide-scroll');
 })


$(function(){
  var x=0;
  $('.form-control').focusout(function(){
    var inputValue = $(this).val();
    
    if(inputValue == "")
      {
        $(this).removeClass("has-value");
      }
    else{
      $(this).addClass("has-value");
    }
  });

});